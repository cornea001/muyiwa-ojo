'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useTranslations } from 'next-intl'
import StatsBar from './StatsBar'

export default function WhyRunning() {
  const t = useTranslations('WhyRunning')
  
  return (
    <section id="running" className="bg-cream dark:bg-navy-dark py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-gold font-body font-bold text-sm tracking-[0.2em] uppercase mb-4"
          >
            {t('eyebrow')}
          </motion.span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          
          {/* Blockquote Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="sticky top-32">
              <Quote size={48} className="text-gold/30 mb-6" />
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-navy dark:text-white leading-tight font-bold italic transition-colors duration-300">
                "{t('quote')}"
              </h3>
              <div className="w-16 h-1 bg-gold mt-8"></div>
            </div>
          </motion.div>

          {/* Statement Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-navy/80 dark:text-cream/80 text-lg leading-relaxed font-body transition-colors duration-300"
          >
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
            <p className="font-semibold text-navy dark:text-white transition-colors duration-300">{t('p4')}</p>
          </motion.div>

        </div>

        {/* Stats integrated at the bottom of the section */}
        <StatsBar />

      </div>
    </section>
  )
}
