import { FunctionComponent } from 'react';
import './style/DiscountRestaurant.css';
import Restaurant2 from '../../assets/Restaurant2.jpg';
import Restaurant3 from '../../assets/Restaurant3.jpeg';
import Restaurant4 from '../../assets/Restaurant4.jpeg';

const DiscountRestaurants: FunctionComponent = () => {
  

    return (
        <div className="flex flex-row overflow-x-auto h-52 restarant-wrapper">
            <div className="overflow-hidden snap-center m-2 w-96 min-w-[320px] relative">
                <img className="object-cover w-full h-full" src={Restaurant2}></img>
                <div className="absolute bottom-0 left-0 w-200 h-full">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-black via-transparent to-transparent rounded-tl-lg rounded-bl-lg"></div>
                </div>
                <div className="absolute  w-full h-14 bottom-4 left-4 pl-2 z-10">
                    <p className="text-darkYellow font-semibold">Restaurant</p>
                    <p className="text-xl text-gray-50 font-bold">Restaurant Davidi</p>
                </div>
                <div className="rounded-bl-lg rounded-br-lg rounded-sm absolute w-14 h-10  text-gray-50 font-bold flex items-center justify-center transform -translate-x-2/5">
                    -40%
                </div>
            </div>

            <div className="overflow-hidden snap-center m-2 w-80 min-w-[320px] relative truncate">
                <img className="object-cover w-full h-full" src={Restaurant3} />
                <div className="absolute bottom-0 left-0 w-140 h-full">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-black via-transparent to-transparent rounded-tl-lg rounded-bl-lg"></div>
                </div>
                <div className="absolute  w-full h-14 bottom-4 left-4 pl-2 z-10">
                    <p className="text-darkYellow font-semibold">Restaurant</p>
                    <p className="text-xl text-gray-50 font-bold w-full">Restaurant Davidi</p>
                </div>
                <div className="rounded-bl-lg rounded-br-lg rounded-sm absolute w-14 h-10  top-0 right-8 bg-darkBlueColor text-gray-50 font-bold flex items-center justify-center transform -translate-x-2/5 z-10">
                    -40%
                </div>
            </div>

            <div className="overflow-hidden snap-center m-2 w-80 min-w-[320px] relative">
                <img className="object-cover w-full h-full" src={Restaurant4} />
                <div className="rounded-bl-lg rounded-br-lg rounded-sm absolute w-14 h-10  top-0 right-4 bg-darkBlueColor text-gray-50 font-bold flex items-center justify-center transform -translate-x-2/5">
                    -40%
                </div>
                <div className="absolute bottom-0 left-0 w-140 h-full">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-black via-transparent to-transparent rounded-tl-lg rounded-bl-lg"></div>
                </div>
                <div className="absolute  w-full h-14 bottom-4 left-4 pl-2 z-10">
                    <p className="text-darkYellow font-semibold">Restaurant</p>
                    <p className="text-xl text-gray-50 font-bold">Restaurant Davidi</p>
                </div>
            </div>

            <div className="overflow-hidden snap-center m-2 w-80 min-w-[320px] relative">
                <img className="object-cover w-full h-full" src={Restaurant4} />
                <div className="rounded-bl-lg rounded-br-lg rounded-sm absolute w-14 h-10  top-0 right-4 bg-darkBlueColor text-gray-50 font-bold flex items-center justify-center transform -translate-x-2/5">
                    -40%
                </div>
                <div className="absolute bottom-0 left-0 w-140 h-full">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-black via-transparent to-transparent rounded-tl-lg rounded-bl-lg"></div>
                </div>
                <div className="absolute  w-full h-14 bottom-4 left-4 pl-2 z-10">
                    <p className="text-darkYellow font-semibold">Restaurant</p>
                    <p className="text-xl text-gray-50 font-bold">Restaurant Davidi</p>
                </div>
            </div>

            <div className="overflow-hidden snap-center m-2 w-80 min-w-[320px] relative">
                <img
                    className="object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                />
                <div className="rounded-bl-lg rounded-br-lg rounded-sm absolute w-14 h-10  top-0 right-4 bg-darkBlueColor text-gray-50 font-bold flex items-center justify-center transform -translate-x-2/5">
                    -40%
                </div>
                <div className="absolute bottom-0 left-0 w-140 h-full">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-black via-transparent to-transparent rounded-tl-lg rounded-bl-lg"></div>
                </div>
                <div className="absolute  w-full h-14 bottom-4 left-4 pl-2 z-10">
                    <p className="text-darkYellow font-semibold">Restaurant</p>
                    <p className="text-xl text-gray-50 font-bold">Restaurant Davidi</p>
                </div>
            </div>

            <div className="overflow-hidden snap-center m-2 w-80 min-w-[320px] relative">
                <img
                    className="object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                />
                <div className="absolute bottom-0 left-0 w-140 h-full">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-black via-transparent to-transparent rounded-tl-lg rounded-bl-lg"></div>
                </div>
                <div className="rounded-bl-lg rounded-br-lg rounded-sm absolute w-14 h-10  top-0 right-4 bg-darkBlueColor text-gray-50 font-bold flex items-center justify-center transform -translate-x-2/5">
                    -40%
                </div>
                <div className="absolute  w-full h-14 bottom-4 left-4 pl-2 z-10">
                    <p className="text-darkYellow font-semibold">Restaurant</p>
                    <p className="text-xl text-gray-50 font-bold">Restaurant Davidi</p>
                </div>
            </div>
        </div>
    );
};

export default DiscountRestaurants;
