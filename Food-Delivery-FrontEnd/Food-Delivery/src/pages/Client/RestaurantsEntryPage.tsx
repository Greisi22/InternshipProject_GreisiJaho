import React, { useState } from 'react';
import restaurant1 from 'src/assets/Restaurant1.webp';
 

// src/types/Restaurant.ts
 interface Restaurant {
    name: string;
    type: string;
    imageUrl: string;
    discount?: string;
    rating: number;
    deliveryTime: number;
}

// src/data/MockData.ts
 const restaurants: Restaurant[] = [
    {
        name: 'Burger King',
        type: '24 ORË, Burger',
        imageUrl: restaurant1,
        discount: '',
        rating: 7.4,
        deliveryTime: 25,
    },
    {
        name: 'Creperie Milano',
        type: '24 ORË, Ëmbëlsira',
        imageUrl: restaurant1,
        discount: '',
        rating: 7.2,
        deliveryTime: 30,
    },
    {
        name: 'Aurora Fast Food',
        type: 'Burger, Fast Food',
        imageUrl: restaurant1,
        discount: '-200 L',
        rating: 6.5,
        deliveryTime: 35,
    },
    {
        name: 'Burger King',
        type: '24 ORË, Burger',
        imageUrl: restaurant1,
        discount: '',
        rating: 7.4,
        deliveryTime: 25,
    },
    {
        name: 'Creperie Milano',
        type: '24 ORË, Ëmbëlsira',
        imageUrl: restaurant1,
        discount: '',
        rating: 7.2,
        deliveryTime: 30,
    },
    {
        name: 'Aurora Fast Food',
        type: 'Burger, Fast Food',
        imageUrl: restaurant1,
        discount: '-200 L',
        rating: 6.5,
        deliveryTime: 35,
    }
    // Add more restaurant data here...
];



function RestaurantsEntryPage() {
    const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>(restaurants);

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {allRestaurants.map((restaurant, index) => (
                    <div key={index} className="flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img
                            className="object-cover w-full rounded-t-lg h-48"
                            src={restaurant.imageUrl}
                            alt={restaurant.name}
                        />
                        <div className="p-4">
                            <h5 className="text-lg font-bold text-gray-900 dark:text-white">{restaurant.name}</h5>
                            <p className="text-sm text-gray-700 dark:text-gray-400">{restaurant.type}</p>
                            <div className="flex items-center mt-2">
                                <span className="text-green-500 font-bold">{restaurant.discount}</span>
                                <span className="ml-2 text-gray-700 dark:text-gray-400">{restaurant.rating} ★</span>
                                <span className="ml-auto text-gray-700 dark:text-gray-400">{restaurant.deliveryTime} min</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestaurantsEntryPage;