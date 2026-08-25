import Hero from '@/components/Hero'
import About from '@/components/About'
import StatsBar from '@/components/StatsBar'
import WhyRunning from '@/components/WhyRunning'
import Priorities from '@/components/Priorities'
import CommunityConnection from '@/components/CommunityConnection'
import CommunityInvolvement from '@/components/CommunityInvolvement'
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
      <CommunityInvolvement />
      <WhyRunning />
      <StatsBar />
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
