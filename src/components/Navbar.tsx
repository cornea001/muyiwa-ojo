'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Instagram, Facebook, ChevronDown, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import MagneticButton from '@/components/MagneticButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

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
      <div className="hidden lg:block bg-navy text-white/80 border-b border-white/10 text-xs font-body tracking-wide relative z-50">
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
          scrolled ? 'fixed top-0 bg-white shadow-md py-3' : 'absolute top-0 lg:top-10 bg-white/95 py-3'
        } ${scrolled && !mobileOpen ? '' : 'lg:absolute'}`}
        style={{ position: scrolled ? 'fixed' : 'absolute' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Muyiwa Ojo Logo" width={180} height={40} className="h-10 w-auto" />
            <div className="hidden sm:block">
              <div className="font-display font-bold text-xl text-navy uppercase leading-none tracking-tight">
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
              <Link href="/" className="text-sm font-bold text-navy hover:text-gold transition-colors font-display uppercase tracking-wider">
                Home
              </Link>
            )}
            <Link href="/about" className={`text-sm font-bold hover:text-gold transition-colors font-display uppercase tracking-wider ${pathname === '/about' ? 'text-gold' : 'text-navy'}`}>
              About Me
            </Link>
            <Link href="/running" className={`text-sm font-bold hover:text-gold transition-colors font-display uppercase tracking-wider ${pathname === '/running' ? 'text-gold' : 'text-navy'}`}>
              Why I'm Running
            </Link>
            <button
              onClick={scrollToInvolved}
              className="text-sm font-bold text-navy hover:text-gold transition-colors font-display uppercase tracking-wider"
            >
              Get Involved
            </button>
            <button
              onClick={scrollToFooter}
              className="text-sm font-bold text-navy hover:text-gold transition-colors font-display uppercase tracking-wider"
            >
              Contact
            </button>
          </div>
          
          {/* DONATE BUTTON */}
          <div className="hidden lg:block">
            <MagneticButton>
              <button
                onClick={() => router.push('/donate')}
                className="bg-navy text-white px-8 py-3.5 text-sm font-bold font-display uppercase tracking-widest hover:bg-gold transition-colors"
              >
                Donate Now
              </button>
            </MagneticButton>
          </div>
          
          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-navy p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`lg:hidden fixed inset-0 z-50 flex flex-col justify-center items-center shadow-xl backdrop-blur-xl ${scrolled ? 'bg-white/95' : 'bg-navy'}`}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className={`absolute top-6 right-6 p-2 ${scrolled ? 'text-navy' : 'text-white'}`}
            >
              <X size={32} />
            </button>
            <div className="px-6 py-6 flex flex-col gap-8 items-center w-full">
              {pathname !== '/' && (
                <Link 
                  href="/" 
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-bold font-display uppercase tracking-wider ${scrolled ? (pathname === '/' ? 'text-gold' : 'text-navy') : (pathname === '/' ? 'text-gold' : 'text-white')}`}
                >
                  Home
                </Link>
              )}
              
              <Link 
                href="/about" 
                onClick={() => setMobileOpen(false)}
                className={`text-2xl font-bold font-display uppercase tracking-wider ${scrolled ? (pathname === '/about' ? 'text-gold' : 'text-navy') : (pathname === '/about' ? 'text-gold' : 'text-white')}`}
              >
                About Me
              </Link>
              
              <Link 
                href="/running" 
                onClick={() => setMobileOpen(false)}
                className={`text-2xl font-bold font-display uppercase tracking-wider ${scrolled ? (pathname === '/running' ? 'text-gold' : 'text-navy') : (pathname === '/running' ? 'text-gold' : 'text-white')}`}
              >
                Why I'm Running
              </Link>
              
              <button
                onClick={() => { scrollToInvolved(); setMobileOpen(false); }}
                className={`text-2xl font-bold font-display uppercase tracking-wider ${scrolled ? 'text-navy' : 'text-white'}`}
              >
                Get Involved
              </button>
              
              <button
                onClick={() => { scrollToFooter(); setMobileOpen(false); }}
                className={`text-2xl font-bold font-display uppercase tracking-wider ${scrolled ? 'text-navy' : 'text-white'}`}
              >
                Contact
              </button>

              <button
                onClick={() => { router.push('/donate'); setMobileOpen(false); }}
                className="mt-6 bg-gold text-navy px-10 py-4 text-xl font-bold font-display uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Donate Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 