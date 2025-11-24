import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Wrench, Home, Building, CheckCircle, Phone, Shield } from "lucide-react"

export default function PipeInstallationPage() {
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
                  <Wrench className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
                Professional Pipe Installation & Replacement
              </h1>
              <p className="text-xl text-accent-foreground/80 text-pretty max-w-3xl mx-auto mb-8">
                Complete pipe installation and replacement services for residential properties. Quality
                materials, expert installation, and lasting results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="cta-button">
                  <Phone className="h-5 w-5 mr-2" />
                  Get Free Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
                >
                  View Our Work
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
                <h2 className="text-3xl font-bold mb-6">Expert Pipe Installation Services</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Whether you're building new, renovating, or replacing old pipes, our experienced team provides
                  professional installation services using the highest quality materials and industry best practices.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Home className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Residential Installation</h3>
                      <p className="text-muted-foreground">Complete home plumbing systems and renovations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Quality Materials</h3>
                      <p className="text-muted-foreground">Only the best pipes and fittings for long-lasting results</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-9">
                <img
                  src="/pipes_2.jpg"
                  alt="Professional pipe installation in progress"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Pipe Types */}
            <div className="bg-muted/30 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">Pipe Materials We Install</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Copper Pipes", description: "Durable and corrosion-resistant for long-term reliability" },
                  { name: "PEX Piping", description: "Flexible and cost-effective for modern installations" },
                  { name: "PVC Pipes", description: "Ideal for drainage and waste water systems" },
                  { name: "Cast Iron", description: "Heavy-duty pipes for industrial use" },
                  { name: "Galvanized Steel", description: "Strong and durable for high-pressure applications" },
                  { name: "CPVC Pipes", description: "Chemical-resistant for specialized applications" },
                ].map((pipe, index) => (
                  <div key={index} className="bg-background rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-semibold">{pipe.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{pipe.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Installation Process */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-12">Our Installation Process</h2>
              <div className="grid md:grid-cols-4 gap-8 mb-9">
                {[
                  { step: "1", title: "Assessment", description: "Thorough evaluation of your plumbing needs" },
                  { step: "2", title: "Planning", description: "Detailed installation plan and material selection" },
                  { step: "3", title: "Installation", description: "Professional installation by certified plumbers" },
                  { step: "4", title: "Testing", description: "Complete system testing and quality assurance" },
                ].map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="font-semibold mb-2">{process.title}</h3>
                    <p className="text-muted-foreground text-sm">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 section-padding pb-6 pt-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free consultation and quote for your pipe installation or replacement project.
            </p>
            <Button size="lg" className="cta-button">
              <Phone className="h-5 w-5 mr-2" />
              Call for Free Quote: (585) 507-8992
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
