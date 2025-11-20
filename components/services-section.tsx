import { Wrench, Droplets, Thermometer, AlertTriangle, Home, Building } from "lucide-react"

const services = [
  {
    icon: AlertTriangle,
    title: "Emergency Repairs",
    description: " emergency plumbing services for burst pipes, severe leaks, and urgent repairs.",
  },
  {
    icon: Droplets,
    title: "Leak Repair",
    description: "Our licensed plumbers quickly identify the source of the leak and provide the right repair",
  },
  {
    icon: Wrench,
    title: "Pipe Installation",
    description: "Complete pipe installation and replacement services for residential properties.",
  },
  {
    icon: Thermometer,
    title: "Water Heater Service",
    description: "Water heater installation, repair, and maintenance for all types and brands.",
  },
  {
    icon: Home,
    title: "Residential Plumbing",
    description: "Complete residential plumbing services including bathrooms, kitchens, and whole-home systems.",
  },

]

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-muted/30 mt-[2em]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance m-4">Complete Plumbing Solutions</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            From routine maintenance to emergency repairs, we provide comprehensive plumbing services to keep your
            property running smoothly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
