'use client'

import { ReactNode, useState, useEffect } from 'react'
import { Link, usePathname, useRouter } from '@/i18n/routing'
import { LayoutDashboard, FileText, Settings, LogOut, Menu, X, Users, Globe, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
      setSidebarOpen(window.innerWidth >= 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Web Push Notifications Registration
  useEffect(() => {
    async function registerPush() {
      if ('serviceWorker' in navigator && 'PushManager' in window) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js')
          
          const permission = await Notification.requestPermission()
          if (permission !== 'granted') return

          // Convert VAPID public key to Uint8Array
          const publicVapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
          if (!publicVapidKey) return

          const urlBase64ToUint8Array = (base64String: string) => {
            const padding = '='.repeat((4 - base64String.length % 4) % 4)
            const base64 = (base64String + padding)
              .replace(/\-/g, '+')
              .replace(/_/g, '/')
            const rawData = window.atob(base64)
            const outputArray = new Uint8Array(rawData.length)
            for (let i = 0; i < rawData.length; ++i) {
              outputArray[i] = rawData.charCodeAt(i)
            }
            return outputArray
          }

          const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
          })

          // Save subscription to our backend
          await fetch('/api/notifications/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(subscription)
          })

        } catch (error) {
          console.error('Service Worker Error', error)
        }
      }
    }
    registerPush()
  }, [])

  const navItems = [
    { label: 'Overview', path: '/admin', icon: LayoutDashboard },
    { label: 'Activity Logs', path: '/admin/logs', icon: FileText },
    { label: 'Settings', path: '/admin/settings', icon: Settings },
  ]

  const isActive = (path: string) => {
    if (path === '/admin') return pathname === '/admin' || pathname === '/fr/admin' || pathname === '/en/admin'
    return pathname.includes(path)
  }

  const handleLogout = () => {
    router.push('/')
  }

  return (
    <div className="flex h-screen w-full bg-cream dark:bg-navy-dark overflow-hidden font-body transition-colors duration-300">
      
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobile && sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: isMobile ? -300 : 0 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        className="fixed lg:relative flex flex-col w-64 h-full bg-navy text-white z-50 shadow-2xl shrink-0"
      >
        <div className="flex items-center justify-between h-20 px-6 border-b border-white/10 shrink-0">
          <Link href="/admin" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Logo" className="h-6 w-auto opacity-90" />
            <span className="font-display font-bold uppercase tracking-widest text-sm text-gold">Admin</span>
          </Link>
          {isMobile && (
            <button onClick={() => setSidebarOpen(false)} className="text-white/50 hover:text-white">
              <X size={20} />
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all group ${
                isActive(item.path)
                  ? 'bg-gold/10 text-gold border-r-2 border-gold'
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={18} className={isActive(item.path) ? 'text-gold' : 'text-white/40 group-hover:text-white/80'} />
              {item.label}
              {isActive(item.path) && <ChevronRight size={14} className="ml-auto opacity-50" />}
            </Link>
          ))}
        </div>

        <div className="p-4 border-t border-white/10 shrink-0">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 transition-all w-full text-left"
          >
            <LogOut size={18} />
            Back to Site
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative min-w-0">
        
        {/* Topbar */}
        <header className="h-20 bg-white dark:bg-navy shrink-0 border-b border-gray-100 dark:border-white/5 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-30 transition-colors duration-300">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-navy/50 dark:text-white/50 hover:text-navy dark:hover:text-white lg:hidden"
            >
              <Menu size={24} />
            </button>
            <h1 className="font-display font-bold text-lg md:text-xl text-navy dark:text-white tracking-wide transition-colors">
              {pathname === '/admin' || pathname === '/fr/admin' || pathname === '/en/admin' ? 'Dashboard Overview' : 
               'Admin Dashboard'}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Live
            </div>
            <div className="w-8 h-8 bg-gold flex items-center justify-center text-navy font-bold font-display text-sm">
              MO
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto bg-cream dark:bg-navy-dark p-6 lg:p-10 transition-colors duration-300">
          <div className="max-w-6xl mx-auto w-full">
            {children}
          </div>
        </div>

      </main>

    </div>
  )
}
