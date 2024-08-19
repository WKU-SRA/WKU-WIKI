'use client'

import { useEffect } from 'react'
import Prism from 'prismjs'

import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-java'

interface CodeBlockProps {
  code: string
  language: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <pre className={`language-${language}`}>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  )
}

export default CodeBlock
