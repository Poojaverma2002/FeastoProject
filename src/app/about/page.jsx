export default function AboutPage() {
  return (
    
    <main className="bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Foodie
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Serving happiness on every plate with fresh ingredients and love.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Foodie started with a simple idea — to bring fresh, tasty,
            and affordable food to everyone. We believe good food
            brings people together and creates unforgettable moments.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From handpicked ingredients to expert chefs, every dish
            is crafted with care and passion. Whether dining in or
            ordering online, we promise quality in every bite.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
            alt="Food preparation"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600 text-sm">
                Only the best quality and farm-fresh ingredients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
              <p className="text-gray-600 text-sm">
                Cooked by passionate chefs with years of experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Hot and fresh food delivered right to your door.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Best Taste</h3>
              <p className="text-gray-600 text-sm">
                Delicious flavors that keep you coming back.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Taste the Difference Today
          </h2>
          <p className="text-gray-600 mb-6">
            Discover meals crafted with passion and delivered with care.
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition">
            Explore Menu
          </button>
        </div>
      </section>

    </main>
  );
}
