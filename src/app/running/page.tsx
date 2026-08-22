'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function RunningPage() {
  return (
    <section  className="py-16 sm:py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
            Why I'm Running
          </h2>

          <p className="text-gray-600">
            This wasn't a decision made at a desk. It came from living here.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-navy/10 overflow-hidden">
          {/* Header */}
          <div className="bg-navy px-6 sm:px-10 py-6 flex items-center gap-4">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden border border-gold/40 flex-shrink-0">
              <Image
                src="/portrait.JPG"
                alt="Muyiwa Ojo"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>

            <div>
              <div className="text-white font-bold">
                Muyiwa Ojo
              </div>

              <div className="text-gold text-xs">
                Candidate — Ward 22
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 sm:px-10 py-10 space-y-5 text-[15px] text-gray-700 leading-relaxed">
            <p>
              I am Muyiwa Ojo — a husband, father of two, and proud Ward 22
              resident who calls this community home with my wife and our two
              children.
            </p>

            <p>
              Like many of you, we chose Ward 22 because of what it promised:
              safe streets, strong schools, and a place where families could put
              down roots and thrive. In many ways, it has delivered on that
              promise.
            </p>

            <p>
              Over the years, I have also seen where we can do better.
            </p>

            <p>
              As our community grows, young families need more parks, programs,
              and spaces where children can learn, play, and thrive. Residents
              spend too much time commuting when better transit connections
              could make the journey shorter and less stressful. And our ward is
              expanding faster than some of the infrastructure and services
              needed to support it.
            </p>

            <p>
              My professional background has given me the tools to analyse
              problems, plan for the long term, and make decisions that stand up
              to scrutiny. But my decision to run wasn't made at a desk. It came
              from living here.
            </p>

            <p>
              It came from conversations with neighbours. From seeing families
              navigate crowded parks and growing communities. From hearing
              residents talk about traffic, housing, local services, and the
              future they want for Ward 22.
            </p>

            <p>
              Those conversations led me to file my nomination on May 1, 2026.
            </p>

            <div className="border-l-4 border-gold pl-6 py-1 my-8">
              <p className="text-navy font-display italic font-bold text-lg sm:text-xl leading-snug">
                "I am not running because I have all the answers. I am running
                because I believe the best solutions come from the people who
                live here."
              </p>
            </div>

            <p>
              My role is to listen, bring people together, and ensure residents
              have a strong voice at City Hall.
            </p>

            <p>
              Since filing my nomination, I have spent my time where it matters
              most — at your doors, on your streets, and in your
              neighbourhoods, listening to your concerns, ideas, and aspirations
              for our community.
            </p>

            <p>
              I am not a career politician. I am a neighbour who cares deeply
              about Ward 22 and its future. Ward 22 deserves a councillor who is
              present, practical, accountable, and committed to serving every
              resident.
            </p>

            <p className="font-semibold text-navy">
              This community is our home. Together, we can build a Ward 22 that
              keeps pace with growth, protects what makes our neighbourhood
              special, and creates real opportunities for every family who calls
              it home.
            </p>
          </div>

          {/* Footer */}
          <div className="px-6 sm:px-10 py-5 border-t border-navy/10 flex flex-col sm:flex-row sm:justify-between gap-2">
            <div className="font-bold text-navy">
              — Muyiwa Ojo
            </div>

            <div className="text-gray-500 text-xs">
                2026
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 px-4">
          <Link
            href="/#involved"
            className="bg-gold text-navy px-8 py-4 font-bold text-sm text-center w-full sm:w-auto"
          >
            Join Campaign
          </Link>

          <Link
            href="/#footer"
            className="border border-navy/20 text-navy px-8 py-4 text-sm text-center w-full sm:w-auto hover:bg-navy hover:text-white transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}