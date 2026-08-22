import { Phone, Mail, Globe, Instagram, Facebook, MapPin } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer id="footer" className="bg-navy pt-20">
      <div className="max-w-7xl mx-auto px-6">
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
              Candidate for Ward 22 · Riverside South–Findlay Creek. Committed
              to community, transparency, and action.
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
              Overview
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-gold" />
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-gold transition-colors font-body text-sm"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/running"
                  className="text-white/70 hover:text-gold transition-colors font-body text-sm"
                >
                  Why I'm Running
                </Link>
              </li>
              <li>
                <a
                  href="#priorities"
                  className="text-white/70 hover:text-gold transition-colors font-body text-sm"
                >
                  Priorities
                </a>
              </li>
              <li>
                <a
                  href="#involved"
                  className="text-white/70 hover:text-gold transition-colors font-body text-sm"
                >
                  Volunteer
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-6 relative">
              Resources
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-gold" />
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#involved"
                  className="text-white/70 hover:text-gold transition-colors font-body text-sm"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href="#involved"
                  className="text-white/70 hover:text-gold transition-colors font-body text-sm"
                >
                  Request Lawn Sign
                </a>
              </li>
              <li>
                <a
                  href="https://www.muyiwaojo.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-gold transition-colors font-body text-sm"
                >
                  Official Website
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-6 relative">
              Contact Us
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

        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-body text-xs text-center md:text-left">
            Copyright © {new Date().getFullYear()} Muyiwa Ojo Campaign. All
            Rights Reserved.
            <br />
            <span className="mt-1 block">Paid for by Muyiwa Ojo Ward 22</span>
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-white/40 hover:text-gold font-body text-xs transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/terms" className="text-white/40 hover:text-gold font-body text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
          <p className="text-white/40 font-body text-xs text-center md:text-right max-w-sm">
            Authorized by the Official Agent for the Muyiwa Ojo Campaign.
            Contributions processed in compliance with the Municipal Elections
            Act (Ontario).
          </p>
        </div>
      </div>
    </footer>
  );
}
