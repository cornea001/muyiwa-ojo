
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Home, X, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import Stripe from '@/components/Stripe'

const cards = [
  {
    icon: Heart,
    title: 'Donate',
    desc: 'Every contribution funds outreach and community engagement across Ward 22.',
    cta: 'Make a Contribution',
    bg: 'bg-gold',
    textColor: 'text-navy',
    descColor: 'text-navy/60',
    btnClass: 'bg-navy text-white',
  },
  {
    icon: Home,
    title: 'Get Involved',
    desc: 'Show your support and join the movement.',
    cta: 'Get Involved',
    bg: 'bg-navy',
    textColor: 'text-white',
    descColor: 'text-white/60',
    btnClass: 'bg-gold text-navy',
  },
]

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function GetInvolved() {
  const [showStripe, setShowStripe] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [status, setStatus] = useState<FormStatus>('idle')

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    issues: '',
    improvements: '',
    support_level: '',
    lawn_sign: '',
    volunteer: '',
    extra: '',
  })

  const handleClick = (title: string) => {
    if (title === 'Donate') {
      setShowStripe((prev) => !prev)
      setShowForm(false)
    }
    if (title === 'Get Involved') {
      setShowForm(true)
      setShowStripe(false)
      setStatus('idle')
    }
  }

  const handleClose = () => {
    setShowForm(false)
    setStatus('idle')
    setFormData({
      name: '',
      address: '',
      contact: '',
      issues: '',
      improvements: '',
      support_level: '',
      lawn_sign: '',
      volunteer: '',
      extra: '',
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/campaign-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="involved" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl text-navy">Take Action</h2>
        </div>

        {/* CARDS */}
        <div className="flex justify-center gap-6 flex-wrap">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                className={`${card.bg} w-[320px] h-[360px] rounded-2xl p-7 flex flex-col`}
              >
                <div className="w-12 h-12 mb-5 flex items-center justify-center">
                  <Icon size={22} />
                </div>
                <h3 className={`font-bold text-xl ${card.textColor} mb-2`}>{card.title}</h3>
                <p className={`${card.descColor} text-sm flex-1`}>{card.desc}</p>
                <button
                  onClick={() => handleClick(card.title)}
                  className={`${card.btnClass} font-bold text-sm px-5 py-2.5 rounded-lg`}
                >
                  {card.cta}
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* STRIPE (INLINE) */}
        <AnimatePresence>
          {showStripe && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-12 max-w-4xl mx-auto bg-white p-6 rounded-3xl shadow-xl"
            >
              <Stripe />
            </motion.div>
          )}
        </AnimatePresence>

        {/* GET INVOLVED MODAL */}
        <AnimatePresence>
          {showForm && (
            <>
              {/* BACKDROP */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
                className="fixed inset-0 bg-black/50 z-40"
              />

              {/* MODAL */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-0 flex items-center justify-center z-50 px-4"
              >
                <div className="bg-white w-full max-w-xl rounded-2xl p-6 relative max-h-[90vh] overflow-y-auto">

                  {/* CLOSE */}
                  <button
                    onClick={handleClose}
                    aria-label="Close form"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={20} />
                  </button>

                  {/* SUCCESS STATE */}
                  {status === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center justify-center py-12 text-center gap-4"
                    >
                      <CheckCircle size={56} className="text-green-500" />
                      <h2 className="text-2xl font-bold text-navy">Thank you, {formData.name.split(' ')[0]}!</h2>
                      <p className="text-gray-500 text-sm max-w-xs">
                        Your message has been received. The Muyiwa Ojo campaign team will be in touch soon.
                      </p>
                      <button
                        onClick={handleClose}
                        className="mt-4 bg-navy text-white px-6 py-2.5 rounded-lg font-bold text-sm"
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : status === 'error' ? (
                    /* ERROR STATE */
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center justify-center py-12 text-center gap-4"
                    >
                      <AlertCircle size={56} className="text-red-500" />
                      <h2 className="text-2xl font-bold text-navy">Something went wrong</h2>
                      <p className="text-gray-500 text-sm max-w-xs">
                        We couldn&apos;t send your submission. Please try again or email us directly.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="mt-4 bg-navy text-white px-6 py-2.5 rounded-lg font-bold text-sm"
                      >
                        Try Again
                      </button>
                    </motion.div>
                  ) : (
                    /* FORM STATE */
                    <>
                      <h2 className="text-xl font-bold mb-4 text-navy">Join the Movement</h2>

                      <form onSubmit={handleSubmit} className="space-y-3">
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          aria-label="Full name"
                          required
                          className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20"
                        />
                        <input
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Address"
                          aria-label="Street address"
                          className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20"
                        />
                        <input
                          name="contact"
                          value={formData.contact}
                          onChange={handleChange}
                          placeholder="Email or Phone"
                          aria-label="Email or phone number"
                          required
                          className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20"
                        />
                        <textarea
                          name="issues"
                          value={formData.issues}
                          onChange={handleChange}
                          placeholder="Top issues in your neighbourhood"
                          aria-label="Top issues in your neighbourhood"
                          rows={3}
                          className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 resize-none"
                        />
                        <textarea
                          name="improvements"
                          value={formData.improvements}
                          onChange={handleChange}
                          placeholder="What improvements would you like to see?"
                          aria-label="Improvements you would like to see"
                          rows={3}
                          className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 resize-none"
                        />

                        <select
                          name="support_level"
                          value={formData.support_level}
                          onChange={handleChange}
                          aria-label="Support level"
                          className="w-full border border-gray-200 p-3 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-navy/20"
                        >
                          <option value="">Support Level</option>
                          <option value="Strong Supporter">Strong Supporter</option>
                          <option value="Leaning Supporter">Leaning Supporter</option>
                          <option value="Undecided">Undecided</option>
                          <option value="Just sharing concerns">Just sharing concerns</option>
                        </select>

                        <select
                          name="lawn_sign"
                          value={formData.lawn_sign}
                          onChange={handleChange}
                          aria-label="Lawn sign request"
                          className="w-full border border-gray-200 p-3 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-navy/20"
                        >
                          <option value="">Lawn Sign?</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="Maybe">Maybe</option>
                        </select>

                        <select
                          name="volunteer"
                          value={formData.volunteer}
                          onChange={handleChange}
                          aria-label="Interested in volunteering"
                          className="w-full border border-gray-200 p-3 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-navy/20"
                        >
                          <option value="">Interested in Volunteering?</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="Maybe">Maybe</option>
                        </select>

                        <textarea
                          name="extra"
                          value={formData.extra}
                          onChange={handleChange}
                          placeholder="Anything else you'd like to share"
                          aria-label="Additional comments"
                          rows={3}
                          className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 resize-none"
                        />

                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="w-full bg-navy text-white p-3 rounded-lg font-bold text-sm disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
                        >
                          {status === 'loading' ? 'Sending...' : 'Submit'}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}