import {  useState, useEffect } from 'react';
import './style/DiscountRestaurant.css';
import NavBar from './navBarDiscRes';
import { getDiscountRestaurantCache } from 'src/cache/entry';
import { Restaurant } from 'src/types/Restaurant';

const DiscountRestaurants = () => {
    const [restaurant, setRestaurant] = useState<Restaurant[]>([]);

    async function handleRestorants(categ: string) {
        const responeRestorant = await getDiscountRestaurantCache(categ);
        setRestaurant(responeRestorant);
    }

    useEffect(() => {
        handleRestorants('vegan');
    }, []);

    return (
        <>
            <NavBar handleRestorants={handleRestorants} />
            <div className="ml-[20px] flex flex-row snap-x overflow-x-auto h-52 restarant-wrapper ">
                {restaurant.map((restaurant, index) => (
                    <div
                        key={index}
                        className="overflow-hidden snap-center m-2  relative truncate rounded-md specific-restaurant">
                        <img
                            className="object-cover w-full h-full image-restuarant"
                            src={`src/assets/${restaurant.images[0]}`}
                        />
                        <div className="absolute bottom-0 left-0 h-full w-140  shadoww">
                            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-black via-transparent to-transparent rounded-tl-lg rounded-bl-lg"></div>
                        </div>
                        <div className="absolute  w-full h-14 bottom-4 left-4 pl-2 z-10 text-container">
                            <p className="text-darkYellow font-semibold text-type">Restaurant</p>
                            <p className="text-xl text-gray-50 font-bold w-full text-resName">
                                {restaurant.name}
                            </p>
                        </div>
                        <div className="rounded-bl-lg rounded-br-lg rounded-sm absolute w-14 h-10  top-0 right-8 bg-darkBlueColor text-gray-50 font-bold flex items-center justify-center transform -translate-x-2/5 z-10 discountt">
                            {restaurant.discount}%
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DiscountRestaurants;
