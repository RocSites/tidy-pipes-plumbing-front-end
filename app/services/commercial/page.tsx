import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Building, Wrench, Shield, CheckCircle, Phone, Clock } from "lucide-react"

export default function CommercialPage() {
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
                  <Building className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">Professional Commercial Plumbing</h1>
              <p className="text-xl text-accent-foreground/80 text-pretty max-w-3xl mx-auto mb-8">
                Comprehensive commercial plumbing services for businesses, offices, and industrial facilities. Minimize
                downtime with our expert commercial solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="cta-button">
                  <Phone className="h-5 w-5 mr-2" />
                  Get Commercial Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
                >
                  Schedule Consultation
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
                <h2 className="text-3xl font-bold mb-6">Keep Your Business Running Smoothly</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Commercial plumbing issues can shut down your business and cost you money. Our commercial plumbing
                  team understands the urgency of business operations and provides fast, reliable solutions to keep your
                  facility running.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Minimal Downtime</h3>
                      <p className="text-muted-foreground">Fast service to keep your business operational</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Insured</h3>
                      <p className="text-muted-foreground">Fully Insured for commercial work with proper bonding</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Wrench className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Industrial Equipment</h3>
                      <p className="text-muted-foreground">Professional-grade tools for large-scale projects</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/commercial-plumbing-work-in-office-building.jpg"
                  alt="Commercial plumbing service in office building"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Commercial Services */}
            <div className="bg-muted/30 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">Commercial Services We Provide</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Office Buildings", description: "Complete plumbing systems for office complexes" },
                  { name: "Restaurants", description: "Kitchen plumbing, grease traps, and commercial fixtures" },
                  { name: "Retail Stores", description: "Customer restrooms and employee facility plumbing" },
                  { name: "Industrial Facilities", description: "Heavy-duty plumbing for manufacturing plants" },
                  { name: "Medical Facilities", description: "Specialized plumbing for healthcare environments" },
                  { name: "Schools & Universities", description: "Educational facility plumbing and maintenance" },
                  { name: "Hotels & Hospitality", description: "Guest room and common area plumbing systems" },
                  { name: "Apartment Complexes", description: "Multi-unit residential building plumbing" },
                  { name: "Warehouses", description: "Industrial plumbing for storage and distribution centers" },
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

            {/* Commercial Specialties */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-12">Commercial Plumbing Specialties</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Preventive Maintenance</h3>
                      <p className="text-muted-foreground">Regular maintenance programs to prevent costly breakdowns</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Emergency Response</h3>
                      <p className="text-muted-foreground"> emergency service for critical business needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Code Compliance</h3>
                      <p className="text-muted-foreground">Ensure all work meets local commercial building codes</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Large-Scale Projects</h3>
                      <p className="text-muted-foreground">Complete plumbing systems for new construction</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Retrofit & Upgrades</h3>
                      <p className="text-muted-foreground">Modernize existing systems for improved efficiency</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Water Conservation</h3>
                      <p className="text-muted-foreground">Eco-friendly solutions to reduce operating costs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Partner with Commercial Plumbing Experts</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Keep your business running with reliable commercial plumbing services. Contact us for a consultation.
            </p>
            <Button size="lg" className="cta-button">
              <Phone className="h-5 w-5 mr-2" />
              Commercial Hotline: (585) 507-8992
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
