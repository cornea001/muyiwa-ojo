'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useTransition } from 'react'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'fr' : 'en'
    
    // Replace the current locale prefix with the next locale prefix
    // (e.g., /en/about -> /fr/about, or /en -> /fr)
    const newPathname = pathname.replace(`/${locale}`, `/${nextLocale}`)

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
