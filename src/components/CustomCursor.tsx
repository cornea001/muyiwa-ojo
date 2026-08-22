'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
 const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
 const [isHovering, setIsHovering] = useState(false)
 const [isVisible, setIsVisible] = useState(false)

 useEffect(() => {
 const mouseMove = (e: MouseEvent) => {
 setMousePosition({ x: e.clientX, y: e.clientY })
 if (!isVisible) setIsVisible(true)
 }
 const mouseLeave = () => setIsVisible(false)
 const mouseEnter = () => setIsVisible(true)

 window.addEventListener('mousemove', mouseMove)
 document.addEventListener('mouseleave', mouseLeave)
 document.addEventListener('mouseenter', mouseEnter)

 const handleHoverStart = () => setIsHovering(true)
 const handleHoverEnd = () => setIsHovering(false)

 // Select all interactive elements
 const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]')
 
 interactiveElements.forEach((el) => {
 el.addEventListener('mouseenter', handleHoverStart)
 el.addEventListener('mouseleave', handleHoverEnd)
 })

 // Mutation observer to catch dynamically added interactive elements
 const observer = new MutationObserver((mutations) => {
 mutations.forEach((mutation) => {
 if (mutation.addedNodes.length) {
 const newElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]')
 newElements.forEach((el) => {
 el.removeEventListener('mouseenter', handleHoverStart)
 el.removeEventListener('mouseleave', handleHoverEnd)
 el.addEventListener('mouseenter', handleHoverStart)
 el.addEventListener('mouseleave', handleHoverEnd)
 })
 }
 })
 })

 observer.observe(document.body, { childList: true, subtree: true })

 return () => {
 window.removeEventListener('mousemove', mouseMove)
 document.removeEventListener('mouseleave', mouseLeave)
 document.removeEventListener('mouseenter', mouseEnter)
 interactiveElements.forEach((el) => {
 el.removeEventListener('mouseenter', handleHoverStart)
 el.removeEventListener('mouseleave', handleHoverEnd)
 })
 observer.disconnect()
 }
 }, [isVisible])

 if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
 return null // Don't show custom cursor on touch devices
 }

 const variants = {
 default: {
 x: mousePosition.x - 16,
 y: mousePosition.y - 16,
 scale: 1,
 opacity: isVisible ? 1 : 0,
 backgroundColor: 'rgba(212, 165, 55, 0)', // Transparent inside
 border: '2px solid rgba(212, 165, 55, 0.5)' // Gold border
 },
 hover: {
 x: mousePosition.x - 16,
 y: mousePosition.y - 16,
 scale: 1.5,
 opacity: isVisible ? 1 : 0,
 backgroundColor: 'rgba(212, 165, 55, 0.1)',
 border: '2px solid rgba(212, 165, 55, 1)'
 }
 }

 const dotVariants = {
 default: {
 x: mousePosition.x - 4,
 y: mousePosition.y - 4,
 opacity: isVisible ? 1 : 0,
 },
 hover: {
 x: mousePosition.x - 4,
 y: mousePosition.y - 4,
 opacity: 0,
 }
 }

 return (
 <>
 {/* Outer Ring */}
 <motion.div
 variants={variants}
 animate={isHovering ? 'hover' : 'default'}
 transition={{ type: 'spring', stiffness: 300, damping: 28, mass: 0.5 }}
 className="fixed top-0 left-0 w-8 h-8 -full pointer-events-none z-[9999] mix-blend-difference"
 />
 {/* Inner Dot */}
 <motion.div
 variants={dotVariants}
 animate={isHovering ? 'hover' : 'default'}
 transition={{ type: 'spring', stiffness: 1000, damping: 40, mass: 0.1 }}
 className="fixed top-0 left-0 w-2 h-2 bg-gold -full pointer-events-none z-[9999]"
 />
 </>
 )
}
