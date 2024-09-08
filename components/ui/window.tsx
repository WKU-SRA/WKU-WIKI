'use client'

import React, { useState } from 'react'
import { PanelLeftCloseIcon } from 'lucide-react'
import { cn } from 'lib/utils'

export default function Window({
  element,
  style,
}: {
  element: React.ReactElement
  style?: object
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [closedAll, setClosedAll] = useState(false)
  const [visible, setVisible] = useState(true)

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)
  const closeAll = () => {
    console.log(closedAll)
    setClosedAll(!closedAll)
  }

  // for accessibility
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      openModal()
    }
  }

  return (
    <div
      style={style}
      className={cn(
        'relative flex w-full flex-col items-center justify-center rounded-b-xl  rounded-t-2xl bg-apple-secondary-ight-from p-4 dark:bg-apple-secondary-dark-from',
        visible ? 'opacity-100' : 'w-2/3 opacity-30'
      )}
    >
      <div className="absolute left-0 top-0 flex min-h-6 w-full flex-row items-center justify-start space-x-2 rounded-t-2xl bg-apple-primary-light-to p-2 pl-4 dark:bg-apple-primary-dark-from dark:bg-secondary">
        <button
          onClick={closeAll}
          tabIndex={0}
          className={cn(
            "relative h-3 w-3 rounded-full bg-red-500 hover:after:absolute hover:after:left-1/2 hover:after:top-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:transform hover:after:text-white hover:after:content-['❌']",
            closedAll && "bg-green-200 hover:bg-green-500 hover:after:content-['✅']"
          )}
        ></button>
        <button
          onClick={() => setVisible(!visible)}
          tabIndex={0}
          className="relative h-3 w-3 rounded-full bg-yellow-500 hover:after:absolute hover:after:left-1/2 hover:after:top-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:transform hover:after:text-white hover:after:content-['👇']"
        ></button>
        <button
          tabIndex={0}
          onClick={openModal}
          className="relative h-3 w-3 rounded-full bg-green-500 hover:after:absolute hover:after:left-1/2 hover:after:top-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:transform hover:after:text-white hover:after:content-['🔍']"
        ></button>
      </div>

      {!closedAll && visible && (
        <div className={cn('mt-6 h-full w-full cursor-pointer')}>{element}</div>
      )}
      {modalIsOpen && (
        <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
          <div className="max-h-[95vh] overflow-auto rounded-xl bg-white p-3 shadow-lg dark:bg-apple-primary-dark-from">
            <button
              onClick={closeModal}
              className=" mb-4 rounded-full bg-neutral-200 p-2 hover:bg-destructive-foreground dark:bg-apple-primary-dark-to"
            >
              <PanelLeftCloseIcon className="h-6 w-6" />
            </button>
            {<div className="min-h-[50vh] w-[90vw]">{element}</div>}
          </div>
        </div>
      )}
    </div>
  )
}
