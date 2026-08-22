'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, FileCheck, MapPin, Target } from 'lucide-react'
const stats = [
{ num: 22, suffix: '', label: 'Ottawa Ward', icon: MapPin },
  { num: 1, suffix: '', label: 'Voice on Council', icon: Users },
  { num: 100, suffix: '%', label: 'Focus on Residents', icon: Target },
  { num: 365, suffix: '', label: 'Days a Year of Work', icon: FileCheck },
]
function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = performance.now()
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [inView, target])
  return <span ref={ref}>{count}{suffix}</span>
}
export default function StatsBar() {
  return (
<section className="bg-navy py-20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
className="block text-gold font-body font-bold text-sm tracking-[0.2em] uppercase mb-2"
          >
Become a Volunteer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white leading-tight uppercase"
          >
            Our campaign is powered by contributions <br/>
            <span className="text-gold">from supporters</span>
          </motion.h2>
        </div>
        {/* Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-white/10 pt-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                    <Icon size={24} />
                  </div>
                </div>
                <div className="font-display font-bold text-5xl md:text-6xl text-white leading-none mb-2 group-hover:scale-105 transition-transform duration-300">
                  <AnimatedCounter target={stat.num} suffix={stat.suffix} />
                </div>
                <div className="text-white/60 font-body text-sm font-semibold tracking-wider uppercase">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
</section>
  )
}
