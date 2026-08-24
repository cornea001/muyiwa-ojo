'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

import { useTranslations } from 'next-intl'

export default function Testimonials() {
  const t = useTranslations('Testimonials');

  const testimonials = [
    {
      quote: t('quote1'),
      name: t('name1'),
      role: t('role1'),
      initials: t('initials1'),
    },
    {
      quote: t('quote2'),
      name: t('name2'),
      role: t('role2'),
      initials: t('initials2'),
    },
    {
      quote: t('quote3'),
      name: t('name3'),
      role: t('role3'),
      initials: t('initials3'),
    },
  ]

  return (
    <section className="py-28 bg-white dark:bg-navy-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-gold text-xs font-bold tracking-widest uppercase mb-3">{t('eyebrow')}</div>
          <h2 className="font-display font-bold text-4xl xl:text-5xl text-navy dark:text-white transition-colors duration-300">
            {t('title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="bg-cream dark:bg-navy p-7 border border-navy/6 dark:border-navy-light hover:shadow-sm transition-all duration-300 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="mb-6 text-gold opacity-50">
                <Quote size={48} />
              </div>
              <p className="text-navy/75 dark:text-cream/80 text-[15px] leading-relaxed flex-1 mb-6 transition-colors duration-300">{testimonial.quote}</p>
              <div className="flex items-center gap-3 pt-5 border-t border-navy/8 dark:border-navy-light transition-colors duration-300">
                <div className="w-10 h-10 bg-navy dark:bg-navy-light flex items-center justify-center text-gold font-bold text-xs flex-shrink-0 transition-colors duration-300">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-navy dark:text-white font-semibold text-sm transition-colors duration-300">{testimonial.name}</div>
                  <div className="text-gray dark:text-cream/60 text-xs transition-colors duration-300">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
