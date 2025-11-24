import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <HeroSection />
        <div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
          <ServicesSection />
          <AboutSection />
          {/* <ContactSection /> */}
        </div>
      </main>

      <Footer />
    </>
  )
}
