'use client'
import React, { useState, useRef, useEffect } from 'react'
import Modal from './ui/window'
import Slider from './Slider'

const ResizableModal = ({ element }) => {
  const [sliderValue, setSliderValue] = useState(50)
  const modalRef = useRef<HTMLDivElement>(null)
  const [aspectRatio, setAspectRatio] = useState(1)

  const handleChange = (value: number[]) => {
    if (value.length > 0) {
      setSliderValue(value[0])
    }
  }

  useEffect(() => {
    if (modalRef.current) {
      const { width, height } = modalRef.current.getBoundingClientRect()
      setAspectRatio(width / height)
    }
  }, [])

  const modalWidth = `${sliderValue}%`
  const modalHeight = `calc(${sliderValue}% / ${aspectRatio})`

  return (
    <div>
      <Slider value={[sliderValue]} onValueChange={handleChange} />
      <div ref={modalRef} style={{ width: modalWidth, height: modalHeight }}>
        <Modal element={element} />
      </div>
      <p>Modal Width: {modalWidth}</p>
      <p>Modal Height: {modalHeight}</p>
    </div>
  )
}

export default ResizableModal
