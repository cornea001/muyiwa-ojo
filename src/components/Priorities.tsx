'use client'
import { motion } from 'framer-motion'
import { Home, Truck, Bus, Shield, MessageCircle, Trees, ArrowRight } from 'lucide-react'
import SpotlightCard from '@/components/SpotlightCard'
const priorities = [
 {
 num: '01',
 icon: Home,
 title: 'Affordable Housing',
 desc: 'Push for housing options residents can actually afford — from purpose-built rentals to support for first-time buyers.',
 },
 {
 num: '02',
 icon: Truck,
 title: 'Reliable City Services',
 desc: 'Snow clearing, garbage collection, road repairs — the basics done well and done on time, every single time.',
 },
 {
 num: '03',
 icon: Bus,
 title: 'Better Transit & Roads',
 desc: 'Practical investments in transit reliability, traffic calming, and safer streets for pedestrians and cyclists alike.',
 },
 {
 num: '04',
 icon: Trees,
 title: 'Parks & Green Spaces',
desc: 'Maintain and grow the parks, trails, and green spaces that make neighbourhoods worth living in.',
 },
 {
 num: '05',
 icon: Shield,
 title: 'Safer Neighbourhoods',
 desc: 'Community-led safety, better lighting, and responsive partnerships with local police and emergency services.',
 },
 {
 num: '06',
 icon: MessageCircle,
 title: 'Listening to Residents',
 desc: 'Regular ward meetings, open office hours, and a council voice that actually shows up and follows through.',
 },
]
export default function Priorities() {
 return (
 <section id="priorities" className="py-24 bg-cream">
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
          The Campaign
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-display font-bold text-navy leading-tight uppercase"
        >
          Priorities for a <br/>
          <span className="text-gold">Better Ward 22</span>
        </motion.h2>
      </div>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-navy/70 text-lg font-body leading-relaxed border-l-4 border-gold pl-6"
      >
        Concrete, achievable goals that will make a real difference in daily life across the community. From housing to transit, we are focused on the basics.
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
 <SpotlightCard className="group bg-white p-8 border border-gray-100 hover: hover:border-gold/30 transition-all duration-300 relative h-full ">
 <div className="flex justify-between items-start mb-6">
 <div className="w-16 h-16 bg-cream -full flex items-center justify-center text-navy group-hover:bg-gold group-hover:text-white transition-colors duration-300">
 <Icon size={28} />
 </div>
 <span className="font-display text-4xl font-bold text-gray-100 group-hover:text-gold/20 transition-colors duration-300">
 {p.num}
 </span>
 </div>
 
 <h3 className="font-display text-2xl font-bold text-navy uppercase mb-4 group-hover:text-gold transition-colors duration-300">
 {p.title}
 </h3>
 <p className="text-navy/70 font-body">
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
 <p className="text-navy font-body text-lg font-medium">
 Be the change your community needs - <a href="#involved" className="text-gold font-bold hover:underline">get involved with us today!</a>
 </p>
 </motion.div>
 </div>
 </section>
 )
}