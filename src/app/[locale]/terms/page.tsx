import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function TermsPage() {
  const t = useTranslations('Terms')

  return (
    <main className="max-w-3xl mx-auto px-6 py-36 font-body text-navy dark:text-gray-200 transition-colors duration-300">
      <h1 className="font-display font-bold text-4xl uppercase tracking-tight mb-2 text-navy dark:text-white transition-colors duration-300">{t('title')}</h1>
      <p className="text-navy/50 dark:text-gray-400 text-sm mb-10 transition-colors duration-300">{t('last_updated')}</p>

      <section className="space-y-8 text-[15px] leading-relaxed text-navy/80 dark:text-gray-300 transition-colors duration-300">
        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy dark:text-white mb-3 transition-colors duration-300">{t('section1_title')}</h2>
          <p>{t('section1_body')}</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy dark:text-white mb-3 transition-colors duration-300">{t('section2_title')}</h2>
          <p>{t('section2_body')}</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy dark:text-white mb-3 transition-colors duration-300">{t('section3_title')}</h2>
          <p>{t('section3_body')}</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy dark:text-white mb-3 transition-colors duration-300">{t('section4_title')}</h2>
          <p>{t('section4_body')}</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy dark:text-white mb-3 transition-colors duration-300">{t('section5_title')}</h2>
          <p>{t('section5_body')}</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy dark:text-white mb-3 transition-colors duration-300">{t('section6_title')}</h2>
          <p>{t('section6_body')}</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy dark:text-white mb-3 transition-colors duration-300">{t('section7_title')}</h2>
          <p>{t.rich('section7_body', {
            emailLink: (chunks) => <a href="mailto:info@muyiwaojo.ca" className="text-gold underline">{chunks}</a>
          })}</p>
        </div>
      </section>

      <div className="mt-12 pt-8 border-t border-navy/10 dark:border-white/10 transition-colors duration-300">
        <Link href="/" className="text-sm font-bold font-display uppercase tracking-widest text-navy dark:text-white hover:text-gold dark:hover:text-gold transition-colors">
          &larr; {t('back')}
        </Link>
      </div>
    </main>
  )
}
