import Product from "@/product";

export default function MenuPage() {
  

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Menu
          </h1>
          <p className="text-lg">
            Explore our delicious range of freshly prepared meals
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex gap-4 flex-wrap justify-center">
          {["All", "Burger", "Pizza", "Pasta", "Snacks", "Drinks"].map(
            (cat, i) => (
              <button
                key={i}
                className="px-6 py-2 rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition"
              >
                {cat}
              </button>
            )
          )}
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <Product/>
          </div>
        </div>
      </section>

    </main>
  );
}
