'use client'
import { motion } from 'framer-motion'
import { Home, Truck, Bus, Shield, MessageCircle, Trees, ArrowRight } from 'lucide-react'
import SpotlightCard from '@/components/SpotlightCard'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
export default function Priorities() {
  const t = useTranslations('Priorities')

  const priorities = [
    {
      num: '01',
      icon: Home,
      title: t('p1_title'),
      desc: t('p1_desc'),
    },
    {
      num: '02',
      icon: Truck,
      title: t('p2_title'),
      desc: t('p2_desc'),
    },
    {
      num: '03',
      icon: Bus,
      title: t('p3_title'),
      desc: t('p3_desc'),
    },
    {
      num: '04',
      icon: Trees,
      title: t('p4_title'),
      desc: t('p4_desc'),
    },
    {
      num: '05',
      icon: Shield,
      title: t('p5_title'),
      desc: t('p5_desc'),
    },
    {
      num: '06',
      icon: MessageCircle,
      title: t('p6_title'),
      desc: t('p6_desc'),
    },
  ]

  return (
  <section id="priorities" className="py-24 bg-cream dark:bg-gray-900 transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-6">
  {/* Top Split Section */}
  <div className="flex flex-col lg:flex-row gap-12 lg:items-center mb-20">
    <div className="lg:w-1/2 flex flex-col gap-6">
      <div>
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block text-gold font-body font-bold text-sm tracking-[0.2em] uppercase mb-4"
        >
          {t('eyebrow')}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-display font-bold text-navy dark:text-white leading-tight uppercase transition-colors duration-300"
        >
          {t('title_top')} <br/>
          <span className="text-gold">{t('title_bottom')}</span>
        </motion.h2>
      </div>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-navy/70 dark:text-gray-300 text-lg font-body leading-relaxed border-l-4 border-gold pl-6 transition-colors duration-300"
      >
        {t('desc')}
      </motion.p>
    </div>

    <motion.div 
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="lg:w-1/2 relative aspect-[16/9] lg:aspect-[4/3] group overflow-hidden"
    >
      <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
      <img 
        src="/priorities-hero.avif" 
        alt="Community Priorities" 
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
      />
    </motion.div>
  </div>
 {/* Priorities Grid */}
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
 {priorities.map((p, i) => {
 const Icon = p.icon
 return (
 <motion.div
 key={p.num}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.1, duration: 0.5 }}
 className="h-full"
 >
 <SpotlightCard className="group bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 hover:border-gold/30 dark:hover:border-gold/30 transition-all duration-300 relative h-full ">
 <div className="flex justify-between items-start mb-6">
 <div className="w-16 h-16 bg-cream dark:bg-gray-900 rounded-full flex items-center justify-center text-navy dark:text-gray-100 group-hover:bg-gold dark:group-hover:bg-gold group-hover:text-white transition-colors duration-300">
 <Icon size={28} />
 </div>
 <span className="font-display text-4xl font-bold text-gray-100 dark:text-gray-700 group-hover:text-gold/20 dark:group-hover:text-gold/20 transition-colors duration-300">
 {p.num}
 </span>
 </div>
 
 <h3 className="font-display text-2xl font-bold text-navy dark:text-white uppercase mb-4 group-hover:text-gold dark:group-hover:text-gold transition-colors duration-300">
 {p.title}
 </h3>
 <p className="text-navy/70 dark:text-gray-300 font-body transition-colors duration-300">
 {p.desc}
 </p>
 </SpotlightCard>
 </motion.div>
 )
 })}
 </div>
 
 {/* Section Footer */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-center"
 >
 <p className="text-navy dark:text-gray-100 font-body text-lg font-medium transition-colors duration-300">
 {t('footer')}<Link href="/#involved" className="text-gold font-bold hover:underline">{t('footer_link')}</Link>
 </p>
 </motion.div>
 </div>
 </section>
 )
}