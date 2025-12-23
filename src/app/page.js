import React from 'react'

export default function page() {
  return (
    <>
    <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-24">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
    
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Delicious Food Delivered To You
      </h1>
      <p className="text-lg mb-6">
        Fresh ingredients, expert chefs, and fast delivery at your doorstep.
      </p>
      <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
        Order Now
      </button>
    </div>

    <img
      src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
      alt="Food"
      className="rounded-2xl shadow-lg"
    />
  </div>
</section>

{/*  */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">
      Our Popular Dishes
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      
      {[{
        name:"Burger",
        img:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8fDB8fHww"
      },{
        name:"Pizza",
        img:"https://images.unsplash.com/photo-1613564834361-9436948817d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8fDA%3D"
      },{
        name:"Pizza",
        img:"https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzdGF8ZW58MHx8MHx8fDA%3D"
      }].map((item, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <img 
            src={item.img}
            className="rounded-lg mb-4 h-72 w-72"
            alt={item}
          />
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <p className="text-gray-600 text-sm mt-2">
            Freshly prepared with premium ingredients.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/*  */}
<section className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">
      Why Choose Foodie
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        "Fresh Ingredients",
        "Expert Chefs",
        "Fast Delivery",
        "Best Quality"
      ].map((title, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">
            We ensure the best service and taste for our customers.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-12">
      How It Works
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {["Choose Food", "Place Order", "Enjoy Meal"].map((step, index) => (
        <div key={index} className="p-6 rounded-xl shadow bg-gray-50">
          <div className="text-3xl mb-4">🍽️</div>
          <h3 className="text-lg font-semibold">{step}</h3>
          <p className="text-sm text-gray-600 mt-2">
            Simple and quick ordering process.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/*  */}
<section className="bg-red-600 text-white py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-4">
      Ready To Order Delicious Food?
    </h2>
    <p className="mb-6">
      Experience amazing taste and fast delivery today.
    </p>
    <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
      View Menu
    </button>
  </div>
</section>


</>

  )
}
