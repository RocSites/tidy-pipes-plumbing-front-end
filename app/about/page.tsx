import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, Shield, Star, Users, CheckCircle, Phone, MapPin, ThumbsUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Tidy Pipes Plumbing | Trusted Local Plumber | Honest, Reliable Service",
  description:
    "Learn why homeowners across Webster, Penfield, Fairport, and Rochester trust Tidy Pipes Plumbing for clean, honest, and reliable plumbing service. Locally owned, fully insured, and committed to treating your home with care.",
  keywords: [
    "about tidy pipes plumbing",
    "local plumber",
    "Webster NY plumber",
    "Penfield NY plumber",
    "Fairport NY plumber",
    "Rochester NY plumber",
    "trusted plumbing company",
    "plumber near me",
  ],
  openGraph: {
    title: "About Tidy Pipes Plumbing | Trusted Local Plumber",
    description:
      "Proudly serving Webster, Penfield, Fairport, and Rochester with reliable plumbing service and honest pricing.",
    url: "https://tidypipesplumbing.com/about",
    images: ["/images/tidy-pipes-og-image.png"],
  },
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>

        {/* HERO */}
        <section className="bg-accent text-accent-foreground py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              About Tidy Pipes Plumbing
            </h1>
            <p className="text-xl text-accent-foreground/80 max-w-3xl mx-auto text-pretty">
              Tidy Pipes Plumbing is a trusted local plumbing company serving Webster, Penfield,
              Fairport, and the greater Rochester area — known for clean workmanship, honest pricing,
              and dependable service you can count on.
            </p>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6">A Local Plumber You Can Trust</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Tidy Pipes Plumbing was built on a simple promise: plumbing work should be done
                  right, done cleanly, and done with respect for your home. What started as a locally
                  owned neighborhood service quickly became one of the most recommended plumbers in
                  Webster, Penfield, and Fairport — thanks to real customer referrals and word-of-mouth
                  in community Facebook groups.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  When you call Tidy Pipes, you get professional service, clear communication, and
                  no sales pressure. Just honest work from a plumber who treats your home like his own.
                </p>
                <p className="text-lg text-muted-foreground">
                  From leak repair to drains, toilets, fixtures, valves, and general troubleshooting,
                  Tidy Pipes delivers quality results backed by years of experience and a reputation
                  for doing the job right the first time.
                </p>
              </div>

              <div className="relative mt-6">
                <img
                  src="/drain_roots.jpg"
                  alt="Local plumber servicing a residential plumbing system"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* CORE VALUES */}
            <div className="bg-muted/30 rounded-2xl p-10 mb-20">
              <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Integrity */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Integrity</h3>
                  <p className="text-sm text-muted-foreground">
                    Honest pricing, clear communication, and no upselling — ever.
                  </p>
                </div>

                {/* Reliability */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Reliability</h3>
                  <p className="text-sm text-muted-foreground">
                    Showing up when you need us, with consistent, dependable service.
                  </p>
                </div>

                {/* Workmanship */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Quality Workmanship</h3>
                  <p className="text-sm text-muted-foreground">
                    Clean, professional plumbing done right the first time.
                  </p>
                </div>

                {/* Community */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">
                    A local business serving neighbors with pride and care.
                  </p>
                </div>

              </div>
            </div>

            {/* WHY CHOOSE US */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Why Homeowners Choose Tidy Pipes</h2>

              <div className="grid md:grid-cols-2 gap-10">

                <div className="space-y-8">

                  {/* Clean Work */}
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-2">Respectful, Clean Work</h3>
                      <p className="text-muted-foreground">
                        We treat your home with care, keep work areas tidy, and clean up thoroughly after every job.
                      </p>
                    </div>
                  </div>

                  {/* Honest Pricing */}
                  <div className="flex items-start">
                    <ThumbsUp className="h-6 w-6 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-2">Honest, Upfront Pricing</h3>
                      <p className="text-muted-foreground">
                        No hidden fees, no surprises — just clear, straightforward pricing you can trust.
                      </p>
                    </div>
                  </div>

                </div>

                <div className="space-y-8">

                  {/* Trusted Local Reputation */}
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-2">Trusted Locally</h3>
                      <p className="text-muted-foreground">
                        Highly recommended in neighborhood Facebook groups and local communities — most customers come from referrals.
                      </p>
                    </div>
                  </div>

                  {/* Fast Response */}
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-2">Fast Response When You Need It</h3>
                      <p className="text-muted-foreground">
                        We prioritize urgent issues and offer quick scheduling so your problem doesn’t wait.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* SERVICE AREAS */}
            <div className="bg-primary/10 rounded-2xl p-10">
              <h2 className="text-3xl font-bold text-center mb-8">Proudly Serving</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                {[
                  "Webster",
                  "Penfield",
                  "Fairport",
                  "Rochester",
                  "Ontario",
                  "Irondequoit",
                  "East Rochester",
                  "Pittsford",
                  "Brighton",
                  "Macedon",
                  "Walworth",
                  "Perinton",
                ].map((area) => (
                  <div key={area} className="bg-background rounded-lg p-4">
                    <div className="flex items-center justify-center gap-2 text-primary font-medium">
                      <MapPin className="h-4 w-4" /> {area}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent text-accent-foreground section-padding pt-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 mt">Experience the Tidy Pipes Difference</h2>
            <p className="text-lg text-accent-foreground/80 mb-8">
              Clean work. Honest pricing. Friendly service. Trusted by your neighbors.
            </p>
            <a href="tel:5855078992">
              <Button size="lg" className="cta-button">
                <Phone className="h-5 w-5 mr-2" />
                Call Today: (585) 507-8992
              </Button>
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
