import Hero from '@/components/Hero'
import About from '@/components/About'
import WhyRunning from '@/components/WhyRunning'
import Priorities from '@/components/Priorities'
import CommunityConnection from '@/components/CommunityConnection'
import Mission from '@/components/Mission'
import NewsEvents from '@/components/NewsEvents'
import GetInvolved from '@/components/GetInvolved'
import DonationAppeal from '@/components/DonationAppeal'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Hero />
      <About />
      <WhyRunning />
      <Priorities />
      <CommunityConnection />
      <Mission />
      <NewsEvents />
      <GetInvolved />
      <DonationAppeal />
      <Newsletter />
      <Footer />
    </main>
  )
}

