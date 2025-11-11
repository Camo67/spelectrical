export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-800">
          <div>
            <div className="text-xl font-bold text-white mb-3">
              SP <span className="text-primary">Electrical</span>
            </div>
            <p className="text-sm">Professional electrical services serving Cape Town since 2009.</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Residential
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Commercial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Industrial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Emergency
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>Phone: 076 672 9270</li>
              <li>Email: info@spelectrical.co.za</li>
              <li>Available: 24/7 for emergencies</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm">
          <p>&copy; 2025 SP Electrical Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
