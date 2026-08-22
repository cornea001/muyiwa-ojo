'use client'

import { useState, useEffect } from 'react'
import JoinModal from './JoinModal'

export default function JoinModalClient() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    window.addEventListener('openJoinModal', handleOpen)
    return () => window.removeEventListener('openJoinModal', handleOpen)
  }, [])

  return <JoinModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
}
