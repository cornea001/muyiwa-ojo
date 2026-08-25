'use client'

import { motion } from 'framer-motion'
import { Landmark, UsersRound, MessageSquareShare, Flag } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function CommunityInvolvement() {
  const t = useTranslations('About')
  const tComm = useTranslations('Community')

  const items = [
    { title: t('inv1_title'), desc: t('inv1_desc'), icon: Landmark },
    { title: t('inv2_title'), desc: t('inv2_desc'), icon: UsersRound },
    { title: t('inv3_title'), desc: t('inv3_desc'), icon: MessageSquareShare },
    { title: t('inv4_title'), desc: t('inv4_desc'), icon: Flag },
  ]

  return (
    <section id="involvement" className="py-24 bg-navy relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-gold font-body font-bold text-sm tracking-[0.2em] uppercase mb-4"
          >
            {tComm('eyebrow')}
          </motion.span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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
