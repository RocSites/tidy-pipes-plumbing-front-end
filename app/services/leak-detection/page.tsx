import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Droplets, Search, Shield, CheckCircle, Phone, AlertTriangle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Leak Detection Services | Advanced Technology | Tidy Pipes Plumbing",
  description:
    "Advanced leak detection services using thermal imaging, acoustic detection, and video inspection. Find hidden leaks before they cause damage. Licensed plumbers with non-invasive technology. Call (585) 507-8992.",
  keywords: [
    "leak detection",
    "water leak detection",
    "hidden leak detection",
    "pipe leak detection",
    "thermal imaging leak detection",
    "acoustic leak detection",
    "professional leak detection",
    "leak detection near me",
  ],
  openGraph: {
    title: "Professional Leak Detection Services | Tidy Pipes Plumbing",
    description:
      "Advanced leak detection technology finds hidden leaks before they cause damage. Non-invasive methods protect your property.",
    url: "https://tidypipesplumbing.com/services/leak-detection",
    images: ["/images/leak-detection-og.jpg"],
  },
  alternates: {
    canonical: "/services/leak-detection",
  },
}

export default function LeakDetectionPage() {
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
                  <Droplets className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
                Advanced Leak Detection & Repair Services
              </h1>
              <p className="text-xl text-accent-foreground/80 text-pretty max-w-3xl mx-auto mb-8">
                Don't let hidden water leaks damage your property. Our advanced leak detection technology finds and
                fixes leaks before they become costly disasters, using non-invasive methods that protect your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="cta-button">
                  <Phone className="h-5 w-5 mr-2" />
                  Schedule Leak Inspection
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
                >
                  Get Free Estimate
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
                  Professional Leak Detection - Find Hidden Leaks Before They Cause Damage
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Water leaks can hide behind walls, under floors, and in other hard-to-reach places, causing extensive
                  property damage before you even notice them. Our advanced leak detection equipment can locate leaks
                  without destructive digging or wall removal, saving you time and money.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Search className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Non-Invasive Leak Detection Technology</h3>
                      <p className="text-muted-foreground">
                        Advanced technology finds leaks without damaging your property or landscaping
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Prevent Costly Water Damage</h3>
                      <p className="text-muted-foreground">
                        Early leak detection saves thousands in potential water damage repair costs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Accurate Leak Location Services</h3>
                      <p className="text-muted-foreground">
                        Pinpoint exact leak locations for targeted, efficient repairs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/professional-plumber-using-leak-detection-equipmen.jpg"
                  alt="Professional plumber using advanced leak detection equipment to find hidden water leaks"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Detection Methods */}
            <div className="bg-muted/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8">Advanced Leak Detection Methods & Technology</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Acoustic Leak Detection</h3>
                      <p className="text-muted-foreground">
                        Listen for the sound of water escaping from pipes using sensitive acoustic equipment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Thermal Imaging Leak Detection</h3>
                      <p className="text-muted-foreground">
                        Detect temperature changes caused by water leaks using infrared cameras
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Electronic Moisture Detection</h3>
                      <p className="text-muted-foreground">
                        Measure moisture levels in walls and floors with precision instruments
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Video Pipe Inspection</h3>
                      <p className="text-muted-foreground">Camera inspection of pipes to locate damage and blockages</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Pressure Testing Services</h3>
                      <p className="text-muted-foreground">
                        Test water pressure to identify leak locations in your plumbing system
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Electronic Leak Detection</h3>
                      <p className="text-muted-foreground">
                        Advanced sensors detect water presence behind walls and under floors
                      </p>
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
            <h2 className="text-3xl font-bold mb-4">Protect Your Property with Professional Leak Detection</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't wait for visible water damage. Schedule a professional leak detection inspection today and save
              thousands in potential repair costs.
            </p>
            <Button size="lg" className="cta-button">
              <Phone className="h-5 w-5 mr-2" />
              Schedule Inspection: (585) 507-8992
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
