'use client'

import { motion } from 'framer-motion'
import { Info, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/i18n/routing'
import MagneticButton from '@/components/MagneticButton'

export default function DonationAppeal() {
  const t = useTranslations('DonationAppeal')
  const router = useRouter()

  const rebateData = [
    { amount: '$50', rebate: '$25', net: '$25', notes: t('r1_n') },
    { amount: '$100', rebate: '$50', net: '$50', notes: t('r2_n') },
    { amount: '$200', rebate: '$75 (max)', net: '$125', notes: t('r3_n') },
    { amount: '$1,200', rebate: '$75 (max)', net: '$1,125', notes: t('r4_n') },
  ]

  return (
    <section className="py-24 bg-navy-light dark:bg-navy relative border-y border-white/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-white uppercase mb-6"
            >
              {t('why_matter_title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/70 font-body text-lg leading-relaxed mb-8"
            >
              {t('why_matter_desc')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <MagneticButton>
                <button
                  onClick={() => router.push('/donate')}
                  className="bg-gold text-navy px-8 py-4 font-display font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 inline-flex items-center gap-3"
                >
                  Donate Today <ArrowRight size={18} />
                </button>
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/5 border border-white/10 p-4 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <Info size={24} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-bold text-white uppercase text-lg mb-2">
                    {t('rebate_title')}
                  </h3>
                  <p className="text-white/60 font-body text-sm leading-relaxed">
                    {t('rebate_desc')}
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <table className="w-full text-left font-body text-xs sm:text-sm min-w-[280px]">
                  <thead>
                    <tr className="border-b border-white/10 text-white/50 uppercase tracking-wider text-[10px] sm:text-xs">
                      <th className="pb-3 sm:pb-4 font-semibold">{t('col1')}</th>
                      <th className="pb-3 sm:pb-4 font-semibold">{t('col2')}</th>
                      <th className="pb-3 sm:pb-4 font-semibold">{t('col3')}</th>
                      <th className="pb-3 sm:pb-4 font-semibold hidden sm:table-cell">{t('col4')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rebateData.map((row, i) => (
                      <tr key={i} className="border-b border-white/5 last:border-0 text-white/80 hover:bg-white/5 transition-colors">
                        <td className="py-3 sm:py-4 font-bold text-white text-xs sm:text-sm">{row.amount}</td>
                        <td className="py-3 sm:py-4 text-gold text-xs sm:text-sm">{row.rebate}</td>
                        <td className="py-3 sm:py-4 font-bold text-white text-xs sm:text-sm">{row.net}</td>
                        <td className="py-3 sm:py-4 text-white/50 hidden sm:table-cell text-xs sm:text-sm">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
