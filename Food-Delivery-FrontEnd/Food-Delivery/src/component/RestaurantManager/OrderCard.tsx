import React from 'react';
import { useNavigate } from 'react-router-dom';
import restorant from 'src/assets/pizza.png';

// Dummy data to simulate the products with images
const products = [
    {
        name: 'Vegetable Mixups',
        ingredients: ['Vegetable Fritters with Egg'],
        image: restorant,
        price: '$5.30'
    },
    {
        name: 'Chinese Takeout Dish',
        ingredients: ['Fresh Prawn mix salad'],
        image: restorant,
        price: '$5.30'
    },
    {
        name: 'Baked Pasted Dishes',
        ingredients: ['Vegetable Fritters with Egg'],
        image: restorant,
        price: '$2.48'
    }
];

type Product = {
    name: string;
    ingredients: string[];
    image: string;
    price: string;
};

type OrderType = {
    id: number;
    date: string;
    products: Product[];
};

type OrderCardProps = {
    order: OrderType;
    setSpecificOrder: (value: boolean) => void;
    setOrder: (order: OrderType) => void;
};

export function OrderCard({ order, setSpecificOrder, setOrder }: OrderCardProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        setOrder(order);
        setSpecificOrder(true);
        navigate('/RestaurantManager/SpecificOrder');
    };

    return (
        <div className="m-4 max-w-sm p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <span className="flex items-center p-2 bg-red-600 rounded-lg">
                <svg
                    className="w-7 h-7 text-white mb-0.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                </svg>
                <p className="ml-[15px] text-white font-bold">Not Paid</p>
            </span>
            <div className="mt-4">
                <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Order #{order.id}</h5>
                <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">{order.date}</p>
                <div className="mb-3 h-48 overflow-y-scroll">
                    {order.products && order.products.map((product, index) => (
                        <div key={index} className="flex items-center mb-2">
                           <img
                                        src={restorant}
                                        alt={product.name}
                                        className="product-image "
                                    />
                            <div>
                                <p className="text-sm font-medium text-gray-900 dark:text-white">{product.name}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{product.ingredients.join(', ')}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <a
                onClick={() => {
                    console.log('ORDERRRR ', order);
                    setOrder(order);
                    console.log('jjJJ');
                    setSpecificOrder(true);
                    navigate('/RestaurantManager/SpecificOrderr');
                }}
                href="#"
                className="inline-flex font-medium items-center text-blue-600 hover:underline">
                View Order
                <svg
                    className="w-3 h-3 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                </svg>
            </a>
        </div>
    );
}
