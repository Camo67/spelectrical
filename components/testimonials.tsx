import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      location: "Constantia, Cape Town",
      rating: 5,
      text: "SP Electrical were amazing! They rewired our entire house professionally and on budget. Highly recommended.",
    },
    {
      name: "Sarah Johnson",
      location: "Camps Bay, Cape Town",
      rating: 5,
      text: "Had an emergency electrical issue at midnight. They responded within 30 minutes and fixed it perfectly!",
    },
    {
      name: "Michael Chen",
      location: "Business Owner, CBD",
      rating: 5,
      text: "Professional team, excellent communication, and great pricing. We use them for all our office electrical needs.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block text-primary font-bold text-sm tracking-widest mb-3">TESTIMONIALS</div>
          <h2 className="text-3xl md:text-4xl font-bold text-black text-pretty">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-black">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
