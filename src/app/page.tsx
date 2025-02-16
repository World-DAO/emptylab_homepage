import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProductGrid from '@/components/ProductGrid'
import AboutSection from '@/components/AboutSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProductGrid />
        <AboutSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  )
}
