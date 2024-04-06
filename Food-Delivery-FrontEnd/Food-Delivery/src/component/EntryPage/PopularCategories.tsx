import React from 'react';
import './style/RestaurantCategory.css';
import FishPlateCategoryImage from '../../assets/FishPlateCategory.jpg';

function PopularCategories() {
    const popularcategories = [
        {
            name: 'Vegan',
            image: FishPlateCategoryImage,
            nrofrestaurants: '21 restaurants',
        },
        {
            name: 'Sushi',
            image: FishPlateCategoryImage,
            nrofrestaurants: '21 restaurants',
        },
        {
            name: 'Burgers',
            image: FishPlateCategoryImage,
            nrofrestaurants: '21 restaurants',
        },
        {
            name: 'Fish',
            image: FishPlateCategoryImage,
            nrofrestaurants: '21 restaurants',
        },
        {
            name: 'Green',
            image: FishPlateCategoryImage,
            nrofrestaurants: '21 restaurants',
        },
        {
            name: 'FastFood',
            image: FishPlateCategoryImage,
            nrofrestaurants: '21 restaurants',
        },
    ];

    return (
        <div className="w-full p-[10px] pl-[40px] pr-[40px]">
            <div className="w-full h-[17%] ">
                <p className="discount-text font-bold text-[16.8px]">
                    Tasty Rush Popular Categories 🤩
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
                {popularcategories.map((category, index) => (
                    <div key={index} className='relative overflow-hidden'>
                        <img
                            className="max-w-[190px] h-auto rounded-lg"
                            src={category.image}
                            alt=""
                        />
                        <div className="mt-2 ml-1">
                            <p className="font-bold whitespace-nowrap">Burgers & Fast food</p>
                            <p className="text-[13px] font-medium whitespace-nowrap text-[#e94339]">
                                21 Restaurants
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularCategories;
