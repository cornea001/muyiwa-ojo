'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Users, FileCheck, MapPin, Target } from 'lucide-react'
import { Link } from '@/i18n/routing'
import MagneticButton from './MagneticButton'

export default function StatsBar() {
  const t = useTranslations('StatsBar')
  
  const stats = [
    { val: t('stat1_val'), desc: t('stat1_desc'), icon: Users },
    { val: t('stat2_val'), desc: t('stat2_desc'), icon: MapPin },
    { val: t('stat3_val'), desc: t('stat3_desc'), icon: FileCheck },
    { val: t('stat4_val'), desc: t('stat4_desc'), icon: Target },
  ]

  return (
    <div className="bg-navy relative overflow-hidden border border-navy/10 dark:border-white/10 mt-12">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="relative z-10 px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.val}
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
                <div className="font-display font-bold text-2xl md:text-4xl lg:text-5xl text-white leading-tight mb-3 group-hover:scale-105 transition-transform duration-300">
                  {stat.val}
                </div>
                <div className="text-white/70 font-body text-xs md:text-sm font-semibold tracking-wider uppercase leading-snug">
                  {stat.desc}
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="flex justify-center border-t border-white/10 pt-12">
          <MagneticButton>
            <Link
              href="/#priorities"
              className="bg-gold text-navy px-8 py-4 font-display font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300"
            >
              {t('cta')}
            </Link>
          </MagneticButton>
        </div>
      </div>
    </div>
  )
}

