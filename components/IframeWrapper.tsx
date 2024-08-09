'use client'

import React, { useState } from 'react'
import Modal from './ui/modal'
import { useEffect } from 'react'

export default function FrameModal({ href }: { href: string }) {
  return (
    <Modal
      element={
        <div className="relative min-h-[500px]">
          <iframe
            className="min-h-[500px]"
            src={href}
            allowFullScreen
            width="100%"
            height="100%"
            scrolling="1"
            frameBorder="0"
            title="python interpreter"
          />
        </div>
      }
    />
  )
}

export function IframWrapper({ href }: { href: string }) {
  return (
    <div className="">
      <iframe
        src={href}
        allowFullScreen
        width="100%"
        height="100%"
        scrolling="1"
        frameBorder="0"
        title="python interpreter"
      />
    </div>
  )
}
