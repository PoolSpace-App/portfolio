import HomePage from "@/components/home-page"
import { getGitHubContributions } from "@/lib/github-contributions"
import { getAllBlogsFromNotion } from "@/lib/notion"

export const revalidate = 3600

export default async function Page() {
  const [blogs, githubContributions] = await Promise.all([
    getAllBlogsFromNotion(),
    getGitHubContributions(),
  ])

  return <HomePage latestBlogs={blogs.slice(0, 3)} githubContributions={githubContributions} />
}
