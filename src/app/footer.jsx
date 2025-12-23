import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            🍔 Foodie
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Serving fresh and delicious food made with love.  
            Order online and enjoy at home.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Menu
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-red-500">Home</Link></li>
            <li><Link href="/menu" className="hover:text-red-500">Our Menu</Link></li>
            <li><Link href="/offers" className="hover:text-red-500">Offers</Link></li>
            <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-red-500">FAQs</Link></li>
            <li><Link href="#" className="hover:text-red-500">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-red-500">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>
          <p className="text-sm text-gray-400">📍 Mumbai, India</p>
          <p className="text-sm text-gray-400 mt-2">📞 +91 98765 43210</p>
          <p className="text-sm text-gray-400 mt-2">✉️ hello@foodie.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Foodie. All rights reserved.
      </div>
    </footer>
  );
}
