'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useTransition, useEffect } from 'react'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    const storedScroll = sessionStorage.getItem('scrollPosition')
    if (storedScroll) {
      const y = parseInt(storedScroll, 10)
      window.scrollTo(0, y)
      requestAnimationFrame(() => {
        window.scrollTo(0, y)
        setTimeout(() => window.scrollTo(0, y), 50)
        sessionStorage.removeItem('scrollPosition')
      })
    }
  }, [])

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'fr' : 'en'
    const newPathname = pathname.replace(`/${locale}`, `/${nextLocale}`)

    sessionStorage.setItem('scrollPosition', window.scrollY.toString())

    startTransition(() => {
      router.replace(newPathname, { scroll: false })
    })
  }

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className="px-3 py-1 text-sm font-bold font-display uppercase tracking-wider border border-current rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
      aria-label="Toggle Language"
    >
      {locale === 'en' ? 'FR' : 'EN'}
    </button>
  )
}
