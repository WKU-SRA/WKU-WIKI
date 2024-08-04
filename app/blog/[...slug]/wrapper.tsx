'use client'

import React from 'react'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}
//I delete components props, have no idea whether it is necessary, but it will pass a function to the client component, so I delete it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ClientComponentProps {
  jsonLd: object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainContent: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  authorDetails: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  next: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prev: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post: any
}

const ClientComponent: React.FC<ClientComponentProps> = ({
  jsonLd,
  mainContent,
  authorDetails,
  next,
  prev,
  post,
}) => {
  const Layout = layouts[post.layout || defaultLayout]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
        <MDXLayoutRenderer code={post.body.code} toc={post.toc} />
      </Layout>
    </>
  )
}

export default ClientComponent
