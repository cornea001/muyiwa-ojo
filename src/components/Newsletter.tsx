'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import MagneticButton from '@/components/MagneticButton'

export default function Newsletter() {
  const t = useTranslations('Newsletter')

  return (
    <section className="py-24 bg-cream dark:bg-navy-dark transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <div className="w-16 h-16 bg-gold/10 text-gold flex items-center justify-center mx-auto mb-8">
          <Mail size={32} />
        </div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-navy dark:text-white uppercase mb-6"
        >
          {t('cta')}
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-12 text-left bg-white dark:bg-navy-light p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-none border border-gray-100 dark:border-navy-light"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-navy/50 dark:text-cream/50 uppercase tracking-widest mb-2">
                {t('fname')}
              </label>
              <input type="text" className="w-full bg-cream dark:bg-navy border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors duration-300" />
            </div>
            <div>
              <label className="block text-xs font-bold text-navy/50 dark:text-cream/50 uppercase tracking-widest mb-2">
                {t('lname')}
              </label>
              <input type="text" className="w-full bg-cream dark:bg-navy border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors duration-300" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-navy/50 dark:text-cream/50 uppercase tracking-widest mb-2">
                {t('email')} *
              </label>
              <input type="email" required className="w-full bg-cream dark:bg-navy border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors duration-300" />
            </div>
            <div>
              <label className="block text-xs font-bold text-navy/50 dark:text-cream/50 uppercase tracking-widest mb-2">
                {t('postal')}
              </label>
              <input type="text" className="w-full bg-cream dark:bg-navy border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors duration-300" />
            </div>
          </div>

          <MagneticButton>
            <button type="submit" className="w-full bg-navy dark:bg-white text-white dark:text-navy px-8 py-4 font-display font-bold uppercase tracking-widest hover:bg-gold dark:hover:bg-gold hover:text-white dark:hover:text-white transition-colors duration-300 flex items-center justify-center gap-3">
              {t('cta')} <ArrowRight size={18} />
            </button>
          </MagneticButton>
        </motion.form>

      </div>
    </section>
  )
}
