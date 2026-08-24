'use client'

import { motion } from 'framer-motion'
import { Quote, Briefcase, GraduationCap, CheckCircle, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('About');
  return (
    <section id="about" className="py-28 bg-white dark:bg-navy-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Two-column row */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">

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

            <div className="space-y-4 text-navy/70 dark:text-cream/80 text-[15px] leading-relaxed mb-8 transition-colors duration-300">
             <p>{t('p1')}</p>
             <p>{t('p2')}</p>
             <p>{t('p3')}</p>
             <p>{t('p4')}</p>
             {t('p5') && <p>{t('p5')}</p>}
             {t('p6') && <p>{t('p6')}</p>}
             {t('p7') && <p>{t('p7')}</p>}
            </div>

            {/* Blockquote */}
            <div className="relative pl-6 border-l-2 border-gold">
              <Quote size={24} className="text-gold/30 mb-2" />
              <p className="font-display text-xl text-navy dark:text-white italic font-bold leading-snug mb-3 transition-colors duration-300">
                {t('quote_home')}
              </p>
              <div className="text-sm text-navy/70 dark:text-cream/60">{t('quote_home_author')}</div>
            </div>
          </motion.div>
        </div>

        {/* Traits — full width below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {[
            { icon: <Briefcase size={20} />, label: t('trait1') },
            { icon: <GraduationCap size={20} />, label: t('trait2') },
            { icon: <CheckCircle size={20} />, label: t('trait3') },
            { icon: <MapPin size={20} />, label: t('trait4') },
          ].map((trait) => (
            <div 
              key={trait.label} 
              className="group flex flex-col justify-center gap-4 bg-navy/5 dark:bg-white/5 backdrop-blur-lg border border-navy/10 dark:border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-navy/10 dark:hover:bg-white/10 cursor-default"
            >
              <div className="text-gold flex-shrink-0 transition-transform duration-300 group-hover:scale-110">{trait.icon}</div>
              <span className="text-navy dark:text-cream text-sm font-semibold transition-colors duration-300 leading-snug">{trait.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
