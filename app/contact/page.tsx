import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageSquare, Users, Award } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Tidy Pipes Plumbing | 24/7 Emergency Service | (555) 123-PIPE",
  description:
    "Contact Tidy Pipes Plumbing for reliable plumbing services. Available 24/7 for emergencies. Call (555) 123-PIPE or visit our office. Free estimates and fast response times.",
  keywords:
    "contact plumber, emergency plumbing service, plumbing company near me, 24/7 plumber, plumbing estimates, local plumber contact",
  openGraph: {
    title: "Contact Tidy Pipes Plumbing | 24/7 Emergency Service",
    description:
      "Get in touch with Tidy Pipes Plumbing for all your plumbing needs. Emergency service available 24/7. Call now for fast, reliable service.",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-accent text-accent-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-4">Contact Tidy Pipes Plumbing</h1>
          <p className="text-xl text-accent-foreground/80 text-pretty max-w-2xl mx-auto">
            Ready to solve your plumbing problems? We're here to help 24/7 with fast, reliable service.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="service-card text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us Now</h3>
              <p className="text-2xl font-bold text-primary mb-2">(555) 123-PIPE</p>
              <p className="text-muted-foreground">24/7 Emergency Service</p>
              <p className="text-sm text-muted-foreground mt-2">Average response time: 30 minutes</p>
            </div>

            {/* Email */}
            <div className="service-card text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-lg font-semibold text-primary mb-2">info@tidypipesplumbing.com</p>
              <p className="text-muted-foreground">We respond within 2 hours</p>
              <p className="text-sm text-muted-foreground mt-2">Monday - Friday during business hours</p>
            </div>

            {/* Location */}
            <div className="service-card text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Service Area</h3>
              <p className="text-lg font-semibold text-primary mb-2">Greater Metro Area</p>
              <p className="text-muted-foreground">Within 50 miles of downtown</p>
              <p className="text-sm text-muted-foreground mt-2">Free estimates in our service area</p>
            </div>
          </div>

          {/* Business Hours & Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Business Hours & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Business Hours & Information</h2>

              <div className="service-card mb-8">
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Operating Hours</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>
                        <strong>Monday - Friday:</strong> 7:00 AM - 6:00 PM
                      </p>
                      <p>
                        <strong>Saturday:</strong> 8:00 AM - 4:00 PM
                      </p>
                      <p>
                        <strong>Sunday:</strong> Emergency calls only
                      </p>
                      <p className="text-primary font-semibold mt-3">Emergency service available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="service-card">
                  <div className="flex items-center mb-3">
                    <MessageSquare className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-semibold">Free Estimates</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get a detailed quote for your plumbing project at no cost.
                  </p>
                </div>

                <div className="service-card">
                  <div className="flex items-center mb-3">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-semibold">Licensed & Insured</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fully licensed plumbers with comprehensive insurance coverage.
                  </p>
                </div>

                <div className="service-card">
                  <div className="flex items-center mb-3">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-semibold">Satisfaction Guaranteed</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    100% satisfaction guarantee on all our plumbing services.
                  </p>
                </div>

                <div className="service-card">
                  <div className="flex items-center mb-3">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-semibold">Same-Day Service</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Most repairs completed the same day you call.</p>
                </div>
              </div>
            </div>

            {/* General Contact Form */}
            <div className="service-card">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please tell us about your plumbing needs or ask any questions..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="cta-button w-full">
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Required fields. We'll respond within 2 hours during business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
