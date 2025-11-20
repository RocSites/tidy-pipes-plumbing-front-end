import { Award, Users, Clock, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Insured",
    description: "Fully insured plumbers with ongoing training and certifications",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Over 22 years of combined experience in residential plumbing",
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description: "On-time service with upfront pricing and no hidden fees",
  },
  {
    icon: CheckCircle,
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee on all our work and services",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Why Choose Tidy Pipes Plumbing?</h2>
            <p className="text-lg text-muted-foreground text-pretty mb-8 leading-relaxed">
              We're not just another plumbing company. We're your neighbors, committed to providing honest, reliable
              service that you can count on. Our team of experienced professionals takes pride in delivering quality
              workmanship and exceptional customer service.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-secondary/10 rounded-2xl overflow-hidden">
              <img
                src="/professional-plumbing-team-at-work.jpg"
                alt="Tidy Pipes Plumbing team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
