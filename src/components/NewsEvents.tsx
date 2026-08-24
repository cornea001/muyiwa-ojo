'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import SpotlightCard from '@/components/SpotlightCard'

export default function NewsEvents() {
  const t = useTranslations('NewsEvents')

  const events = [
    {
      date: 'Oct 26, 2026',
      title: 'Election Day',
      desc: 'Polls open across Ward 22. Make your voice heard.',
      link: '#',
    },
    {
      date: 'Sep 15, 2026',
      title: 'Community Townhall',
      desc: 'Join Muyiwa for a conversation about our community priorities.',
      link: '#',
    },
    {
      date: 'Aug 30, 2026',
      title: 'Campaign Kick-off BBQ',
      desc: 'Meet the team, grab a lawn sign, and enjoy some food.',
      link: '#',
    }
  ]

  return (
    <section id="news" className="py-24 bg-cream dark:bg-navy-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
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
              className="text-4xl font-display font-bold text-navy dark:text-white uppercase transition-colors duration-300"
            >
              Latest Updates
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="?modal=join" scroll={false} className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-wider hover:text-navy dark:hover:text-white transition-colors duration-300">
              View All Events <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((ev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <SpotlightCard className="group bg-white dark:bg-navy-light p-8 border border-gray-100 dark:border-navy-light hover:border-gold/30 dark:hover:border-gold/30 transition-all duration-300 flex flex-col h-full">
                
                <div className="flex items-center gap-3 text-gold font-bold font-body text-sm uppercase tracking-widest mb-6">
                  <Calendar size={16} />
                  <span>{ev.date}</span>
                </div>
                
                <h3 className="font-display text-xl font-bold text-navy dark:text-white uppercase mb-4 group-hover:text-gold transition-colors duration-300">
                  {ev.title}
                </h3>
                
                <p className="text-navy/70 dark:text-cream/80 font-body mb-8 flex-1 transition-colors duration-300">
                  {ev.desc}
                </p>

                <div className="text-gold font-bold uppercase tracking-widest text-xs group-hover:text-navy dark:group-hover:text-white transition-colors duration-300 inline-flex items-center gap-2">
                  RSVP <ArrowRight size={14} />
                </div>
                
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
