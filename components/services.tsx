import { Lightbulb, Home, Building2, Zap, Settings, AlertCircle } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Electrical",
      description: "Home rewiring, installations, repairs, and maintenance for safety and efficiency.",
    },
    {
      icon: Building2,
      title: "Commercial Electrical",
      description: "Office and retail electrical systems, upgrades, and troubleshooting.",
    },
    {
      icon: Zap,
      title: "Industrial Solutions",
      description: "High-power systems, machine wiring, and industrial maintenance.",
    },
    {
      icon: Lightbulb,
      title: "Energy Efficient Upgrades",
      description: "LED conversions, solar installations, and smart home automation.",
    },
    {
      icon: AlertCircle,
      title: "Emergency Repairs",
      description: "24/7 emergency electrical services for urgent issues.",
    },
    {
      icon: Settings,
      title: "Maintenance & Inspection",
      description: "Regular maintenance and safety inspections for your peace of mind.",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block text-primary font-bold text-sm tracking-widest mb-3">OUR SERVICES</div>
          <h2 className="text-3xl md:text-4xl font-bold text-black text-pretty">Comprehensive Electrical Solutions</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From residential maintenance to industrial installations, we handle all your electrical needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
