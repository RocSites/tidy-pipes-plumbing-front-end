import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Clock, Phone, CheckCircle, Shield, Wrench } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "24/7 Emergency Plumbing Repairs | Tidy Pipes Plumbing",
  description:
    "Emergency plumbing repairs available 24/7. Fast response for burst pipes, severe leaks, and urgent plumbing emergencies. Licensed plumbers with 30-minute response time. Call (555) 123-PIPE.",
  keywords: [
    "emergency plumber",
    "24/7 plumbing",
    "burst pipe repair",
    "emergency plumbing service",
    "urgent plumbing repairs",
    "plumbing emergency",
    "emergency plumber near me",
  ],
  openGraph: {
    title: "24/7 Emergency Plumbing Repairs | Tidy Pipes Plumbing",
    description:
      "Emergency plumbing repairs available 24/7. Fast response for burst pipes and urgent plumbing emergencies.",
    url: "https://tidypipesplumbing.com/services/emergency-repairs",
    images: ["/images/emergency-plumbing-og.jpg"],
  },
  alternates: {
    canonical: "/services/emergency-repairs",
  },
}

export default function EmergencyRepairsPage() {
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
                  <AlertTriangle className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
                24/7 Emergency Plumbing Repairs - Fast Response
              </h1>
              <p className="text-xl text-accent-foreground/80 text-pretty max-w-3xl mx-auto mb-8">
                When plumbing disasters strike, every minute counts. Our emergency repair team is available around the
                clock to handle burst pipes, severe leaks, and urgent plumbing emergencies with guaranteed 30-minute
                response time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="cta-button">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: (555) 123-PIPE
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
                >
                  Get Free Emergency Estimate
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
                <h2 className="text-3xl font-bold mb-6">
                  Emergency Plumbing Services - Fast Response When You Need It Most
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Plumbing emergencies don't wait for business hours. That's why Tidy Pipes Plumbing offers 24/7
                  emergency services with rapid response times to minimize water damage and get your plumbing system
                  back to normal quickly.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Guaranteed 30-Minute Response Time</h3>
                      <p className="text-muted-foreground">
                        We guarantee arrival within 30 minutes for all emergency plumbing calls in our service area
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Licensed & Fully Insured Emergency Plumbers</h3>
                      <p className="text-muted-foreground">
                        All our emergency technicians are fully licensed, bonded, and insured for your protection
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Wrench className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Fully Equipped Emergency Vehicles</h3>
                      <p className="text-muted-foreground">
                        Our emergency vehicles carry all necessary tools and parts for immediate plumbing repairs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/emergency-plumber-working-on-burst-pipe.jpg"
                  alt="Licensed emergency plumber repairing burst pipe with professional tools"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Emergency Services List */}
            <div className="bg-muted/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8">Emergency Plumbing Services We Handle 24/7</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Burst Pipe Emergency Repair",
                  "Severe Water Leak Detection",
                  "Blocked Drain Clearing",
                  "Toilet Overflow Cleanup",
                  "Water Heater Emergency Service",
                  "Sewer Backup Emergency",
                  "Frozen Pipe Thawing",
                  "Gas Line Emergency Repair",
                  "Flood Prevention Services",
                ].map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Don't Wait - Call Our Emergency Plumbers Now!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Emergency plumbing problems get worse by the minute. Contact Tidy Pipes Plumbing immediately for fast,
              professional emergency plumbing service with guaranteed response time.
            </p>
            <Button size="lg" className="cta-button">
              <Phone className="h-5 w-5 mr-2" />
              Emergency Hotline: (555) 123-PIPE
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
