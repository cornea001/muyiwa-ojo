'use client'

import { useState } from 'react'
import { useRouter } from '@/i18n/routing'
import { Lock, ArrowRight } from 'lucide-react'
import { login } from '@/app/actions/auth'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await login(password)
    
    if (res.error) {
      setError(res.error)
      setLoading(false)
    } else {
      router.push('/admin')
    }
  }

  return (
    <div className="min-h-screen bg-cream dark:bg-navy-dark flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-navy p-8 border border-gray-100 dark:border-white/10 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold mb-4 rounded-full">
            <Lock size={24} />
          </div>
          <h1 className="font-display font-bold text-2xl text-navy dark:text-white uppercase tracking-widest text-center">
            Admin Access
          </h1>
          <p className="text-sm text-navy/60 dark:text-white/60 mt-2 text-center">
            Enter your secure password to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">
              Password
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-cream dark:bg-navy-dark border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors"
              placeholder="••••••••"
              required
            />
            {error && (
              <p className="text-sm font-medium text-red-500 mt-2">{error}</p>
            )}
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 bg-navy dark:bg-white text-white dark:text-navy px-6 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gold dark:hover:bg-gold dark:hover:text-navy transition-colors disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Sign In'} 
            {!loading && <ArrowRight size={16} />}
          </button>
        </form>
      </div>
    </div>
  )
}
