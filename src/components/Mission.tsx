"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Landmark, GraduationCap, HeartPulse, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
const textRevealVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};
export default function Mission() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const t = useTranslations('Mission');
  
  const missions = [
    {
      title: t('m1_title'),
      desc: t('m1_desc'),
      icon: <Landmark size={32} className="text-gold" />,
    },
    {
      title: t('m2_title'),
      desc: t('m2_desc'),
      icon: <GraduationCap size={32} className="text-gold" />,
    },
    {
      title: t('m3_title'),
      desc: t('m3_desc'),
      icon: <HeartPulse size={32} className="text-gold" />,
    },
  ];
  return (
    <section className="py-24 bg-white dark:bg-navy-dark relative overflow-hidden transition-colors duration-300">
      {/* Background Parallax */}
      <motion.div
        style={{ y }}
        className="absolute top-0 right-[-100px] w-96 h-96 bg-gold/5 -full blur-[100px] pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="block text-gold font-body font-bold text-sm tracking-[0.2em] uppercase mb-4"
          >
            {t('eyebrow')}
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-navy dark:text-white leading-tight uppercase overflow-hidden flex flex-wrap justify-center gap-x-2 md:gap-x-3 transition-colors duration-300">
            {[t('word1'), t('word2'), t('word3'), t('word4')].map(
              (word, i) => (
                <span key={i} className="overflow-hidden inline-block pb-2">
                  <motion.span
                    custom={i}
                    variants={textRevealVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ),
            )}
          </h2>
        </div>
        {/* Split Layout: Image & Mission Points */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch mb-20">
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full group overflow-hidden"
          >
            <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
            <img
              src="/mission-hero.avif"
              alt="Community Progress"
              className="absolute inset-0 w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>

          {/* Right Side: Mission Points */}
          <div className="flex flex-col gap-10 h-fit my-auto">
            {missions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.15,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-start gap-6 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-cream dark:bg-navy-dark flex-shrink-0 flex items-center justify-center text-navy dark:text-cream group-hover:bg-navy group-hover:text-gold dark:group-hover:bg-navy-light transition-colors duration-500 border border-gray-100 dark:border-navy/20">
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-navy dark:text-white uppercase mb-2 group-hover:text-gold dark:group-hover:text-gold transition-colors duration-500">
                    {item.title}
                  </h4>
                  <p className="text-navy/70 dark:text-cream/80 font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Joining Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-navy p-12 text-center relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(11,31,58,0.5)] transition-shadow duration-500"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay group-hover:scale-110 transition-transform duration-[20s] ease-linear"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-full ease-in-out" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase leading-tight mb-8">
              {t('banner1')}
              <br />
              <span className="text-gold">{t('banner2')}</span>
            </h3>
            <Link
              href="?modal=join"
              scroll={false}
              className="inline-flex items-center gap-2 bg-gold text-white px-8 py-4 text-sm font-bold font-display uppercase tracking-widest hover:bg-white hover:text-navy transition-colors duration-300"
            >
              {t('join_btn')} <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
