'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import SpotlightCard from '@/components/SpotlightCard'

export default function NewsEvents() {
  const t = useTranslations('NewsEvents')

  const events = [
    { date: t('e1_date'), title: t('e1_title'), desc: t('e1_desc'), link: '#' },
    { date: t('e2_date'), title: t('e2_title'), desc: t('e2_desc'), link: '#' },
    { date: t('e3_date'), title: t('e3_title'), desc: t('e3_desc'), link: '#' },
  ]

  return (
    <section id="news" className="py-16 md:py-24 bg-cream dark:bg-navy-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="block text-gold font-body font-bold text-sm tracking-[0.2em] uppercase mb-4"
            >
              {t('voting_info')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-display font-bold text-navy dark:text-white uppercase transition-colors duration-300"
            >
              {t('key_dates')}
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {events.map((ev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <SpotlightCard className="group bg-white dark:bg-navy-light p-6 md:p-8 border border-gray-100 dark:border-navy-light hover:border-gold/30 dark:hover:border-gold/30 transition-all duration-300 flex flex-col h-full">

                <div className="flex items-center gap-3 text-gold font-bold font-body text-sm uppercase tracking-widest mb-6">
                  <Calendar size={16} />
                  <span>{ev.date}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-navy dark:text-white uppercase mb-4 group-hover:text-gold transition-colors duration-300">
                  {ev.title}
                </h3>

                <p className="text-navy/70 dark:text-cream/80 font-body mb-2 flex-1 transition-colors duration-300">
                  {ev.desc}
                </p>

              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
