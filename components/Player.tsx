'use client'

import { transformTimeToSeconds } from 'lib/utils/date-utils'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import TimeStampChecker from './TimeStampChecker'

export function TimeStampPlayer({
  heading,
  description,
  link,
  checkPoints,
  summary,
}: {
  heading?: string
  description?: string
  link: string
  checkPoints: { label: string; content: string; time: string }[]
  summary?: string
}) {
  const [time, setTime] = useState('00:00:00')

  const updateTime = (newTime) => {
    setTime(newTime)
  }

  return (
    <div className="relative mb-8 h-auto max-w-full overflow-hidden pb-12">
      <TimeStampChecker
        heading={heading}
        description={description}
        updateTime={updateTime}
        checkPoints={checkPoints}
        summary={summary}
      />

      <iframe
        src={`${link}&high_quality=1&autoplay=0&t=${transformTimeToSeconds(time)}`}
        allowFullScreen
        width="100%"
        height="500"
        scrolling="no"
        frameBorder="0"
        title="Bilibili Player"
      ></iframe>
    </div>
  )
}

export default function Player({ link, start = '00:00:00' }: { link: string; start?: string }) {
  return (
    <div className="relative mb-8 h-auto max-w-full overflow-hidden pb-12">
      <iframe
        src={`${link}&high_quality=1&autoplay=0&t=${transformTimeToSeconds(start)}`}
        allowFullScreen
        width="100%"
        height="500"
        scrolling="no"
        frameBorder="0"
        title="Bilibili Player"
      ></iframe>
    </div>
  )
}
