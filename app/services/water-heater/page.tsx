import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Thermometer, Wrench, Shield, CheckCircle, Phone, Clock } from "lucide-react"

export default function WaterHeaterPage() {
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
                  <Thermometer className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">Water Heater Installation & Repair</h1>
              <p className="text-xl text-accent-foreground/80 text-pretty max-w-3xl mx-auto mb-8">
                Professional water heater services for all types and brands. Installation, repair, maintenance, and
                replacement by certified technicians.
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
                  Get Quote
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
                <h2 className="text-3xl font-bold mb-6">Complete Water Heater Services</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  From traditional tank water heaters to modern tankless systems, we provide comprehensive services to
                  keep your hot water flowing. Our certified technicians work with all major brands and can handle any
                  water heater challenge.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Wrench className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Expert Installation</h3>
                      <p className="text-muted-foreground">Professional installation of all water heater types</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Warranty Protection</h3>
                      <p className="text-muted-foreground">Comprehensive warranties on all installations and repairs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Same-Day Service</h3>
                      <p className="text-muted-foreground">Fast service to restore your hot water quickly</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-9">
                <img
                  src="/tankless_water_heater.jpg"
                  alt="Professional water heater installation"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Water Heater Types */}
            <div className="bg-muted/30 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">Water Heater Types We Service</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Tank Water Heaters",
                    description: "Traditional storage tank systems for reliable hot water",
                  },
                  { name: "Tankless Water Heaters", description: "On-demand hot water with energy efficiency" },
                  { name: "Electric Water Heaters", description: "Clean and efficient electric heating systems" },
                  { name: "Gas Water Heaters", description: "Fast heating with natural gas or propane" },
                  { name: "Hybrid Heat Pumps", description: "Energy-efficient hybrid heating technology" },
                  { name: "Solar Water Heaters", description: "Eco-friendly solar-powered heating systems" },
                ].map((heater, index) => (
                  <div key={index} className="bg-background rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-semibold">{heater.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{heater.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Offered */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-12">Our Water Heater Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">New Installation</h3>
                      <p className="text-muted-foreground">Complete installation of new water heating systems</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Repair Services</h3>
                      <p className="text-muted-foreground">Fix heating elements, thermostats, and other components</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Replacement</h3>
                      <p className="text-muted-foreground">Upgrade to newer, more efficient water heater models</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Maintenance</h3>
                      <p className="text-muted-foreground">Regular maintenance to extend system lifespan</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Emergency Repairs</h3>
                      <p className="text-muted-foreground"> emergency service for water heater failures</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Energy Audits</h3>
                      <p className="text-muted-foreground">Efficiency assessments and upgrade recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 section-padding pt-6 pb-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Water Heater Service?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't wait for cold showers. Contact us today for fast, professional water heater service.
            </p>
            <Button size="lg" className="cta-button">
              <Phone className="h-5 w-5 mr-2" />
              Call Now: (585) 507-8992
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
