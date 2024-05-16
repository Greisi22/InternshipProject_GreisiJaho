import React, { useState } from 'react';
import { Restaurant } from 'src/types/Restaurant';
import { restaurants } from 'src/data/MockData';

function RestaurantsEntryPage() {
    const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>(restaurants);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-[20px]">
                {allRestaurants.map((restaurant, index) => (
                    <div>
                        <a
                            href="#"
                            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img
                                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                                alt=""
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Noteworthy technology acquisitions 2021
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology acquisitions of 2021
                                    so far, in reverse chronological order.
                                </p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestaurantsEntryPage;
