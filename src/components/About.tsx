'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
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
          <div className="absolute -bottom-5 -right-2 bg-white border border-slate-100   p-4 min-w-[160px]">
            <div className=" flex text-navy/50 text-[10px] font-bold uppercase tracking-wider mb-1 items-center justify-center">Campaign Slogan</div>
            <div className="flex text-navy font-display font-bold text-md leading-snug items-center justify-center">
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
          <div className="text-gold text-xs font-bold tracking-widest uppercase mb-3">About the Candidate</div>
          <h2 className="font-display font-bold text-4xl xl:text-5xl text-navy leading-tight mb-6">
            A Practical Voice<br />for Ward 22.
          </h2>

          <div className="space-y-4 text-gray text-[15px] leading-relaxed mb-8">
           <p>
                I was born and raised in Nigeria, where I developed a deep appreciation for community, hard work, and the belief that where you come from does not determine where you can go.
              </p>
              <p>
                In 2019, my family and I moved to Canada, settling first in the Greater Toronto Area. Two years later, my wife was presented with a career opportunity in Ottawa. As we explored the city and considered where we wanted to raise our children and build our future, the answer became clear: Ward 22.
              </p>
              <p>
                We chose this community deliberately — not by default.
              </p>
              <p>
                Professionally, I work in finance and hold an Executive MBA from the Ivey Business School. My career has taught me how to analyze complex problems, plan for the long term, and make responsible decisions that stand up to scrutiny.
              </p>
              <p>
                But more than any credential, I am a husband, a father, and a neighbour. Our children are growing up here. Our friendships are here. Our future is here.
              </p>
              <p>
                Like so many families, we came to Canada to build a life filled with opportunity, purpose, and possibility. We found those opportunities here, and in Ward 22, we found something even more important — a place to call home.
              </p>
            <p>
              Ward 22 is where we live, work, and raise our families. It deserves a councillor who treats it like home — because it is.
            </p>
          </div>

          {/* Blockquote */}
          <div className="relative pl-6 border-l-2 border-gold mb-10">
            <Quote size={24} className="text-gold/30 mb-2" />
            <p className="font-display text-xl text-navy italic font-bold leading-snug mb-3">
              "Steady attention, honest listening, and follow-through on the things that actually matter."
            </p>
            <div className="text-sm text-gray">— Muyiwa Ojo, Candidate for Ward 22</div>
          </div>

          {/* Key traits */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: '🏘️', label: 'Community-focused' },
              { icon: '👂', label: 'Honest listener' },
              { icon: '✅', label: 'Practical results' },
              { icon: '📅', label: 'Year-round presence' },
            ].map((trait) => (
              <div key={trait.label} className="flex items-center gap-3 bg-cream  p-3">
                <span className="text-lg">{trait.icon}</span>
                <span className="text-navy text-sm font-semibold">{trait.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
