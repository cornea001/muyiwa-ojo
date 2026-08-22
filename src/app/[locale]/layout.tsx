import type { Metadata } from 'next'
import '../globals.css'
import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'
import JoinModal from '@/components/JoinModal'
import { Suspense } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from '@/components/ThemeProvider'
import BackToTop from '@/components/BackToTop'
import { Manrope, Cormorant_Garamond } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Muyiwa Ojo — Ward 22 Riverside South–Findlay Creek',
  description:
    'Practical Solutions. Better Everyday Life. Vote Muyiwa Ojo for Ottawa City Council Ward 22 in the 2026 Municipal Election.',
  keywords: [
    'Muyiwa Ojo',
    'Ward 22',
    'Ottawa',
    'Municipal Election',
    'Riverside South',
    'Findlay Creek',
    'City Council',
  ],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Vote Muyiwa Ojo — Ward 22',
    description: 'Practical Solutions. Better Everyday Life.',
    type: 'website',
  },
}
export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={`overflow-x-hidden w-full ${manrope.variable} ${cormorant.variable}`}>
      <body className="bg-white dark:bg-gray-950 overflow-x-hidden w-full text-navy dark:text-gray-100 transition-colors duration-300">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <SmoothScroll>
              <CustomCursor />
              <Navbar />
              <main>
                {children}
              </main>
              <Suspense fallback={null}>
                <JoinModal />
              </Suspense>
              <BackToTop />
            </SmoothScroll>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}