"use client";
import { motion } from "framer-motion";
import { Heart, Handshake, ArrowRight } from 'lucide-react'
import { useRouter } from "next/navigation";
import SpotlightCard from "@/components/SpotlightCard";
export default function GetInvolved() {
  const router = useRouter();
  const handleClick = (type: "donate" | "volunteer") => {
    if (type === "donate") {
      router.push("/donate");
    } else {
      router.push("?modal=join", { scroll: false });
    }
  };

  return (
    <section id="involved" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-gold font-body font-bold text-sm tracking-[0.2em] uppercase mb-4"
          >
            Take Action
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-navy leading-tight uppercase"
          >
            Together, we turn aspirations <br />
            <span className="text-gold">into reality.</span>
          </motion.h2>
        </div>
        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Donate Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            onClick={() => handleClick("donate")}
            className="cursor-pointer overflow-hidden relative border border-gray-100 group"
          >
            <div className="absolute inset-0 z-0">
              <img src="/donate-hero.avif" alt="Donate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-navy/85 group-hover:bg-navy/75 transition-colors duration-500" />
            </div>
            <SpotlightCard className="p-10 flex flex-col items-center text-center h-full relative z-10 text-white bg-transparent">
              <div className="w-20 h-20 flex items-center justify-center mb-6 bg-white/10 backdrop-blur-sm border border-white/20 text-gold">
                <Heart size={32} />
              </div>
              <h3 className="font-display font-bold text-3xl uppercase mb-4 text-white">
                Make a Donation
              </h3>
              <p className="font-body mb-8 text-white/80">
                Every contribution funds outreach and community engagement
                across Ward 22.
              </p>
              <span className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-widest text-sm mt-auto text-gold group-hover:text-white transition-colors duration-300">
                Donate Now <ArrowRight size={16} />
              </span>
            </SpotlightCard>
          </motion.div>
          {/* Volunteer Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            onClick={() => handleClick("volunteer")}
            className="cursor-pointer overflow-hidden relative border border-gray-100 group"
          >
            <div className="absolute inset-0 z-0">
              <img src="/volunteer-hero.avif" alt="Volunteer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-navy/85 group-hover:bg-navy/75 transition-colors duration-500" />
            </div>
            <SpotlightCard className="p-10 flex flex-col items-center text-center h-full relative z-10 text-white bg-transparent">
              <div className="w-20 h-20 flex items-center justify-center mb-6 bg-white/10 backdrop-blur-sm border border-white/20 text-gold">
                <Handshake size={32} />
              </div>
              <h3 className="font-display font-bold text-3xl uppercase mb-4 text-white">
                Get Involved
              </h3>
              <p className="font-body mb-8 text-white/80">
                Show your support, request a lawn sign, or volunteer to join the
                movement.
              </p>
              <span className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-widest text-sm mt-auto text-gold group-hover:text-white transition-colors duration-300">
                Join Us <ArrowRight size={16} />
              </span>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
