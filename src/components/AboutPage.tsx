

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Quote } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* PERSONAL STORY */}
      <section className="py-16 sm:py-24 bg-white">
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
                  src="/portrait.JPG"
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
              About
            </div>

            <h2 className="font-bold text-3xl sm:text-4xl text-navy mb-8">
              About Me.
            </h2>

            <div className="space-y-5 text-sm sm:text-[15px] text-gray-700 leading-relaxed mb-10">
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
            </div>

            {/* QUOTE */}
            <div className="bg-navy  p-6 sm:p-8 mb-10">
              <Quote size={26} className="text-gold/40 mb-3" />
              <p className="text-white italic font-bold text-lg sm:text-xl">
                "Canada gave our family an opportunity. Ward 22 gave us home."
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
              className="bg-gold text-navy px-8 py-4 font-bold text-sm text-center w-full sm:w-auto"
            >
              Join Campaign
            </Link>

            <Link
              href="/#contact"
              className="border border-navy/20 text-navy px-8 py-4 text-sm text-center w-full sm:w-auto hover:bg-navy hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
      </section>

      {/* WHY I'M RUNNING */}
      

          {/* CTA */}
         

      
    
    </>
  )
}