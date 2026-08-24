'use client'

import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()

  const handleToggle = () => {
    const nextLocale = locale === 'en' ? 'fr' : 'en'
    // Swap the locale segment in the URL and do a hard navigation
    const segments = pathname.split('/')
    // segments[1] is the locale
    segments[1] = nextLocale
    const newPath = segments.join('/')
    window.location.href = newPath
  }

  return (
    <button
      onClick={handleToggle}
      className="px-3 py-1 text-[10px] xl:text-xs font-bold font-display uppercase tracking-wider border border-current hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-navy dark:text-white"
      aria-label="Toggle Language"
    >
      {locale === 'en' ? 'FR' : 'EN'}
    </button>
  )
}
