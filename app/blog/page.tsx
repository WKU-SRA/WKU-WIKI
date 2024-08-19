import ListLayout from '@/layouts/ListLayoutWithTags'
import { genPageMetadata } from 'app/seo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import { sortedPosts } from 'lib/utils/sorting'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: '文章' })
// to do: try to find a better sorting algorithm

export default function BlogPage() {
  const posts = sortedPosts
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <div className="flex flex-col">
      <Button className="group mx-auto sm:ml-0" variant={'ghost'}>
        <Link className="flex flex-row items-center gap-1" href="blog/time-line">
          <ArrowUp className="transition-transform duration-300 group-hover:-translate-y-2" />
          最新的
        </Link>
      </Button>{' '}
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="文章"
      />
    </div>
  )
}
