import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Ready to solve your plumbing problems? Contact us today for fast, reliable service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">(555) 123-PIPE</p>
                  <p className="text-sm text-muted-foreground">24/7 Emergency Line</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">info@tidypipesplumbing.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Service Area</h4>
                  <p className="text-muted-foreground">Greater Rochester Area</p>
                  <p className="text-sm text-muted-foreground">Within 50 miles of downtown</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">Mon-Fri: 7:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Sat: 8:00 AM - 4:00 PM</p>
                  <p className="text-sm text-muted-foreground">Emergency service available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="service-card">
            <h3 className="text-2xl font-semibold mb-6">Request a Quote</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service Needed
                </label>
                <select id="service" className="w-full px-3 py-2 border border-input rounded-md bg-background">
                  <option>Select a service</option>
                  <option>Emergency Repair</option>
                  <option>Leak Detection</option>
                  <option>Pipe Installation</option>
                  <option>Water Heater Service</option>
                  <option>General Plumbing</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Please describe your plumbing issue or service needs..." rows={4} />
              </div>

              <Button type="submit" className="cta-button w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
