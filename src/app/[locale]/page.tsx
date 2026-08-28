import Hero from '@/components/Hero'
import About from '@/components/About'
import StatsBar from '@/components/StatsBar'
import WhyRunning from '@/components/WhyRunning'
import Priorities from '@/components/Priorities'
import CommunityConnection from '@/components/CommunityConnection'
import CommunityInvolvement from '@/components/CommunityInvolvement'
import Mission from '@/components/Mission'
import WhatWeHearing from '@/components/WhatWeHearing'
import NewsEvents from '@/components/NewsEvents'
import GetInvolved from '@/components/GetInvolved'
import DonationAppeal from '@/components/DonationAppeal'
import EmailSignup from '@/components/EmailSignup'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Hero />
      <WhyRunning />
      <About />
      <WhatWeHearing />
      <Priorities />
      <CommunityConnection />
      <Mission />
      <NewsEvents />
      <GetInvolved />
      <DonationAppeal />
      <EmailSignup />
      <Footer />
    </main>
  )
}
