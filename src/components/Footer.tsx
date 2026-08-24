import { Phone, Mail, Globe, Instagram, Facebook, MapPin, Quote } from "lucide-react"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations('Footer')
  
  return (
    <footer id="footer" className="bg-navy dark:bg-navy-dark pt-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Final Campaign Message */}
        <div className="bg-white/5 border border-white/10 p-10 md:p-16 text-center mb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
          <Quote size={40} className="text-gold mx-auto mb-6 opacity-80" />
          <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-8 relative z-10 max-w-4xl mx-auto">
            "{t('final_msg')}"
          </h3>
          <p className="text-gold font-body font-bold tracking-widest uppercase text-sm relative z-10">
            — Muyiwa Ojo &middot; Candidate for Ottawa City Council &middot; Ward 22
          </p>
        </div>

        {/* Footer Top */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <img src="/logo.svg" alt="Muyiwa Ojo Logo" className="h-10 w-auto" />
              <div className="font-display font-bold text-2xl text-white uppercase tracking-tight">
                Muyiwa Ojo
              </div>
            </Link>
            <p className="text-white/70 font-body text-sm leading-relaxed mb-6">
              {t('candidate_info')}
            </p>
            <a
              href="tel:3435760956"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gold px-4 py-2 font-bold text-sm tracking-wider hover:bg-gold hover:text-navy transition-colors"
            >
              <Phone size={14} /> +1 (343) 576-0956
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-6 relative">
              {t('col1_title')}
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-gold" />
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-gold transition-colors font-body text-sm"
                >
                  {t('link_about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/#priorities"
                  className="text-white/70 hover:text-gold transition-colors font-body text-sm"
                >
                  {t('link_priorities')}
                </Link>
              </li>
              <li>
                <Link
                  href="/#community"
                  className="text-white/70 hover:text-gold transition-colors font-body text-sm"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/#news"
                  className="text-white/70 hover:text-gold transition-colors font-body text-sm"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  href="/#involved"
                  className="text-white/70 hover:text-gold transition-colors font-body text-sm"
                >
                  {t('link_volunteer')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-6 relative">
              {t('col2_title')}
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-gold" />
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/donate"
                  className="text-white/70 hover:text-gold transition-colors font-body text-sm"
                >
                  {t('link_donate')}
                </Link>
              </li>
              <li>
                <Link
                  href="/#involved"
                  className="text-white/70 hover:text-gold transition-colors font-body text-sm"
                >
                  {t('link_lawn')}
                </Link>
              </li>
              <li>
                <a
                  href="https://www.muyiwaojo.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-gold transition-colors font-body text-sm"
                >
                  {t('link_website')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-6 relative">
              {t('col3_title')}
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-gold" />
            </h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-white/70 font-body text-sm">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                Ward 22, Riverside South
                <br />
                Findlay Creek, ON
              </li>
              <li className="flex items-center gap-3 text-white/70 font-body text-sm">
                <Mail size={16} className="text-gold shrink-0" />
                <a
                  href="mailto:info@muyiwaojo.ca"
                  className="hover:text-gold transition-colors"
                >
                  info@muyiwaojo.ca
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/muyiwaojoward22"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/iam_ojo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.muyiwaojo.ca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-all"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col items-center gap-6 text-center">
          <p className="text-white/60 font-body text-sm leading-relaxed max-w-3xl">
            {t('auth')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 text-white/40 font-body text-xs">
            <span>{t('rights')}</span>
            <span className="hidden sm:inline">·</span>
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline">·</span>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms & Conditions
            </Link>
            <span className="hidden sm:inline">·</span>
            <span>{t('legal')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

