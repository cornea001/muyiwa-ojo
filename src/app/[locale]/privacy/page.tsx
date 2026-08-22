import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — Muyiwa Ojo Ward 22',
  description: 'Privacy Policy for the Muyiwa Ojo Ward 22 Campaign website.',
}

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-36 font-body text-navy">
      <h1 className="font-display font-bold text-4xl uppercase tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-navy/50 text-sm mb-10">Last updated: August 2026</p>

      <section className="space-y-8 text-[15px] leading-relaxed text-navy/80">
        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy mb-3">1. Information We Collect</h2>
          <p>When you use this website or submit a form (such as the campaign interest form), we may collect personal information including your name, email address, phone number, and home address. This information is provided voluntarily by you.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy mb-3">2. How We Use Your Information</h2>
          <p>We use your information solely for campaign purposes, including: contacting you about campaign events and updates, delivering lawn signs or campaign materials to your address, and responding to your inquiries. We do not sell, rent, or trade your personal information to any third party.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy mb-3">3. Third-Party Services</h2>
          <p>This website does not use any third-party advertising or behavioural tracking SDKs (no ad pixels, no session recording, no heatmap tools). Fonts are self-hosted and do not make any external CDN requests. The ward survey links to a <strong>Google Forms</strong> page hosted by Google; by following that link you are subject to <a href="https://policies.google.com/privacy" className="text-gold underline" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a> — no data is shared with us automatically by Google. Donations are processed through <strong>Stripe</strong>, a third-party payment processor. Stripe may collect payment information in accordance with their own <a href="https://stripe.com/privacy" className="text-gold underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. We do not store full credit card details on our servers. All payment data is handled in accordance with PCI-DSS standards. Donation records may be subject to disclosure requirements under Ontario municipal election finance rules.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy mb-3">4. Cookies</h2>
          <p>This website may use essential cookies to operate correctly. We do not use advertising or tracking cookies. No personal data is collected through cookies.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy mb-3">5. Data Retention</h2>
          <p>We retain personal information for the duration of the 2026 election campaign and as required by Ontario election finance regulations. After this period, information will be securely deleted.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy mb-3">6. Your Rights (GDPR)</h2>
          <p>If you are located in the European Economic Area, you have the following rights under the General Data Protection Regulation (GDPR):</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Right of access</strong> — You can request a copy of the personal data we hold about you.</li>
            <li><strong>Right to rectification</strong> — You can request that we correct inaccurate data.</li>
            <li><strong>Right to erasure</strong> — You can request that we delete your personal data.</li>
            <li><strong>Right to restrict processing</strong> — You can request that we limit how we use your data.</li>
            <li><strong>Right to data portability</strong> — You can request your data in a portable format.</li>
            <li><strong>Right to object</strong> — You can object to our processing of your data at any time.</li>
          </ul>
          <p className="mt-2">To exercise any of these rights, contact us at <a href="mailto:info@muyiwaojo.ca" className="text-gold underline">info@muyiwaojo.ca</a>.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy mb-3">7. Your Rights (CCPA — California Residents)</h2>
          <p>If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Right to know</strong> — You can request disclosure of the categories and specific pieces of personal information we have collected.</li>
            <li><strong>Right to delete</strong> — You can request deletion of personal information we have collected about you.</li>
            <li><strong>Right to opt-out</strong> — We do not sell personal information. There is nothing to opt out of.</li>
            <li><strong>Right to non-discrimination</strong> — We will not discriminate against you for exercising any of your CCPA rights.</li>
          </ul>
          <p className="mt-2">To submit a CCPA request, contact us at <a href="mailto:info@muyiwaojo.ca" className="text-gold underline">info@muyiwaojo.ca</a>.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-xl uppercase text-navy mb-3">8. Contact</h2>
          <p>For any privacy-related questions, please contact the Muyiwa Ojo Campaign at <a href="mailto:info@muyiwaojo.ca" className="text-gold underline">info@muyiwaojo.ca</a> or call <a href="tel:3435760956" className="text-gold underline">343-576-0956</a>.</p>
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
