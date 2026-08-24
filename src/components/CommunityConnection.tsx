'use client'

import { motion } from 'framer-motion'
import { Map, Landmark, Flag, ClipboardList, UsersRound, MessageSquareShare } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function CommunityConnection() {
  const t = useTranslations('CommunityConnection')

  const items = [
    { title: t('t1'), desc: t('d1'), icon: Map },
    { title: t('t2'), desc: t('d2'), icon: Landmark },
    { title: t('t3'), desc: t('d3'), icon: Flag },
    { title: t('t4'), desc: t('d4'), icon: ClipboardList },
    { title: t('t5'), desc: t('d5'), icon: UsersRound },
    { title: t('t6'), desc: t('d6'), icon: MessageSquareShare },
  ]

  return (
    <section id="community" className="py-24 bg-navy relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-gold/30 backdrop-blur-sm transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-colors duration-300 mb-6">
                  <Icon size={24} />
                </div>
                
                <h3 className="font-display text-xl font-bold text-white uppercase mb-4 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-white/70 font-body leading-relaxed flex-1 transition-colors duration-300">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
