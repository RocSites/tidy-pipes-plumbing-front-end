import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, CheckCircle, Phone, Shield, Heart, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Tidy Pipes Plumbing | Licensed Local Plumbers | 15+ Years Experience",
  description:
    "Learn about Tidy Pipes Plumbing - your trusted local plumbing experts since 2008. Licensed, insured, and committed to honest, reliable service. 5000+ happy customers,  emergency service.",
  keywords: [
    "about tidy pipes plumbing",
    "local plumbers",
    "licensed plumbing company",
    "experienced plumbers",
    "trusted plumbing service",
    "plumbing company history",
    "professional plumbers",
    "reliable plumbing service",
  ],
  openGraph: {
    title: "About Tidy Pipes Plumbing | Licensed Local Plumbers",
    description:
      "Your trusted local plumbing experts since 2008. Licensed, insured, and committed to honest, reliable service.",
    url: "https://tidypipesplumbing.com/about",
    images: ["/images/about-tidy-pipes-og.jpg"],
  },
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-accent text-accent-foreground py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
                About Tidy Pipes Plumbing - Your Trusted Local Plumbing Experts
              </h1>
              <p className="text-xl text-accent-foreground/80 text-pretty max-w-3xl mx-auto mb-8">
                Your trusted local plumbing experts since 2008, committed to providing honest, reliable plumbing service
                that you can count on. We're not just plumbers - we're your neighbors, serving the community with
                integrity and excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story - Serving the Community Since 2008</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in 2008, Tidy Pipes Plumbing started as a small family business with a simple mission: provide
                  honest, reliable plumbing services to our local community. What began as a one-person operation has
                  grown into a trusted team of licensed, experienced plumbing professionals.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We've built our reputation on quality workmanship, fair pricing, and exceptional customer service.
                  Every plumbing job, big or small, receives the same attention to detail and commitment to excellence
                  that has made us the go-to plumbing company in the area for over 15 years.
                </p>
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">5000+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary"></div>
                    <div className="text-sm text-muted-foreground">Emergency Service</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/professional-plumbing-team-at-work.jpg"
                  alt="Tidy Pipes Plumbing professional team of licensed plumbers at work"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Our Values */}
            <div className="bg-muted/30 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">Our Core Values - What Makes Us Different</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Heart,
                    title: "Integrity",
                    description: "Honest pricing and transparent communication in every plumbing service interaction",
                  },
                  {
                    icon: Shield,
                    title: "Reliability",
                    description: "Dependable plumbing service you can count on, when you need it most",
                  },
                  {
                    icon: Star,
                    title: "Excellence",
                    description: "Quality plumbing workmanship that exceeds expectations every time",
                  },
                  {
                    icon: Users,
                    title: "Community",
                    description: "Supporting our neighbors and giving back to our local community",
                  },
                ].map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Tidy Pipes Plumbing? Licensed, Experienced, Trusted
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Award className="h-6 w-6 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-2">Licensed & Certified Plumbers</h3>
                      <p className="text-muted-foreground">
                        All our plumbers are fully licensed and certified, with ongoing training to stay current with
                        the latest plumbing techniques and technologies.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-2">Experienced Plumbing Team</h3>
                      <p className="text-muted-foreground">
                        Our team brings over 15 years of combined experience in residential and commercial plumbing,
                        handling everything from routine maintenance to complex installations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-2">Reliable Plumbing Service</h3>
                      <p className="text-muted-foreground">
                        We show up on time, every time. Our commitment to punctuality and reliability means you can
                        count on us to be there when we say we will.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-2">100% Satisfaction Guarantee</h3>
                      <p className="text-muted-foreground">
                        We stand behind our plumbing work with a 100% satisfaction guarantee. If you're not completely
                        satisfied, we'll make it right at no additional cost.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-2">Upfront Pricing - No Hidden Fees</h3>
                      <p className="text-muted-foreground">
                        No surprises or hidden fees. We provide clear, upfront pricing so you know exactly what you'll
                        pay before we start any plumbing work.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Heart className="h-6 w-6 text-primary mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-2">Local & Community Trusted</h3>
                      <p className="text-muted-foreground">
                        As a local plumbing business, we're invested in our community. We treat every customer like a
                        neighbor because that's exactly what you are.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-primary/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8">Service Areas</h2>
              <p className="text-center text-lg text-muted-foreground mb-8">
                We proudly serve the following areas with fast, reliable plumbing services:
              </p>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                {[
                  "Downtown",
                  "Riverside",
                  "Oak Hills",
                  "Maple Grove",
                  "Sunset District",
                  "Pine Valley",
                  "Cedar Heights",
                  "Willow Creek",
                  "Brookside",
                  "Hillcrest",
                  "Garden District",
                  "Lakewood",
                ].map((area, index) => (
                  <div key={index} className="bg-background rounded-lg p-4">
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent text-accent-foreground section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Tidy Pipes Difference?</h2>
            <p className="text-lg text-accent-foreground/80 mb-8">
              Join thousands of satisfied customers who trust us with their plumbing needs.
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
