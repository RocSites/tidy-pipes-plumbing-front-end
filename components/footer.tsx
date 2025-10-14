import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">Tidy Pipes Plumbing</div>
            <p className="text-accent-foreground/80 mb-4">
              Professional plumbing services you can trust. Licensed, insured, and committed to quality.
            </p>
            <div className="flex items-center text-sm">
              <a className="flex" href="tel: 5855078992">
                <Phone className="h-4 w-4 mr-2" />
                <span>(585) 507-8992</span>
              </a>

            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-accent-foreground/80">
              {/* <li>Emergency Repairs</li> */}
              <li>Leak Detection</li>
              <li>Pipe Installation</li>
              <li>Water Heater Service</li>
              <li>Residential Plumbing</li>
              <li>Commercial Plumbing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-accent-foreground/80">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@tidypipesplumbing.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Greater Rochester Area</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-sm text-accent-foreground/60">
          <p>&copy; 2025 Tidy Pipes Plumbing. All rights reserved. Licensed & Insured.</p>
        </div>
      </div>
    </footer>
  )
}
