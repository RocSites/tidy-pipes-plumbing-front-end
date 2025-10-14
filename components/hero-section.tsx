import { Button } from "@/components/ui/button"
import { Phone, Clock, Shield } from "lucide-react"
import { BackgroundIconGrid } from "@/components/background-icon-grid"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900">
      {/* Background icons */}
      <BackgroundIconGrid />

      {/* Optional light gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-100/40" />

      {/* Foreground content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Plumbing Services You Can Trust
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 mb-8 leading-relaxed">
              From emergency repairs to installations, Tidy Pipes Plumbing delivers expert service —
              licensed and insured.
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



              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-4"
              >
                Get Free Quote
              </Button>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-600">
              <div className="flex items-center"><Clock className="h-4 w-4 mr-2" /> Emergency Service</div>
              <div className="flex items-center"><Shield className="h-4 w-4 mr-2" /> Licensed & Insured</div>
            </div>
          </div>

          <div className="mx-auto max-w-md overflow-hidden rounded-2xl shadow-lg">
            <img src="/nick_van.jpg" alt="Plumber with van" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
