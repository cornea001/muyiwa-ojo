'use client'

import { motion } from 'framer-motion'
import { Handshake, MapPin, CalendarHeart, Share2, Users, Heart, ArrowRight } from 'lucide-react'
import { useRouter } from '@/i18n/routing'
import SpotlightCard from '@/components/SpotlightCard'
import { useTranslations } from 'next-intl'

export default function GetInvolved() {
  const router = useRouter()
  const t = useTranslations('GetInvolved')

  const actions = [
    { title: t('title1'), desc: t('desc1'), icon: Handshake, type: 'volunteer' },
    { title: t('title2'), desc: t('desc2'), icon: MapPin, type: 'volunteer' },
    { title: t('title3'), desc: t('desc3'), icon: CalendarHeart, type: 'volunteer' },
    { title: t('title4'), desc: t('desc4'), icon: Share2, type: 'volunteer' },
    { title: t('title5'), desc: t('desc5'), icon: Users, type: 'volunteer' },
    { title: t('title6'), desc: t('desc6'), icon: Heart, type: 'donate' },
  ]

  const handleClick = (type: string) => {
    if (type === 'donate') {
      router.push('/donate')
    } else {
      router.push('?modal=join', { scroll: false })
    }
  }

  return (
    <section id="involved" className="py-24 bg-cream dark:bg-navy relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-navy dark:text-white leading-tight uppercase transition-colors duration-300"
          >
            Join the <span className="text-gold">Campaign</span>
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <SpotlightCard 
                  onClick={() => handleClick(item.type)}
                  className="cursor-pointer group bg-white dark:bg-navy-light p-8 border border-gray-100 dark:border-navy-light hover:border-gold/30 dark:hover:border-gold/30 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-cream dark:bg-navy flex items-center justify-center text-navy dark:text-white group-hover:bg-gold dark:group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <ArrowRight size={20} className="text-gray-300 dark:text-navy group-hover:text-gold transition-colors duration-300" />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-navy dark:text-white uppercase mb-4 group-hover:text-gold dark:group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-navy/70 dark:text-cream/80 font-body leading-relaxed flex-1 transition-colors duration-300">
                    {item.desc}
                  </p>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

