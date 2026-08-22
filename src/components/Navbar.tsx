'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Instagram, Facebook, ChevronDown, Phone, Mail } from 'lucide-react'
import Image from 'next/image'
import { Link, useRouter, usePathname } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import MagneticButton from '@/components/MagneticButton'
import ThemeSwitcher from './ThemeSwitcher'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('Navbar')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollToFooter = () => {
    if (pathname !== '/') {
      router.push('/#footer')
      return
    }
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToInvolved = () => {
    if (pathname !== '/') {
      router.push('/#involved')
      return
    }
    document.getElementById('involved')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* 1. TOPBAR (Dark) */}
      <div className="hidden lg:block bg-navy dark:bg-gray-900 text-white/80 border-b border-white/10 text-xs font-body tracking-wide relative z-50">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:3435760956" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={14} className="text-gold" />
              343-576-0956
            </a>
            <a href="mailto:info@muyiwaojo.ca" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={14} className="text-gold" />
              info@muyiwaojo.ca
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/iam_ojo" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold transition-colors">
              <Instagram size={14} />
            </a>
            <a href="https://www.facebook.com/muyiwaojoward22" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gold transition-colors">
              <Facebook size={14} />
            </a>
          </div>
        </div>
      </div>
      
      {/* 2. MAIN HEADER (Sticky, White) */}
      <nav
        className={`w-full z-40 transition-all duration-300 ${
          scrolled ? 'fixed top-0 bg-white dark:bg-gray-950 shadow-md py-3' : 'absolute top-0 lg:top-10 bg-white/95 dark:bg-gray-950/95 py-3'
        } ${scrolled && !mobileOpen ? '' : 'lg:absolute'}`}
        style={{ position: scrolled ? 'fixed' : 'absolute' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Muyiwa Ojo Logo" width={180} height={40} className="h-10 w-auto" />
            <div className="hidden sm:block">
              <div className="font-display font-bold text-xl text-navy dark:text-white uppercase leading-none tracking-tight transition-colors duration-300">
                Muyiwa Ojo
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gold mt-1">
                Ward 22 Candidate
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {pathname !== '/' && (
              <Link href="/" className="text-sm font-bold text-navy dark:text-gray-100 hover:text-gold transition-colors font-display uppercase tracking-wider">
                {t('home')}
              </Link>
            )}
            <Link href="/about" className={`text-sm font-bold hover:text-gold transition-colors font-display uppercase tracking-wider ${pathname === '/about' ? 'text-gold' : 'text-navy dark:text-gray-100'}`}>
              {t('about')}
            </Link>
            <Link href="/running" className={`text-sm font-bold hover:text-gold transition-colors font-display uppercase tracking-wider ${pathname === '/running' ? 'text-gold' : 'text-navy dark:text-gray-100'}`}>
              {t('running')}
            </Link>
            <button
              onClick={scrollToInvolved}
              className="text-sm font-bold text-navy dark:text-gray-100 hover:text-gold transition-colors font-display uppercase tracking-wider"
            >
              {t('volunteer')}
            </button>
            <button
              onClick={scrollToFooter}
              className="text-sm font-bold text-navy dark:text-gray-100 hover:text-gold transition-colors font-display uppercase tracking-wider"
            >
              Contact
            </button>
            <div className="flex items-center gap-4 ml-4">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
          
          {/* DONATE BUTTON */}
          <div className="hidden lg:block">
            <MagneticButton>
              <button
                onClick={() => router.push('/donate')}
                className="bg-navy dark:bg-gray-100 text-white dark:text-navy px-8 py-3.5 text-sm font-bold font-display uppercase tracking-widest hover:bg-gold dark:hover:bg-gold transition-colors"
              >
                {t('donate')}
              </button>
            </MagneticButton>
          </div>
          
          {/* MOBILE TOGGLE & SWITCHERS */}
          <div className="flex lg:hidden items-center gap-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <button
              className="text-navy dark:text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`lg:hidden fixed inset-0 z-50 flex flex-col justify-center items-center shadow-xl backdrop-blur-xl ${scrolled ? 'bg-white/95 dark:bg-gray-950/95' : 'bg-navy dark:bg-gray-900'}`}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className={`absolute top-6 right-6 p-2 ${scrolled ? 'text-navy dark:text-white' : 'text-white'}`}
            >
              <X size={32} />
            </button>
            <div className="px-6 py-6 flex flex-col gap-8 items-center w-full">
              {pathname !== '/' && (
                <Link 
                  href="/" 
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-bold font-display uppercase tracking-wider ${scrolled ? (pathname === '/' ? 'text-gold' : 'text-navy dark:text-white') : (pathname === '/' ? 'text-gold' : 'text-white')}`}
                >
                  {t('home')}
                </Link>
              )}
              
              <Link 
                href="/running" 
                onClick={() => setMobileOpen(false)}
                className={`text-2xl font-bold font-display uppercase tracking-wider ${scrolled ? (pathname === '/running' ? 'text-gold' : 'text-navy dark:text-white') : (pathname === '/running' ? 'text-gold' : 'text-white')}`}
              >
                {t('running')}
              </Link>
              
              <Link 
                href="/about" 
                onClick={() => setMobileOpen(false)}
                className={`text-2xl font-bold font-display uppercase tracking-wider ${scrolled ? (pathname === '/about' ? 'text-gold' : 'text-navy dark:text-white') : (pathname === '/about' ? 'text-gold' : 'text-white')}`}
              >
                {t('about')}
              </Link>
              
              <button
                onClick={() => { scrollToInvolved(); setMobileOpen(false); }}
                className={`text-2xl font-bold font-display uppercase tracking-wider ${scrolled ? 'text-navy dark:text-white' : 'text-white'}`}
              >
                {t('volunteer')}
              </button>
              
              <button
                onClick={() => { scrollToFooter(); setMobileOpen(false); }}
                className={`text-2xl font-bold font-display uppercase tracking-wider ${scrolled ? 'text-navy dark:text-white' : 'text-white'}`}
              >
                Contact
              </button>

              <button
                onClick={() => { router.push('/donate'); setMobileOpen(false); }}
                className="mt-6 bg-gold text-navy px-10 py-4 text-xl font-bold font-display uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                {t('donate')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 