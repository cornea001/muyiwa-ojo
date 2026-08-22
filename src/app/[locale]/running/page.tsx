'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function RunningPage() {
  const t = useTranslations('Running');
  return (
    <section  className="py-16 sm:py-24 bg-cream dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-white mb-3 transition-colors duration-300">
            {t('title')}
          </h2>

          <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
            {t('subtitle')}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-gray-900 border border-navy/10 dark:border-gray-800 overflow-hidden transition-colors duration-300">
          {/* Header */}
          <div className="bg-navy dark:bg-gray-800 px-6 sm:px-10 py-6 flex items-center gap-4 transition-colors duration-300">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden border border-gold/40 flex-shrink-0">
              <Image
                src="/portrait2.avif"
                alt="Muyiwa Ojo"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>

            <div>
              <div className="text-white font-bold">
                {t('name')}
              </div>

              <div className="text-gold text-xs">
                {t('role')}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 sm:px-10 py-10 space-y-5 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
            <p>{t('p4')}</p>
            <p>{t('p5')}</p>
            <p>{t('p6')}</p>
            <p>{t('p7')}</p>

            <div className="border-l-4 border-gold pl-6 py-1 my-8">
              <p className="text-navy dark:text-white font-display italic font-bold text-lg sm:text-xl leading-snug transition-colors duration-300">
                {t('quote')}
              </p>
            </div>

            <p>{t('p8')}</p>
            <p>{t('p9')}</p>
            <p>{t('p10')}</p>
            <p className="font-semibold text-navy dark:text-white transition-colors duration-300">{t('p11')}</p>
          </div>

          {/* Footer */}
          <div className="px-6 sm:px-10 py-5 border-t border-navy/10 dark:border-gray-800 flex flex-col sm:flex-row sm:justify-between gap-2 transition-colors duration-300">
            <div className="font-bold text-navy dark:text-white transition-colors duration-300">
              {t('footer_name')}
            </div>

            <div className="text-gray-500 dark:text-gray-400 text-xs transition-colors duration-300">
              {t('footer_year')}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 px-4">
          <Link
            href="/#involved"
            className="bg-gold text-navy px-8 py-4 font-bold text-sm text-center w-full sm:w-auto hover:bg-gold/90 transition-colors"
          >
            {t('join_btn')}
          </Link>

          <Link
            href="/#footer"
            className="border border-navy/20 dark:border-white/20 text-navy dark:text-white px-8 py-4 text-sm text-center w-full sm:w-auto hover:bg-navy hover:text-white dark:hover:bg-white dark:hover:text-navy transition-colors"
          >
            {t('contact_btn')}
          </Link>
        </div>
      </div>
    </section>
  )
}