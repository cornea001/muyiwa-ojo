'use client'

import { motion } from 'framer-motion'
import { Home, Truck, Bus, Shield, CheckCircle } from 'lucide-react'
import SpotlightCard from '@/components/SpotlightCard'
import { useTranslations } from 'next-intl'

export default function Priorities() {
  const t = useTranslations('Priorities')

  const priorities = [
    {
      num: '01',
      icon: Home,
      title: t('p1_title'),
      desc: t('p1_desc'),
      bullets: t.raw('p1_bullets') as string[],
      quote: t('p1_quote'),
      action: t('p1_action')
    },
    {
      num: '02',
      icon: Shield,
      title: t('p2_title'),
      desc: t('p2_desc'),
      bullets: t.raw('p2_bullets') as string[],
      quote: t('p2_quote'),
      action: t('p2_action')
    },
    {
      num: '03',
      icon: Bus,
      title: t('p3_title'),
      desc: t('p3_desc'),
      bullets: t.raw('p3_bullets') as string[],
      quote: t('p3_quote'),
      action: t('p3_action')
    },
    {
      num: '04',
      icon: Truck,
      title: t('p4_title'),
      desc: t('p4_desc'),
      bullets: t.raw('p4_bullets') as string[],
      quote: t('p4_quote'),
      action: t('p4_action')
    }
  ]

  return (
    <section id="priorities" className="py-24 bg-cream dark:bg-navy transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Split Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center mb-20">
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="block text-gold font-body font-bold text-sm tracking-[0.2em] uppercase mb-4"
              >
                {t('eyebrow')}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-display font-bold text-navy dark:text-white leading-tight uppercase transition-colors duration-300"
              >
                {t('title_top')} <br/>
                <span className="text-gold">{t('title_bottom')}</span>
              </motion.h2>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-navy/70 dark:text-cream/80 text-lg font-body leading-relaxed border-l-4 border-gold pl-6 transition-colors duration-300"
            >
              {t('desc')}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 relative aspect-[16/9] lg:aspect-[4/3] group overflow-hidden"
          >
            <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
              src="/priorities-hero.avif" 
              alt="Community Priorities" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
        </div>

        {/* Priorities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {priorities.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <SpotlightCard className="group bg-white dark:bg-navy-light p-8 lg:p-10 border border-gray-100 dark:border-navy-light hover:border-gold/30 dark:hover:border-gold/30 transition-all duration-300 relative h-full flex flex-col">
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 bg-cream dark:bg-navy flex items-center justify-center text-navy dark:text-white group-hover:bg-gold dark:group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                      <Icon size={28} />
                    </div>
                    <span className="font-display text-4xl font-bold text-gray-100 dark:text-navy/70 group-hover:text-gold/20 dark:group-hover:text-gold/20 transition-colors duration-300">
                      {p.num}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-navy dark:text-white uppercase mb-4 group-hover:text-gold dark:group-hover:text-gold transition-colors duration-300">
                    {p.title}
                  </h3>
                  
                  <p className="text-navy/70 dark:text-cream/80 font-body transition-colors duration-300 mb-8">
                    {p.desc}
                  </p>

                  <ul className="flex-1 space-y-4 mb-6">
                    {p.bullets && p.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-navy/70 dark:text-cream/80 font-body text-sm">
                        <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-navy/5 dark:bg-white/5 p-4 mb-6 border border-navy/10 dark:border-white/10">
                    <p className="text-navy dark:text-white font-body text-sm font-semibold">
                      {p.action}
                    </p>
                  </div>

                  <blockquote className="border-l-2 border-gold pl-4 italic text-navy/60 dark:text-cream/60 font-body text-sm">
                    "{p.quote}"
                  </blockquote>
                  
                </SpotlightCard>
              </motion.div>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}