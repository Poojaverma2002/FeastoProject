function Productcard({img, name, price, id}){
    return(
        <>
                                    <div key={id} className="max-w-sm mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

                                {/* Food Image */}
                                <img
                                    src={img}
                                    alt="Food Item"
                                    className="w-full h-56 object-cover"
                                />

                                {/* Content */}
                                <div className="p-5">
                                    <h2 className="text-xl font-bold text-gray-900">
                                        {name}
                                    </h2>

                                    <p className="text-sm text-gray-600 mt-2">
                                        Juicy beef patty with melted cheese and fresh veggies.
                                    </p>

                                    {/* Price & Button */}
                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-2xl font-bold text-red-600">
                                            ${price}
                                        </span>

                                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
        </>
    )
}
export default Productcard;