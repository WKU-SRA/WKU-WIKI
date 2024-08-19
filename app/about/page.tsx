import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: '关于我们' })

export default function Page() {
  const mainContent = allAuthors.map((author) => {
    return { content: coreContent(author), author }
  })

  return (
    <div className="flex flex-col">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          关于我们
        </h1>
      </div>
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {mainContent.map(({ content, author }) => (
          <AuthorLayout key={author._id} content={content}>
            <MDXLayoutRenderer code={author.body.code} />
          </AuthorLayout>
        ))}
      </div>
    </div>
  )
}
