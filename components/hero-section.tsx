import { Button } from "@/components/ui/button"
import { Phone, Clock, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="hero-section section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Professional Plumbing Services You Can Trust
            </h1>
            <p className="text-xl text-accent-foreground/80 text-pretty mb-8 leading-relaxed">
              From emergency repairs to complete installations, Tidy Pipes Plumbing delivers reliable, expert service to
              keep your home running smoothly. Licensed, insured, and available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-secondary text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (555) 123-PIPE
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
              >
                Get Free Quote
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-accent-foreground/70">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                24/7 Emergency Service
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Licensed & Insured
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-primary/10 rounded-2xl flex items-center justify-center">
              <img
                src="/images/plumbing-services.png"
                alt="Professional plumber at work"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
