import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service — Muyiwa Ojo Ward 22',
  description: 'Terms of Service for the Muyiwa Ojo Ward 22 Campaign website.',
}

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-36 font-body text-navy">
      <h1 className="font-display font-bold text-4xl uppercase tracking-tight mb-2">Terms of Service</h1>
      <p className="text-navy/50 text-sm mb-10">Last updated: August 2026</p>

      <section className="space-y-8 text-[15px] leading-relaxed text-navy/80">
        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy mb-3">1. Acceptance of Terms</h2>
          <p>By accessing and using this website (muyiwaojo.ca), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy mb-3">2. Use of This Website</h2>
          <p>This website is operated by the Muyiwa Ojo 2026 Municipal Election Campaign for Ward 22, Ottawa. The content is for informational and campaign purposes only. You may not use this website for any unlawful purpose, to submit false information, or to interfere with the operation of the site.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy mb-3">3. Campaign Donations</h2>
          <p>Donations made through this website are subject to Ontario municipal election campaign finance rules. Contributions are limited to individuals — corporations and trade unions are not permitted to donate under the Municipal Elections Act, 1996. By donating, you confirm that you are an individual and that the contribution comes from your own funds.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy mb-3">4. Intellectual Property</h2>
          <p>All content on this website, including text, images, logos, and campaign materials, is the property of the Muyiwa Ojo Campaign and may not be reproduced without express written permission.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy mb-3">5. Disclaimer</h2>
          <p>This website is provided "as is" without any warranties. The campaign makes no guarantee that the website will be error-free or uninterrupted. Campaign positions and policies described are subject to change.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy mb-3">6. Governing Law</h2>
          <p>These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy mb-3">7. Contact</h2>
          <p>Questions about these Terms may be directed to <a href="mailto:info@muyiwaojo.ca" className="text-gold underline">info@muyiwaojo.ca</a>.</p>
        </div>
      </section>

      <div className="mt-12 pt-8 border-t border-navy/10">
        <Link href="/" className="text-sm font-bold font-display uppercase tracking-widest text-navy hover:text-gold transition-colors">
          &larr; Back to Home
        </Link>
      </div>
    </main>
  )
}
