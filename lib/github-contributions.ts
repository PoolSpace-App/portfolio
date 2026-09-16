export type GitHubContributionGraph = {
  username: string
  profileUrl: string
  totalContributions: number
  cells: number[]
  monthMarkers: Array<{ weekIndex: number; label: string }>
  weekCount: number
}

const LEVEL_MAP: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
}

type GraphDay = {
  date: string
  count: number
  level: number
}

type GraphWeek = GraphDay[]

function buildGraphFromWeeks(username: string, weeks: GraphWeek[], totalContributions: number): GitHubContributionGraph {
  const cells: number[] = []

  for (const week of weeks) {
    for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
      const day = week[dayIndex]
      cells.push(day?.level ?? 0)
    }
  }

  const monthMarkers: GitHubContributionGraph["monthMarkers"] = []
  let previousMonth = ""

  weeks.forEach((week, weekIndex) => {
    const firstDay = week.find((day) => day?.date)
    if (!firstDay) return

    const month = new Intl.DateTimeFormat("en-US", {
      month: "short",
      timeZone: "UTC",
    }).format(new Date(`${firstDay.date}T00:00:00Z`))

    if (month !== previousMonth) {
      monthMarkers.push({ weekIndex, label: month })
      previousMonth = month
    }
  })

  return {
    username,
    profileUrl: `https://github.com/${username}`,
    totalContributions,
    cells,
    monthMarkers,
    weekCount: weeks.length,
  }
}

async function fetchFromGitHubGraphQL(username: string, token: string): Promise<GitHubContributionGraph | null> {
  const to = new Date()
  const from = new Date(to)
  from.setFullYear(from.getFullYear() - 1)

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query ContributionCalendar($login: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $login) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    contributionLevel
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        login: username,
        from: from.toISOString(),
        to: to.toISOString(),
      },
    }),
    next: { revalidate: 3600 },
  })

  if (!response.ok) return null

  const payload = (await response.json()) as {
    errors?: unknown[]
    data?: {
      user?: {
        contributionsCollection?: {
          contributionCalendar?: {
            totalContributions: number
            weeks: Array<{
              contributionDays: Array<{
                date: string
                contributionCount: number
                contributionLevel: string
              }>
            }>
          }
        }
      }
    }
  }

  if (payload.errors?.length) {
    console.error("GitHub GraphQL errors:", payload.errors)
    return null
  }

  const calendar = payload.data?.user?.contributionsCollection?.contributionCalendar
  if (!calendar?.weeks?.length) return null

  const weeks: GraphWeek[] = calendar.weeks.map((week) =>
    week.contributionDays.map((day) => ({
      date: day.date,
      count: day.contributionCount,
      level: LEVEL_MAP[day.contributionLevel] ?? 0,
    })),
  )

  return buildGraphFromWeeks(username, weeks, calendar.totalContributions)
}

export async function getGitHubContributions(): Promise<GitHubContributionGraph | null> {
  const username = process.env.GITHUB_USERNAME?.trim()
  if (!username) return null

  const token = process.env.GITHUB_TOKEN?.trim()
  if (!token) {
    console.warn(
      "GITHUB_TOKEN is required for accurate contribution data when most activity is in private repos.",
    )
    return null
  }

  return fetchFromGitHubGraphQL(username, token)
}
