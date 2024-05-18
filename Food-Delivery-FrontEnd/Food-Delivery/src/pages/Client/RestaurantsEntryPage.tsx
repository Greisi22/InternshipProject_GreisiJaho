import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Restaurant } from 'src/types/Restaurant';
import { retrieveAllRestaurant } from 'src/api/localhost/Administrator/restaurantsApi';

function RestaurantsEntryPage({ setRestaurant }: { setRestaurant: any }) {
    const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>();
    const navigate = useNavigate();

    const handleRestaurantClick = (restaurant: Restaurant) => {
        setRestaurant(restaurant);
        console.log('Restorant nidhi david keci ', restaurant);
        navigate('/Client/SpecificRestaurant');
    };

    const fetchData = async () => {
        const allRestaurantss = await retrieveAllRestaurant();
        setAllRestaurants(allRestaurantss);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {allRestaurants &&
                    allRestaurants.map((restaurant, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                handleRestaurantClick(restaurant);
                            }}
                            className="cursor-pointer flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100
                         dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  active:bg-gray-200">
                            <img
                                className="object-cover w-full rounded-t-lg h-48"
                                src={restaurant.images && restaurant.images[0]}
                                alt={restaurant.name}
                            />
                            <div className="p-4">
                                <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                                    {restaurant.name}
                                </h5>
                                <p className="text-sm text-gray-700 dark:text-gray-400">
                                    {restaurant.category && restaurant.category.join(', ')}
                                </p>
                                <div className="flex items-center mt-2">
                                    <span className="text-green-500 font-bold">
                                        {restaurant.averageRating}
                                    </span>
                                    <span className="ml-2 text-gray-700 dark:text-gray-400">
                                        {restaurant.rate} ★
                                    </span>
                                    <span className="flex items-center ml-auto">
                                        <div
                                            className={`w-2.5 h-2.5 rounded-full mr-2 ${
                                                restaurant.open ? 'bg-green-500' : 'bg-red-500'
                                            }`}></div>
                                        {restaurant.open ? 'Open' : 'Closed'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default RestaurantsEntryPage;
