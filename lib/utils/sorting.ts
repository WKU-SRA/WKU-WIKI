import { allBlogs } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'

function groupAndSortPosts(posts: CoreContent<Blog>[]): CoreContent<Blog>[] {
  const groupedPosts: CoreContent<Blog>[] = []

  posts.forEach((post) => {
    const series = post.series
    if (series && !groupedPosts.some((p) => p.series === series)) {
      const seriesPosts = posts.filter((p) => p.series === series)
      groupedPosts.push(...seriesPosts)
    }
  })

  const sortedPosts = groupedPosts.sort((a, b) => {
    if (a.series === b.series) {
      return (a.depth ?? 0) - (b.depth ?? 0)
    }
    return 0
  })

  return sortedPosts
}

const sortedPosts = groupAndSortPosts(allBlogs)

export { sortedPosts, groupAndSortPosts }
