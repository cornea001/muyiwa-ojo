"use client";
import { motion } from "framer-motion";
import { Home, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Community() {
  const t = useTranslations('Community')

  const impacts = [
    {
      icon: <Home size={28} />,
      label: t('c1_label'),
      desc: t('c1_desc'),
    },
    {
      icon: <Users size={28} />,
      label: t('c2_label'),
      desc: t('c2_desc'),
    },
  ];

  return (
    <section id="community" className="py-28 bg-navy dark:bg-gray-950 relative overflow-hidden group transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-navy/80 mix-blend-multiply z-0" />
      <div className="absolute inset-0 z-0">
        <img 
          src="/community-bg.avif" 
          alt="Ward 22 Community" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s] opacity-40"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-gold text-xs font-bold tracking-widest uppercase mb-3">
            {t('eyebrow')}
          </div>
          <h2 className="font-display font-bold text-4xl xl:text-5xl text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed">
            {t('desc')}
          </p>
        </motion.div>
        {/* Impact cards */}
        <div className="flex justify-center gap-5 mb-16">
          {impacts.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-6 hover:bg-white/8 hover:border-gold/25 transition-all duration-300"
            >
              <div className="text-3xl mb-4 text-white dark:text-gray-100">{item.icon}</div>
              <h3 className="text-white font-display font-bold text-lg mb-2">
                {item.label}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
        {/* Large CTA banner */}
        {/* <motion.div
 initial={{ opacity: 0, scale: 0.97 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.7 }}
 className="relative bg-gradient-to-r from-gold to-gold-light p-10 overflow-hidden"
 >
 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -full blur-3xl -translate-y-1/2 translate-x-1/2" />
 <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
 <div>
 <div className="text-navy/60 text-xs font-bold tracking-widest uppercase mb-2">Ready to Make a Difference?</div>
 <h3 className="font-display font-bold text-3xl text-navy leading-tight">
 Help Bring Practical Change<br />to Ward 22.
 </h3>
 </div>
 <div className="flex gap-3 flex-shrink-0">
 <a href="#involved" className="bg-navy text-white font-bold px-6 py-3 text-sm hover:bg-navy-light transition-colors">
 Get Involved
 </a>
 <a href="#contact" className="bg-white/30 text-navy font-bold px-6 py-3 text-sm hover:bg-white/50 transition-colors">
 Contact Us
 </a>
 </div>
 </div>
 </motion.div> */}
      </div>
    </section>
  );
}
