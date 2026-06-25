import { getAllBlogsFromNotion } from "@/lib/notion"
import HomePage from "@/components/home-page"

export const revalidate = 60

export default async function Page() {
  const blogs = await getAllBlogsFromNotion()

  return <HomePage latestBlogs={blogs.slice(0, 3)} />
}
