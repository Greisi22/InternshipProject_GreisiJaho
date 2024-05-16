import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the type for a food item
type FoodItem = {
    id: number;
    name: string;
    price: number;
    description: string;
};

const FoodGallery = () => {
    // Define an array of food items
    const foodItems: FoodItem[] = [
        { id: 1, name: 'Pizza', price: 10, description: 'Delicious pizza with various toppings' },
        { id: 2, name: 'Burger', price: 8, description: 'Classic burger with cheese, lettuce, and tomato' },
        { id: 3, name: 'Fries', price: 5, description: 'Crispy french fries served with ketchup' },
        { id: 1, name: 'Pizza', price: 10, description: 'Delicious pizza with various toppings' },
        { id: 2, name: 'Burger', price: 8, description: 'Classic burger with cheese, lettuce, and tomato' },
        { id: 3, name: 'Fries', price: 5, description: 'Crispy french fries served with ketchup' },
        { id: 1, name: 'Pizza', price: 10, description: 'Delicious pizza with various toppings' },
        { id: 2, name: 'Burger', price: 8, description: 'Classic burger with cheese, lettuce, and tomato' },
        { id: 3, name: 'Fries', price: 5, description: 'Crispy french fries served with ketchup' }
    ];

    // State to store quantity for each food item
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

    // Navigate hook for navigation
    const navigate = useNavigate();

    // Function to handle adding a food item to the cart
    const handleAddToCart = (foodItem: FoodItem) => {
        // Implement add to cart logic here
        console.log(`Added ${quantities[foodItem.id] || 0} ${foodItem.name} to cart`);
    };

    // Function to handle increasing quantity
    const increaseQuantity = (id: number) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: (prevQuantities[id] || 0) + 1,
        }));
    };

    // Function to handle decreasing quantity
    const decreaseQuantity = (id: number) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: Math.max((prevQuantities[id] || 0) - 1, 0),
        }));
    };

    // Function to navigate to the checkout page
    const handleCheckout = () => {
        // Prepare the order data
        const order = {
            items: foodItems.filter(item => quantities[item.id] && quantities[item.id] > 0),
            delivery: 100, // Example delivery cost
            discount: 0, // Example discount
            total: Object.keys(quantities).reduce((total, id) => total + (quantities[id] || 0) * foodItems.find(item => item.id === parseInt(id))!.price, 0),
            address: 'Sheshi Skënderbej, Tirana, Albania' // Example address
        };

        // Navigate to checkout page with order data
        navigate('/Client/CheckoutPage', { state: { order } });
    };

    return (
        <div className="flex flex-col md:flex">
            {/* Categories buttons on top */}
            <div className="w-full md:w-full flex flex-row justify-center items-center p-4 mb-4 md:mb-0">
                <button type="button" className="text-gray-700 hover:text-white bg-gray-200 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2" onClick={() => console.log("Pizza")}>Pizza</button>
                <button type="button" className="text-gray-700 hover:text-white bg-gray-200 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2" onClick={() => console.log("Burger")}>Burger</button>
                <button type="button" className="text-gray-700 hover:text-white bg-gray-200 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2" onClick={() => console.log("Drinks")}>Drinks</button>
                {/* Add more category buttons as needed */}
            </div>

            {/* Food items */}
            <div className="w-full md:w-3/4 overflow-y-auto mr-4">
                {foodItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b py-4 mb-4">
                        <div className="flex items-center">
                            <img className="h-20 w-20 rounded-lg mr-4" src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${item.id}.jpg`} alt={item.name} />
                            <div>
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-gray-600">{item.description}</p>
                                <p className="text-gray-800 font-bold">${item.price}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2" onClick={() => decreaseQuantity(item.id)}>-</button>
                            <span>{quantities[item.id] || 0}</span>
                            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full ml-2" onClick={() => increaseQuantity(item.id)}>+</button>
                        </div>
                    </div>
                ))}
            </div>

       
            {/* Fixed payment section on the right side */}
            <div className="w-1/4 flex flex-col justify-center items-center p-4 fixed right-0 top-0 h-full">
                <div className="bg-gray-200 rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-4">Totali</h2>
                    <hr className="my-4 border-gray-400" />
                    <div className="flex justify-between mb-2">
                        <p>Delivery</p>
                        <p>100 L</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p>Totali për të paguar</p>
                        <p>{Object.keys(quantities).reduce((total, id) => total + (quantities[id] || 0) * foodItems.find(item => item.id === parseInt(id))!.price, 0)} L</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleCheckout}>Kryej Porosinë</button>
                        <p className="text-sm">Ju nuk e keni kaluar akoma minimumin e porosisë prej 0 L</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodGallery;