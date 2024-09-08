import React from 'react'
import { CircleX } from 'lucide-react'
import { cn } from 'lib/utils'
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  contentClassName?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, contentClassName }) => {
  if (!isOpen) return null

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
      <div
        onKeyDown={(e) => e.stopPropagation()}
        className={cn('relative rounded-lg p-6 shadow-lg', contentClassName)}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="absolute -top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <CircleX />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
