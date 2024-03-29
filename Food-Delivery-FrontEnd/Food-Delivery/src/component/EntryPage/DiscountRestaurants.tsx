import { FunctionComponent } from 'react';
import './style/DiscountRestaurant.css';
import Restaurant2 from '../../assets/Restaurant2.jpg';
import Restaurant3 from '../../assets/Restaurant3.jpeg';
import Restaurant4 from '../../assets/Restaurant4.jpeg';
import NavBar from './navBarDiscRes';

const DiscountRestaurants: FunctionComponent = () => {
    const mockadata= [{
        name: "Restorant David", discount: 20, image: Restaurant3
    },
    {
        name: "Restorant Greisi", discount: 20, image: Restaurant2
    },
    {
        name: "Restorant Restorant", discount: 20, image: Restaurant4
    },
    {
        name: "Restorant Restorant", discount: 20, image: Restaurant3
    },
    {
        name: "Restorant Restorant", discount: 20, image: Restaurant4
    },{
        name: "David", discount: 20, image: Restaurant2
    },{
        name: "David", discount: 20, image: Restaurant4
    },
]
    return (
        <>
<NavBar/>
<div className="flex flex-row snap-x overflow-x-auto h-52 restarant-wrapper ">
         {mockadata.map((restaurant, index) => (

            <div key={index} className="overflow-hidden snap-center m-2  relative truncate rounded-md specific-restaurant">
                <img className="object-cover w-full h-full image-restuarant" src={restaurant.image} />
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
