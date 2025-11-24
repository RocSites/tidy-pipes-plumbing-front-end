import { Button } from "@/components/ui/button"
import { Phone, Clock, Shield } from "lucide-react"
import Link from "next/link"


export function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white bg-cover bg-center" style={{ backgroundImage: "url('/van_lake_background.jpg')" }}>

      <div className="absolute inset-0 bg-black/70" />

      {/* Foreground content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl text-left lg:text-6xl font-bold mb-6 leading-tight text-white">
              Professional Plumbing Services You Can Trust
            </h1>
            <p className="text-lg sm:text-xl text-left text-white/90 mb-8 leading-relaxed">
              From emergency repairs to installations, Tidy Pipes Plumbing delivers expert service —
              fully insured.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <a href="tel:5855078992" className="flex w-full">
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-secondary px-8 py-4"
                >
                  <Phone className="mr-2 h-5 w-5" /> Call Us: (585) 507-8992
                </Button>
              </a>


              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/80 text-accent hover:bg-white/10 px-8 py-4"
                >
                  Get Free Quote
                </Button>
              </Link>

            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-white/80">
              <div className="flex items-center"><Clock className="h-4 w-4 mr-2" /> Emergency Service</div>
              <div className="flex items-center"><Shield className="h-4 w-4 mr-2" /> Fully Insured</div>
            </div>
          </div>

          <div className="mx-auto max-w-md overflow-hidden rounded-2xl shadow-lg">
            {/* <img src="/nick_van.jpg" alt="Plumber with van" className="w-full h-auto object-cover" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
