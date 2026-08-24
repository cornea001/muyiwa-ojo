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

  // Hide Navbar on admin routes
  if (pathname.includes('/admin')) return null


  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    handler() // Check immediately on mount in case we restored scroll position
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
      <div className="hidden lg:block bg-navy dark:bg-navy text-white/80 border-b border-white/10 text-xs font-body tracking-wide relative z-50">
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
          scrolled ? 'fixed top-0 bg-white dark:bg-navy-dark shadow-md py-3' : 'absolute top-0 lg:top-10 bg-white/95 dark:bg-navy-dark/95 py-3'
        } ${scrolled && !mobileOpen ? '' : 'lg:absolute'}`}
        style={{ position: scrolled ? 'fixed' : 'absolute' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <Link href="/" className="flex items-center justify-between gap-3">
            <Image src="/logo.svg" alt="Muyiwa Ojo Logo" width={160} height={36} className="h-9 w-auto" />
            <div>
              <div className="font-display font-bold text-base sm:text-xl text-navy dark:text-white uppercase leading-none tracking-tight transition-colors duration-300 whitespace-nowrap">
                Muyiwa Ojo
              </div>
              <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-gold whitespace-nowrap">
                Ward 22 &middot; Ottawa
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-4">
            {pathname !== '/' && (
              <Link href="/" className="text-[10px] xl:text-[11px] font-bold text-navy dark:text-white hover:text-gold transition-colors font-display uppercase tracking-wider whitespace-nowrap">
                {t('home')}
              </Link>
            )}
            <Link href="/about" className={`text-[10px] xl:text-[11px] font-bold hover:text-gold transition-colors font-display uppercase tracking-wider whitespace-nowrap ${pathname === '/about' ? 'text-gold' : 'text-navy dark:text-white'}`}>
              {t('about')}
            </Link>
            <Link href="/#priorities" className="text-[10px] xl:text-[11px] font-bold hover:text-gold transition-colors font-display uppercase tracking-wider text-navy dark:text-white whitespace-nowrap">
              {t('priorities')}
            </Link>
            <Link href="/#community" className="text-[10px] xl:text-[11px] font-bold hover:text-gold transition-colors font-display uppercase tracking-wider text-navy dark:text-white whitespace-nowrap">
              {t('community')}
            </Link>
            <Link href="/#news" className="text-[10px] xl:text-[11px] font-bold hover:text-gold transition-colors font-display uppercase tracking-wider text-navy dark:text-white whitespace-nowrap">
              {t('news')}
            </Link>
            <button
              onClick={scrollToInvolved}
              className="text-[10px] xl:text-[11px] font-bold text-navy dark:text-white hover:text-gold transition-colors font-display uppercase tracking-wider whitespace-nowrap"
            >
              {t('volunteer')}
            </button>
            <button
              onClick={scrollToFooter}
              className="text-[10px] xl:text-[11px] font-bold text-navy dark:text-white hover:text-gold transition-colors font-display uppercase tracking-wider whitespace-nowrap"
            >
              {t('contact')}
            </button>
            <div className="flex items-center gap-1.5 xl:gap-3 ml-1 xl:ml-2">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
          
          {/* DONATE BUTTON */}
          <div className="hidden lg:block ml-1 xl:ml-3">
            <MagneticButton>
              <button
                onClick={() => router.push('/donate')}
                className="bg-gold text-navy px-4 xl:px-6 py-2.5 xl:py-3 text-[10px] xl:text-[11px] font-bold font-display uppercase tracking-widest hover:bg-navy hover:text-white dark:hover:bg-white dark:hover:text-navy transition-colors whitespace-nowrap"
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
            className={`lg:hidden fixed inset-0 z-50 flex flex-col justify-center items-center shadow-xl backdrop-blur-xl ${scrolled ? 'bg-white/95 dark:bg-navy-dark/95' : 'bg-navy dark:bg-navy'}`}
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
                  className={`text-2xl text-center font-bold font-display uppercase tracking-wider ${scrolled ? (pathname === '/' ? 'text-gold' : 'text-navy dark:text-white') : (pathname === '/' ? 'text-gold' : 'text-white')}`}
                >
                  {t('home')}
                </Link>
              )}
              
              <Link 
                href="/about" 
                onClick={() => setMobileOpen(false)}
                className={`text-2xl text-center font-bold font-display uppercase tracking-wider ${scrolled ? (pathname === '/about' ? 'text-gold' : 'text-navy dark:text-white') : (pathname === '/about' ? 'text-gold' : 'text-white')}`}
              >
                {t('about')}
              </Link>
              
              <Link 
                href="/#priorities" 
                onClick={() => setMobileOpen(false)}
                className={`text-2xl text-center font-bold font-display uppercase tracking-wider ${scrolled ? 'text-navy dark:text-white' : 'text-white'}`}
              >
                {t('priorities')}
              </Link>

              <Link 
                href="/#community" 
                onClick={() => setMobileOpen(false)}
                className={`text-2xl text-center font-bold font-display uppercase tracking-wider ${scrolled ? 'text-navy dark:text-white' : 'text-white'}`}
              >
                {t('community')}
              </Link>

              <Link 
                href="/#news" 
                onClick={() => setMobileOpen(false)}
                className={`text-2xl text-center font-bold font-display uppercase tracking-wider ${scrolled ? 'text-navy dark:text-white' : 'text-white'}`}
              >
                {t('news')}
              </Link>
              
              <button
                onClick={() => { scrollToInvolved(); setMobileOpen(false); }}
                className={`text-2xl text-center font-bold font-display uppercase tracking-wider ${scrolled ? 'text-navy dark:text-white' : 'text-white'}`}
              >
                {t('volunteer')}
              </button>
              
              <button
                onClick={() => { scrollToFooter(); setMobileOpen(false); }}
                className={`text-2xl text-center font-bold font-display uppercase tracking-wider ${scrolled ? 'text-navy dark:text-white' : 'text-white'}`}
              >
                {t('contact')}
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