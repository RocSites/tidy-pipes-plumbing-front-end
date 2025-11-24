import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Camera, Search, Shield, Clock, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Drain Camera Inspection Services | Tidy Pipes Plumbing",
  description:
    "High-resolution drain camera inspections to pinpoint clogs, root intrusion, pipe deterioration, and hidden leaks. Schedule a precise diagnosis with Tidy Pipes Plumbing.",
  openGraph: {
    title: "Drain Camera Inspection Services | Tidy Pipes Plumbing",
    description:
      "See inside your drains without demolition. Our camera inspections locate blockages, breaks, and roots quickly.",
    url: "https://tidypipesplumbing.com/services/drain-camera-inspection",
    images: ["/images/tidy-pipes-og-image.png"],
  },
  alternates: {
    canonical: "/services/drain-camera-inspection",
  },
}

export default function DrainCameraInspectionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section className="bg-accent text-accent-foreground py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/20 rounded-full">
                <Camera className="h-12 w-12 text-primary" />
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
              Drain Camera Inspection Services
            </h1>

            <p className="text-xl text-accent-foreground/80 max-w-3xl mx-auto mb-8">
              Find the real cause of slow drains, sewer odors, or repeated backups with high-definition video inspections.
              We inspect every inch of your drain lines without digging or guesswork.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5855078992">
                <Button size="lg" className="cta-button">
                  Schedule Inspection
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
        </section>

        <section className="section-padding mt-9">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Use a Drain Camera?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our inspection equipment delivers a live video feed so we can see cracks, blockages, and root
                  intrusion. You&apos;ll get clear answers, video documentation, and a repair plan with accurate pricing.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start">
                    <Search className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Pinpoint the Problem</h3>
                      <p className="text-muted-foreground">
                        Identify clogs, broken sections, bellies, or corrosion inside your drain or sewer line.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Avoid Unnecessary Digging</h3>
                      <p className="text-muted-foreground">
                        We confirm the exact location and depth of the issue so repairs stay targeted and affordable.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold mb-1">Fast Diagnosis</h3>
                      <p className="text-muted-foreground">
                        Real-time results mean you get answers during the visit, reducing downtime and repeated calls.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/drain_roots.jpg"
                  alt="Drain inspection using camera"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8">What We Look For</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  "Root intrusion from trees or shrubs",
                  "Collapsed or cracked sections",
                  "Grease, sludge, or scale buildup",
                  "Offset joints and misaligned piping",
                  "Standing water or sagging (bellies)",
                  "Broken cleanouts or hidden leaks",
                ].map((item) => (
                  <div key={item} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
