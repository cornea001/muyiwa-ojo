'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MessageSquare, Home, Bus, Trash2, Trees, Shield, ChevronRight, Target } from 'lucide-react'

const topics = [
  { icon: Home,         label: 'Affordable Housing',    color: 'bg-gold/10 text-gold border-gold/20' },
  { icon: Bus,          label: 'Transit & Roads',        color: 'bg-forest/10 text-forest border-forest/20' },
  { icon: Trash2,       label: 'City Services',          color: 'bg-navy/10 text-navy border-navy/20' },
  { icon: Trees,        label: 'Parks & Green Spaces',   color: 'bg-forest/10 text-forest border-forest/20' },
  { icon: Shield,       label: 'Safer Neighbourhoods',   color: 'bg-gold/10 text-gold border-gold/20' },
  { icon: MessageSquare,label: 'Community Voice',        color: 'bg-navy/10 text-navy border-navy/20' },
]

export default function SurveyQR() {
  return (
    <section id="survey" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-hero-pattern opacity-[0.025]" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-forest/5  blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gold/5  blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-forest/8 border border-forest/20  px-4 py-1.5 mb-4">
            <MessageSquare size={13} className="text-forest" />
            <span className="text-forest text-xs font-bold tracking-widest uppercase">Your Voice Matters</span>
          </div>
          <h2 className="font-display font-bold text-4xl xl:text-5xl text-navy mb-4">
            Help Shape Ward 22's Future.
          </h2>
          <p className="text-gray text-lg max-w-xl mx-auto leading-relaxed">
            Scan the code below and let us know which issues matter most to you.
            Your answers directly inform our priorities.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-br from-navy to-navy-light  overflow-hidden "
        >
          <div className="grid lg:grid-cols-2">

            {/* Left — QR + scan instruction */}
            <div className="relative flex flex-col items-center justify-center p-12 border-b lg:border-b-0 lg:border-r border-white/8">
              {/* Glow behind QR */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 bg-forest/20  blur-3xl" />
              </div>

              {/* Scan label */}
              <div className="relative z-10 text-center mb-8">
                <div className="text-gold text-xs font-bold tracking-widest uppercase mb-1">Step 1</div>
                <div className="text-white font-display font-bold text-2xl">Scan the Code</div>
                <div className="text-white/45 text-sm mt-1">Takes less than 2 minutes</div>
              </div>

              {/* QR code card */}
              <div className="relative z-10 bg-white  p-5 ">
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold -sm" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold -sm" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold -sm" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold -sm" />

                <Image
                  src="/qrcode.avif"
                  alt="Scan to share your Ward 22 priorities"
                  width={220}
                  height={220}
                  className=""
                />
              </div>

              {/* Or tap link */}
              <div className="relative z-10 mt-7 text-center">
                <div className="text-white/30 text-xs mb-2">or tap to open on your phone</div>
                <a
                  href= "https://docs.google.com/forms/d/e/1FAIpQLScpDrTrhRPM48Py8apKxpVjW30eGILfltzy1mWS6Zc92JzZVA/viewform" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:text-gold-light transition-colors group"
                >
                  Open the Survey
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right — what you'll be asked */}
            <div className="p-12 flex flex-col justify-center">
              <div className="text-gold text-xs font-bold tracking-widest uppercase mb-2">Step 2</div>
              <h3 className="font-display font-bold text-white text-2xl mb-2 leading-snug">
                Tell Us What Matters Most.
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Rate the issues that affect your everyday life in Ward 22.
                Every response is read and shapes our platform.
              </p>

              {/* Topic chips */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {topics.map((t, i) => {
                  const Icon = t.icon
                  return (
                    <motion.div
                      key={t.label}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                      className="flex items-center gap-2.5 bg-white/6 border border-white/10  px-3.5 py-2.5"
                    >
                      <Icon size={15} className="text-gold flex-shrink-0" />
                      <span className="text-white/80 text-xs font-medium leading-tight">{t.label}</span>
                    </motion.div>
                  )
                })}
              </div>

              {/* Trust note */}
              <div className="flex items-start gap-3 bg-white/4 border border-white/8  p-4">
                <div className="w-7 h-7  bg-forest/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">🔒</span>
                </div>
                <div>
                  <div className="text-white/70 text-xs font-semibold mb-0.5">Anonymous & secure</div>
                  <div className="text-white/35 text-xs leading-relaxed">
                     Your feedback is used solely to understand Ward 22 priorities.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="border-t border-white/8 px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gold  flex items-center justify-center font-display font-bold text-navy text-[10px]">MO</div>
              <span className="text-white/40 text-xs">Muyiwa Ojo · Ward 22 Community Survey</span>
            </div>
            <div className="text-white/25 text-xs">Results reviewed personally by the candidate</div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
