'use client'

import { Button } from './ui/button'
import Modal from './ui/window'
import { cn } from 'lib/utils'
import { ReactNode, useState } from 'react'
export default function Quiz({
  className,
  question,
  correct,
  options,
  explain,
}: {
  className?: string
  question: React.ReactElement
  correct: string
  options?: string[]
  explain?: ReactNode
}) {
  const [selected, setSelected] = useState<string | null>(null)
  const [explained, setexplained] = useState<boolean>(false)

  return (
    <Modal
      element={
        <div className={cn('flex flex-col space-y-10 text-center', className)}>
          {question}
          <div className="mt-14 flex flex-col items-center justify-around">
            {options ? (
              options.map((option, index) => (
                <Button
                  id={option}
                  className={cn(
                    'mb-4 w-4/6',
                    className?.includes('whitespace-pre') ? 'whitespace-pre' : 'whitespace-normal',
                    option === correct && option === selected
                      ? 'bg-green-500'
                      : option !== selected
                        ? 'bg-slate-50 dark:bg-apple-primary-dark-from'
                        : 'bg-red-500'
                  )}
                  variant={'outline'}
                  key={index}
                  onClick={() =>
                    setSelected((prevSelected) => (prevSelected === option ? null : option))
                  }
                >
                  {option}
                </Button>
              ))
            ) : (
              <div
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setexplained(!explained)
                  }
                }}
                tabIndex={0}
                onClick={() => setexplained(!explained)}
              >
                直接查看答案
              </div>
            )}
          </div>
          {options && (
            <Button
              onClick={() => {
                setexplained(!explained)
              }}
            >
              答案与解析
            </Button>
          )}
          {explained && (
            <div>
              解析<br></br>
              {explain}
            </div>
          )}
          {explained}
        </div>
      }
    ></Modal>
  )
}
