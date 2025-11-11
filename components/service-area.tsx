import { MapPin } from "lucide-react"

export default function ServiceArea() {
  const areas = [
    "Central Cape Town",
    "Northern Suburbs",
    "Southern Suburbs",
    "Eastern Suburbs",
    "Atlantic Seaboard",
    "Constantia",
    "Observatory",
    "Rondebosch",
    "Newlands",
    "Camps Bay",
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block text-primary font-bold text-sm tracking-widest mb-3">SERVICE AREA</div>
          <h2 className="text-3xl md:text-4xl font-bold text-black text-pretty">We Serve Cape Town</h2>
          <p className="mt-4 text-gray-600">Currently serving all major areas of Cape Town</p>
        </div>

        <div className="bg-white rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-3 p-4 hover:bg-gray-50 rounded transition-colors">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
