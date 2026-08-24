

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Quote } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function AboutPage() {
  const t = useTranslations('About');
  return (
    <>
      {/* PERSONAL STORY */}
      <section className="py-16 sm:py-24 bg-white dark:bg-navy-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-24 self-start"
          >

            {/* PORTRAIT */}
            <div className="relative w-full max-w-md mx-auto mb-10">
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-gold/20 " />

              <div className="relative  overflow-hidden  bg-navy aspect-[4/5] w-full">
                <Image
                  src="/portrait.avif"
                  alt="Muyiwa Ojo"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 py-5">
                  <div className="text-white font-bold text-lg sm:text-xl">
                    Muyiwa Ojo
                  </div>
                  <div className="text-gold text-xs">
                    Candidate · Ward 22
                  </div>
                </div>
              </div>
            </div>

            {/* VALUES */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.label} className="bg-cream  p-4 border border-navy/10">
                    <div className="w-8 h-8 bg-gold/15  flex items-center justify-center mb-3">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <div className="text-navy font-semibold text-sm mb-1">
                      {v.label}
                    </div>
                    <div className="text-gray-600 text-xs leading-relaxed">
                      {v.desc}
                    </div>
                  </div>
                )
              })}
            </div> */}
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full"
          >
            <div className="text-gold text-xs font-bold tracking-widest uppercase mb-3">
              {t('eyebrow').replace('About the Candidate', 'About')}
            </div>

            <h2 className="font-bold text-3xl sm:text-4xl text-navy dark:text-white mb-8 transition-colors duration-300">
              {t('title_page')}
            </h2>

            <div className="space-y-5 text-sm sm:text-[15px] text-gray-700 dark:text-cream/80 leading-relaxed mb-10 transition-colors duration-300">
              <p>{t('p1')}</p>
              <p>{t('p2')}</p>
              <p>{t('p3')}</p>
              <p>{t('p4')}</p>
              <p>{t('p5')}</p>
              <p>{t('p6')}</p>
            </div>

            {/* QUOTE */}
            <div className="bg-navy dark:bg-navy-light p-6 sm:p-8 mb-10 transition-colors duration-300">
              <Quote size={26} className="text-gold/40 mb-3" />
              <p className="text-white italic font-bold text-lg sm:text-xl">
                {t('quote_page')}
              </p>
            </div>

            {/* TIMELINE */}
            {/* <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-4 sm:gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gold  flex items-center justify-center text-navy text-[10px] font-bold">
                      {m.year}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-gold/20 mt-2" />
                    )}
                  </div>

                  <div className="pb-6">
                    <div className="text-navy font-semibold text-sm sm:text-base">
                      {m.label}
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {m.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </motion.div>
        </div>
         <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 px-4">
            <Link
              href="/#involved"
              className="bg-gold text-navy px-8 py-4 font-bold text-sm text-center w-full sm:w-auto hover:bg-gold/90 transition-colors"
            >
              {t('join_btn')}
            </Link>

            <Link
              href="/#contact"
              className="border border-navy/20 dark:border-white/20 text-navy dark:text-white px-8 py-4 text-sm text-center w-full sm:w-auto hover:bg-navy hover:text-white dark:hover:bg-white dark:hover:text-navy transition-colors"
            >
              {t('contact_btn')}
            </Link>
          </div>
      </section>

      {/* WHY I'M RUNNING */}
      

          {/* CTA */}
         

      
    
    </>
  )
}