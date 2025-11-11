import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block text-primary font-bold text-sm tracking-widest">ABOUT US</div>

            <h2 className="text-3xl md:text-4xl font-bold text-black text-pretty">
              Your Trusted Electrical Partner in Cape Town
            </h2>

            <p className="text-gray-600 leading-relaxed">
              SP Electrical Services was founded with a simple mission: to provide Cape Town with reliable, professional
              electrical services. We've grown from a small team to one of the most trusted electrical contractors in
              the region.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our team of licensed electricians brings expertise across residential, commercial, and industrial
              projects. We're committed to safety, quality, and customer satisfaction in every job we undertake.
            </p>

            <ul className="space-y-3">
              {[
                "Licensed & Certified Electricians",
                "Insurance & Warranty Coverage",
                "Emergency 24/7 Service Available",
                "Eco-Friendly Solutions",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-lg">
            <Image
              src="/solarinstall.jpg"
              alt="SP Electrical Services technicians installing rooftop solar panels"
              width={1280}
              height={662}
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 540px, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
