import { CheckCircle2 } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Licensed & Certified",
      description: "All our electricians are fully licensed and certified by the relevant authorities.",
    },
    {
      title: "Guaranteed Quality",
      description: "Every job comes with warranty coverage and quality assurance.",
    },
    {
      title: "Fast Response Time",
      description: "Emergency services available 24/7 with rapid response times.",
    },
    {
      title: "Competitive Pricing",
      description: "Transparent, upfront pricing with no hidden charges.",
    },
    {
      title: "Safety First",
      description: "Strict adherence to safety standards and building regulations.",
    },
    {
      title: "Local Expertise",
      description: "Deep knowledge of Cape Town's electrical infrastructure and requirements.",
    },
  ]

  return (
    <section id="why-us" className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block text-primary font-bold text-sm tracking-widest mb-3">WHY CHOOSE US</div>
          <h2 className="text-3xl md:text-4xl font-bold text-pretty">What Sets Us Apart</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
