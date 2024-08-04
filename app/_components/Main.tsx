'use client'
import Image from 'next/image'
import React from 'react'
import { Carousel, Card } from '@/components/ui/apple-cards-carousel'
import { Bio, CS, Busi, Others } from './Content'
import { FlipWords } from 'components/ui/flip-words'

export function Apple() {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />)
  const start = ['Start', '从']
  const here = ['Here', '这里']
  const go = ['Go', '走向']
  const anywhere = ['Anywhere', '世界']

  return (
    <div className="h-full w-full py-20">
      <div className="mx-auto max-w-7xl pl-4 font-sans text-xl font-bold text-neutral-800 dark:text-neutral-200 md:text-5xl">
        <FlipWords className="p-1" words={start} />
        <FlipWords className="p-1" words={here} />
        <FlipWords className="p-1" words={go} />
        <FlipWords className="p-1" words={anywhere} />
      </div>
      <Carousel items={cards} />
    </div>
  )
}

const data = [
  {
    category: '生物 化学 环境科学',
    title: '我们用试管改变世界',
    src: '/static/images/close-up-hands-holding-glassware.jpg',
    content: <Bio />,
  },
  {
    category: '计算机科学',
    title: '我们用代码建构世界',
    src: '/static/images/it-expert-updating-ai-systems.jpg',
    content: <CS />,
  },
  {
    category: '商业分析',
    title: '我们用商业打量世界',
    src: '/static/images/entrepreneurs-discussing-work-results-meeting.jpg',
    content: <Busi />,
  },

  {
    category: '个人提升',
    title: '这里有你想要的一切',
    src: '/static/images/logo.png',
    content: <Others />,
  },
]
