import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Mission from '@/components/Mission'
import StatsBar from '@/components/StatsBar'
import Priorities from '@/components/Priorities'
import Testimonials from '@/components/Testimonials'
import GetInvolved from '@/components/GetInvolved'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Hero />
      <Mission />
      <StatsBar />
      <Priorities />
      <Marquee />
      <Testimonials />
      <GetInvolved />
      <Footer />
    </main>
  )
}
