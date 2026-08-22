'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Globe, Instagram, Facebook } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-4xl xl:text-5xl text-navy">
            CONTACT
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy rounded-2xl p-8 text-white flex flex-col items-center text-center space-y-5"
          >
            <div className="font-display font-bold text-xl">
              Muyiwa Ojo
            </div>

            <div className="text-gold text-sm">
              Candidate for Ward 22 · Riverside South–Findlay Creek
            </div>
            
            <a href="https://www.muyiwaojo.ca" target="_blank" className="flex items-center gap-3 group">
              <Globe size={18} className="text-gold" />
              <span className="group-hover:text-gold transition">
                www.muyiwaojo.ca
              </span>
            </a>

            {/* PHONE */}
            <a href="tel:3435760956" className="flex items-center gap-3 group">
              <Phone size={18} className="text-gold" />
              <span className="group-hover:text-gold transition">
                343-576-0956
              </span>
            </a>

            {/* EMAIL */}
            <a href="mailto:muyiwaojo@ward22.ca" className="flex items-center gap-3 group">
              <Mail size={18} className="text-gold" />
              <span className="group-hover:text-gold transition">
                muyiwa@muyiwaojo.ca
              </span>
            </a>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy rounded-2xl p-8 text-white flex flex-col items-center text-center space-y-5"
          >
            <div className="font-display font-bold text-xl">
              Follow & Connect
            </div>

            <div className="text-gold text-sm">
              Stay updated on campaigns & community work
            </div>

            {/* WEBSITE */}
            

            {/* INSTAGRAM */}
            <a href="https://www.instagram.com/iam_ojo" 
                  target="_blank"
                  rel="noopener noreferrer"className="flex items-center gap-3 group">
              <Instagram size={18} className="text-gold" />
              <span className="group-hover:text-gold transition">
                @iam_ojo
              </span>
            </a>

            {/* FACEBOOK */}
            <a href="https://www.facebook.com/muyiwaojoward22"
                target="_blank"
                  rel="noopener noreferrer" className="flex items-center gap-3 group">
              <Facebook size={18} className="text-gold" />
              <span className="group-hover:text-gold transition">
                Muyiwaojoward22
              </span>
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  )
}