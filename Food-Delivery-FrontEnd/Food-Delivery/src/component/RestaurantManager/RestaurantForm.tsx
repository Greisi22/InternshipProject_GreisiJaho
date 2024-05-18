import { useState } from 'react';
import { Restaurant } from 'src/types/Restaurant';
import { createRestaurant } from 'src/api/localhost/Administrator/restaurantsApi';

function RestaurantForm() {
    const [restaurantName, setRestaurantName] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [website, setWebsite] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent default form submission behavior
        const restaurant: Restaurant = {
            name: 'Exampldtdtjcjcjhhhgcufvkhvhk',
            address: '123 Example Street, Example City',
            openingHours: [
                'Monday: 8:00 AM - 8:00 PM',
                'Tuesday: 8:00 AM - 8:00 PM',
                'Wednesday: 8:00 AM - 8:00 PM',
                'Thursday: 8:00 AM - 8:00 PM',
                'Friday: 8:00 AM - 8:00 PM',
                'Saturday: 8:00 AM - 8:00 PM',
                'Sunday: Closed',
            ],
            phoneNumber: '+1234567890',
            website: 'http://www.example.com',
            averageRating: 4.5,
            isOpen: true,

            images: ['http://www.example.com/image1.jpg', 'http://www.example.com/image2.jpg'],

            discount: 10,

            category: ['Italian', 'Pizza'],

            isActive: true,
        };
        await createRestaurant(restaurant);
    };

    // Function to handle cancel button click
    const handleCancel = () => {
        // Resetting state variables to their initial values
        setRestaurantName('');
        setphoneNumber('');
        setWebsite('');
        // setServiceOffered('');
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-lg">
            <form
                className="max-w-lg mx-auto p-8 bg-gray-100 rounded-lg shadow-md "
                onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4 text-center">Restaurant Form</h2>
                <div className="mb-4">
                    <label
                        htmlFor="restaurant-name"
                        className="block mb-2 font-medium text-gray-800">
                        Restaurant Name
                    </label>
                    <input
                        type="text"
                        id="restaurant-name"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Name"
                        value={restaurantName}
                        onChange={(e) => setRestaurantName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-800">
                        Phone Number
                    </label>
                    <input
                        id="email"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="email@domain.com"
                        value={phoneNumber}
                        onChange={(e) => setphoneNumber(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="years-of-experience"
                        className="block mb-2 font-medium text-gray-800">
                        Website
                    </label>
                    <input
                        type="text"
                        id="years-of-experience"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="www.example.com"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                {/* <div className="mb-4">
                    <label htmlFor="service-offered" className="block mb-2 font-medium text-gray-800">
                        Service Offered
                    </label>
                    <div className="relative">
                        <select
                            id="service-offered"
                            value={serviceOffered}
                            onChange={(e) => setServiceOffered(e.target.value)}
                            className="appearance-none w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled selected>
                                Select Food Kind
                            </option>
                            <option value="Italian">Italian</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Indian">Indian</option>
                          
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg
                                className="w-5 h-5 text-gray-700 pointer-events-none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div> */}
                <button
                    // onClick={() => {
                    //     handleSubmit();
                    // }}

                    className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
                    Submit
                </button>
                {/* Cancel button */}
                <button
                    type="button"
                    onClick={handleCancel}
                    className="mt-4 w-full py-2 px-4 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
                    Cancel
                </button>
                <p className="mt-4 text-sm text-center text-gray-600">
                    By clicking continue, you agree to our Terms of Service and Privacy Policy
                </p>
            </form>
        </div>
    );
}

export default RestaurantForm;