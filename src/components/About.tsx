'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('About');
  return (
    <section id="about" className="py-28 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Image/Portrait side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 lg:order-1"
        >
          {/* Decorative offset frame */}
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/20 " />
          <div className="absolute -top-8 -left-8 w-20 h-20 bg-gold/10 " />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-forest/10 " />

          <div className="relative bg-navy  aspect-square  overflow-hidden">
            {/* Real photo */}
            <Image
              src="/portrait.avif"
              alt="Muyiwa Ojo — Candidate for Ward 22"
              fill
              className="object-cover object-top"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
            {/* Bottom name badge */}
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4">
              <div className="text-white font-display font-bold text-xl leading-tight">Muyiwa Ojo</div>
              <div className="text-gold text-xs font-medium mt-0.5">Candidate for Ward 22</div>
              <div className="text-white/40 text-[10px] mt-0.5">Riverside South–Findlay Creek</div>
            </div>
            {/* Bottom accent strip */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-5 -right-2 bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-800 p-4 min-w-[160px] transition-colors duration-300">
            <div className=" flex text-navy/50 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-1 items-center justify-center">Campaign Slogan</div>
            <div className="flex text-navy dark:text-gray-100 font-display font-bold text-md leading-snug items-center justify-center transition-colors duration-300">
              "Listen First"
            </div>
          </div>
        </motion.div>

        {/* Content side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="order-1 lg:order-2"
        >
          <div className="text-gold text-xs font-bold tracking-widest uppercase mb-3">{t('eyebrow')}</div>
          <h2 className="font-display font-bold text-4xl xl:text-5xl text-navy dark:text-white leading-tight mb-6 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: t('title_home') }} />

          <div className="space-y-4 text-gray dark:text-gray-300 text-[15px] leading-relaxed mb-8 transition-colors duration-300">
           <p>{t('p1')}</p>
           <p>{t('p2')}</p>
           <p>{t('p3')}</p>
           <p>{t('p4')}</p>
           <p>{t('p5')}</p>
           <p>{t('p6')}</p>
           <p>{t('p7')}</p>
          </div>

          {/* Blockquote */}
          <div className="relative pl-6 border-l-2 border-gold mb-10">
            <Quote size={24} className="text-gold/30 mb-2" />
            <p className="font-display text-xl text-navy dark:text-white italic font-bold leading-snug mb-3 transition-colors duration-300">
              {t('quote_home')}
            </p>
            <div className="text-sm text-gray dark:text-gray-400">{t('quote_home_author')}</div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: '🏘️', label: t('trait1') },
              { icon: '👂', label: t('trait2') },
              { icon: '✅', label: t('trait3') },
              { icon: '📅', label: t('trait4') },
            ].map((trait) => (
              <div key={trait.label} className="flex items-center gap-3 bg-cream dark:bg-gray-900 p-3 transition-colors duration-300">
                <span className="text-lg">{trait.icon}</span>
                <span className="text-navy dark:text-gray-100 text-sm font-semibold transition-colors duration-300">{trait.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
