import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Feature from '@/components/sections/Feature'
import CTA from '@/components/sections/CTA'
import Container from '@/components/ui/Container'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Container>
          <Services />
          <Feature />
        </Container>
        <CTA />
      </main>
      <Footer />
    </>
  )
}