"use client";

export default function ContactPage() {
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg">
            We’d love to hear from you. Get in touch with us today!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions, feedback, or want to place a bulk order?
            Fill out the form or reach us using the details below.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>📍 <span className="font-medium">Address:</span> New Delhi, India</p>
            <p>📞 <span className="font-medium">Phone:</span> +91 98765 43210</p>
            <p>✉️ <span className="font-medium">Email:</span> support@foodie.com</p>
            <p>⏰ <span className="font-medium">Hours:</span> 9 AM – 11 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-50 p-8 rounded-2xl shadow">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Send Us a Message
          </h3>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>

      </section>
    </main>
  );
}
