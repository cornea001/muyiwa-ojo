'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, CheckCircle, Loader2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import MagneticButton from '@/components/MagneticButton'

export default function EmailSignup() {
  const t = useTranslations('EmailSignup')

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [postal, setPostal] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/email-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, postal }),
      })

      const data = await res.json()

      if (!res.ok || data.error) {
        setErrorMsg(data.error || 'Something went wrong.')
        setStatus('error')
      } else {
        setStatus('success')
      }
    } catch {
      setErrorMsg('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section className="py-24 bg-cream dark:bg-navy-dark transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <div className="w-16 h-16 bg-gold/10 text-gold flex items-center justify-center mx-auto mb-8">
          <Mail size={32} />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-navy dark:text-white uppercase mb-6"
        >
          {t('heading')}
        </motion.h2>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 bg-white dark:bg-navy-light p-12 border border-gray-100 dark:border-navy-light flex flex-col items-center gap-4"
          >
            <CheckCircle size={48} className="text-gold" />
            <p className="font-display font-bold text-xl text-navy dark:text-white uppercase">
              {t('success_title')}
            </p>
            <p className="text-navy/60 dark:text-cream/60 font-body">
              {t('success_body')}
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-12 text-left bg-white dark:bg-navy-light p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-none border border-gray-100 dark:border-navy-light"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold text-navy/50 dark:text-cream/50 uppercase tracking-widest mb-2">
                  {t('first_name')}
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-cream dark:bg-navy border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-navy/50 dark:text-cream/50 uppercase tracking-widest mb-2">
                  {t('last_name')}
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-cream dark:bg-navy border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors duration-300"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-navy/50 dark:text-cream/50 uppercase tracking-widest mb-2">
                  {t('email')} *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-cream dark:bg-navy border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-navy/50 dark:text-cream/50 uppercase tracking-widest mb-2">
                  {t('postal_code')}
                </label>
                <input
                  type="text"
                  value={postal}
                  onChange={(e) => setPostal(e.target.value)}
                  className="w-full bg-cream dark:bg-navy border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors duration-300"
                />
              </div>
            </div>

            {status === 'error' && (
              <p className="text-red-500 font-body text-sm mb-4">{errorMsg}</p>
            )}

            <MagneticButton>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-navy dark:bg-white text-white dark:text-navy px-8 py-4 font-display font-bold uppercase tracking-widest hover:bg-gold dark:hover:bg-gold hover:text-white dark:hover:text-white transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <><Loader2 size={18} className="animate-spin" /> {t('submitting')}</>
                ) : (
                  <>{t('submit')} <ArrowRight size={18} /></>
                )}
              </button>
            </MagneticButton>
          </motion.form>
        )}

      </div>
    </section>
  )
}
