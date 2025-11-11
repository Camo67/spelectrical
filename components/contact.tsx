"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block text-primary font-bold text-sm tracking-widest mb-3">GET IN TOUCH</div>
          <h2 className="text-3xl md:text-4xl font-bold text-pretty">Ready to Get Started?</h2>
          <p className="mt-4 text-gray-300">Contact us today for a free quote</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex gap-4">
            <Phone className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-gray-300">076 672 9270</p>
              <p className="text-gray-300">24/7 Emergency Line</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Mail className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-300">info@spelectrical.co.za</p>
              <p className="text-gray-300">shafiek@spelectrical.co.za</p>
            </div>
          </div>

          <div className="flex gap-4">
            <MessageCircle className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/27666729270"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                +27 66 729 270
              </a>
              <p className="text-gray-300">Quick messaging</p>
            </div>
          </div>

          <div className="flex gap-4">
            <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-gray-300">Cape Town, Western Cape</p>
              <p className="text-gray-300">South Africa</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-900 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:border-primary focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:border-primary focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:border-primary focus:outline-none"
              placeholder="(021) 555-0000"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:border-primary focus:outline-none resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-green-700 text-black font-bold text-lg py-3">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}
