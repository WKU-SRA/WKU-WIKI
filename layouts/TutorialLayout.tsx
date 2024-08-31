import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'

//to do: add the layout for the tutorial post

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function TutorialPostLayout({ content, next, prev, children }: LayoutProps) {
  const { path, slug, date, title } = content

  return <></>
}
