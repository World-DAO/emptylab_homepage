import HeroSection from '@/components/HeroSection'
import ProductGrid from '@/components/ProductGrid'
import AboutSection from '@/components/AboutSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductGrid />
      <AboutSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
