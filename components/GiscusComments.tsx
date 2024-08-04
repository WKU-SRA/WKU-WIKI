'use client'
import Giscus from '@giscus/react'

export default function GiscusComments() {
  return (
    <Giscus
      id="comments"
      repo="WKU-SRA/WKU-WIKI"
      repoId="R_kgDOMUwIIg"
      category="Announcements"
      categoryId="DIC_kwDOMUwIIs4ChTmk"
      mapping="title"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="zh-CN"
      loading="lazy"
    />
  )
}
