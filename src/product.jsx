'use client';
import { useEffect, useState } from "react";
import FoodCard from "./app/menu/page";
import Productcard from "./productcard";
function Product() {
    const [api, setApi] = useState([]);
    async function Apidata() {
        const response = await fetch("https://dummyjson.com/recipes");
        const resData = await response.json();
        const resDataRecipe = await resData.recipes;
        setApi(resDataRecipe);
        console.log(resDataRecipe);
    }
    useEffect(
        () => {

            Apidata();
        }, []
    )
    return (
        <div  className="max-w-7xl mt-6 mx-auto gap-19 mb-11 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {
                api.map(
                    (data, index) => {
                        return (

                            <Productcard key={data.id} name={data.name} img={data.image} price={data.rating} id={data.id}/>
                        )

                    }
                )
            }


        </div>
    )
}
export default Product;