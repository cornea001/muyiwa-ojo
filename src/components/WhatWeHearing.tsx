'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Bus, Shield, Users, ArrowRight, Heart } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function WhatWeHearing() {
  const t = useTranslations('WhatWeHearing')

  const items = [
    { icon: <MessageCircle size={24} />, title: t('traffic_title'), desc: t('traffic_desc') },
    { icon: <Bus size={24} />, title: t('transit_title'), desc: t('transit_desc') },
    { icon: <ArrowRight size={24} />, title: t('growth_title'), desc: t('growth_desc') },
    { icon: <Users size={24} />, title: t('youth_title'), desc: t('youth_desc') },
    { icon: <Shield size={24} />, title: t('safety_title'), desc: t('safety_desc') },
  ]

  return (
    <section className="py-24 bg-white dark:bg-navy-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl text-navy dark:text-white mb-4">
            {t('title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-navy/5 dark:bg-white/5 p-8 border border-navy/10 dark:border-white/10 hover:-translate-y-1 transition-transform"
            >
              <div className="text-gold mb-6">{item.icon}</div>
              <h3 className="font-display font-bold text-navy dark:text-white text-xl mb-3">
                {item.title}
              </h3>
              <p className="text-navy/70 dark:text-white/70 font-body">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
