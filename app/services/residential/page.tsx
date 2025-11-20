import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Home, Wrench, Droplets, CheckCircle, Phone, Shield } from "lucide-react"

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-accent text-accent-foreground py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/20 rounded-full">
                  <Home className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
                Complete Residential Plumbing Services
              </h1>
              <p className="text-xl text-accent-foreground/80 text-pretty max-w-3xl mx-auto mb-8">
                From kitchen and bathroom plumbing to whole-home systems, we provide comprehensive residential plumbing
                services to keep your home running smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="cta-button">
                  <Phone className="h-5 w-5 mr-2" />
                  Schedule Service
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
                >
                  Free Estimate
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Your Home Plumbing Experts</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Every home is unique, and so are its plumbing needs. Our residential plumbing services cover
                  everything from routine maintenance to major installations, ensuring your family has reliable access
                  to clean water and proper drainage.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Wrench className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Expert Technicians</h3>
                      <p className="text-muted-foreground">Insured plumbers with residential expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Quality Guarantee</h3>
                      <p className="text-muted-foreground">100% satisfaction guarantee on all residential work</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Droplets className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Water Conservation</h3>
                      <p className="text-muted-foreground">Eco-friendly solutions to reduce water usage</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/residential-plumbing-work-in-modern-home.jpg"
                  alt="Residential plumbing service in home"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Residential Services */}
            <div className="bg-muted/30 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">Residential Services We Provide</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Bathroom Plumbing", description: "Complete bathroom installations and renovations" },
                  { name: "Kitchen Plumbing", description: "Sink, dishwasher, and garbage disposal services" },
                  { name: "Toilet Repair & Installation", description: "All toilet-related services and upgrades" },
                  { name: "Faucet & Fixture Installation", description: "Modern fixtures for improved functionality" },
                  { name: "Drain Cleaning", description: "Professional drain cleaning and maintenance" },
                  { name: "Sump Pump Services", description: "Installation and repair of sump pump systems" },
                  { name: "Garbage Disposal", description: "Installation, repair, and replacement services" },
                  { name: "Whole-Home Repiping", description: "Complete pipe replacement for older homes" },
                  { name: "Water Filtration", description: "Clean water solutions for your entire home" },
                ].map((service, index) => (
                  <div key={index} className="bg-background rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-semibold">{service.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-12">Why Homeowners Choose Tidy Pipes</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Fully Insured", description: "Full insurance for your protection" },
                  { title: "Upfront Pricing", description: "No surprises - know the cost before we start" },
                  { title: "Clean & Respectful", description: "We treat your home with care and respect" },
                  { title: "Satisfaction Guaranteed", description: "We stand behind our work 100%" },
                ].map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Home's Plumbing?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for reliable, professional residential plumbing services.
            </p>
            <Button size="lg" className="cta-button">
              <Phone className="h-5 w-5 mr-2" />
              Call Today: (585) 507-8992
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
