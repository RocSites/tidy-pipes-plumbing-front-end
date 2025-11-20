import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Droplets, Wrench, Shield, CheckCircle, Phone, AlertTriangle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Leak Repair Services | Fast & Reliable | Tidy Pipes Plumbing",
  description:
    "Reliable leak repair for faucets, pipes, drains, fixtures, and water lines. Fast service, honest assessment, and fully insured plumbers serving the local area. Call (585) 507-8992.",
  keywords: [
    "leak repair",
    "water leak repair",
    "pipe leak repair",
    "faucet leak repair",
    "toilet leak repair",
    "plumbing leak repair",
    "emergency leak repair",
    "leak repair near me",
  ],
  openGraph: {
    title: "Professional Leak Repair Services | Tidy Pipes Plumbing",
    description:
      "Fast, reliable leak repair for pipes, fixtures, drains, and water lines. Stop water damage before it spreads.",
    url: "https://tidypipesplumbing.com/services/leak-repair",
    images: ["/images/tidy-pipes-og-image.png"],
  },
  alternates: {
    canonical: "/services/leak-repair",
  },
}

export default function LeakRepairPage() {
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
                Fast & Reliable Leak Repair Services
              </h1>

              <p className="text-xl text-accent-foreground/80 text-pretty max-w-3xl mx-auto mb-8">
                Whether it’s a dripping faucet, a leaking pipe joint, a running toilet, or a water line issue —
                Tidy Pipes Plumbing provides fast, honest, and affordable leak repair to protect your home from costly water damage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:5855078992">
                  <Button size="lg" className="cta-button">
                    <Phone className="h-5 w-5 mr-2" />
                    Call for Leak Repair
                  </Button>
                </a>

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
        <section className="section-padding mt-6">
          <div className="max-w-7xl mx-auto">

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Professional Leak Repair for Your Home
                </h2>

                <p className="text-lg text-muted-foreground mb-6">
                  Leaks can come from loose fittings, worn-out seals, cracked pipes, failing fixtures,
                  or aging plumbing components. Even small drips can cause mold, rot, and structural damage
                  if left unfixed. Our licensed plumbers quickly identify the source of the leak and provide
                  the right repair — without upselling or unnecessary work.
                </p>

                <div className="space-y-4">

                  <div className="flex items-start">
                    <Wrench className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Repairs for All Types of Leaks</h3>
                      <p className="text-muted-foreground">
                        Faucets, toilets, shutoff valves, drains, water lines, copper pipes, PEX, fittings, and more
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Stop Water Damage Before It Spreads</h3>
                      <p className="text-muted-foreground">
                        Prevent mold, floor damage, drywall rot, and structural deterioration
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Emergency Leak Response</h3>
                      <p className="text-muted-foreground">
                        Quick shutoff, stabilization, and repair when you need service fast
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="relative">
                <img
                  src="/professional-plumber-fixing-leak.jpg"
                  alt="Professional plumber repairing a leaking pipe"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

            </div>

            {/* Common Leak Types */}
            <div className="bg-muted/30 rounded-2xl p-8">

              <h2 className="text-3xl font-bold text-center mb-8">Common Leak Issues We Repair</h2>

              <div className="grid md:grid-cols-2 gap-8">

                <div className="space-y-6">

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Faucet & Fixture Leaks</h3>
                      <p className="text-muted-foreground">
                        Drips, worn cartridges, failing O-rings, or damaged seals repaired quickly
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Toilet Leaks</h3>
                      <p className="text-muted-foreground">
                        Running toilets, leaking bases, wax ring failures, and valve issues
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Pipe Joint & Fitting Leaks</h3>
                      <p className="text-muted-foreground">
                        Leaks caused by loose connections, corrosion, or aging pipe materials
                      </p>
                    </div>
                  </div>

                </div>

                <div className="space-y-6">

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Drain & Trap Leaks</h3>
                      <p className="text-muted-foreground">
                        Under-sink leaks, cracked traps, or misaligned drain assemblies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Water Line & Valve Leaks</h3>
                      <p className="text-muted-foreground">
                        Main shutoff valves, supply lines, and aging water lines repaired or replaced
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-2">Basement & Utility Area Leaks</h3>
                      <p className="text-muted-foreground">
                        Leaks around heaters, softeners, sump pumps, and floor drains
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 section-padding mb-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Leak Repaired?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Even small leaks can cause major damage if left unaddressed. Get fast, reliable leak repair today.
            </p>
            <a href="tel:5855078992">
              <Button size="lg" className="cta-button">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: (585) 507-8992
              </Button>
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
