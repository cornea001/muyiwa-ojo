'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'Muyiwa shows up, listens, and follows through. That\'s exactly what Ward 22 needs at the council table.',
    name: 'A. Thompson',
    role: 'Community Volunteer',
    initials: 'AT',
  },
  {
    quote: "He's focused on the practical things — the services, the streets, the everyday issues that too often get ignored.",
    name: 'S. Patel',
    role: 'Local Resident',
    initials: 'SP',
  },
  {
    quote: 'A steady, thoughtful voice. Muyiwa understands that good government is in the details.',
    name: 'J. Bélanger',
    role: 'Small Business Owner',
    initials: 'JB',
  },
]

export default function Testimonials() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-gold text-xs font-bold tracking-widest uppercase mb-3">What People Say</div>
          <h2 className="font-display font-bold text-4xl xl:text-5xl text-navy">
            Voices from Across the Ward.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="bg-cream  p-7 border border-navy/6 hover: hover: transition-shadow duration-300 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="mb-6 text-gold opacity-50">
                <Quote size={48} />
              </div>
              <p className="text-navy/75 text-[15px] leading-relaxed flex-1 mb-6">{t.quote}</p>
              <div className="flex items-center gap-3 pt-5 border-t border-navy/8">
                <div className="w-10 h-10  bg-navy flex items-center justify-center text-gold font-bold text-xs flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-navy font-semibold text-sm">{t.name}</div>
                  <div className="text-gray text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
