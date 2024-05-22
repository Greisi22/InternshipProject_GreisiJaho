import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Order, Product, Restaurant } from 'src/types/Restaurant';
import OrderWebSocket from 'src/websocket/OrderWebSocket';

interface CartItem {
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}

const CheckoutPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [cart, setCart] = useState<{ [key: string]: CartItem }>({});
    const [total, setTotal] = useState(0);

    const getRestaurant = (): Restaurant | null => {
        const restaurant = localStorage.getItem('CurrentRestaurant');
        if (restaurant != null) {
            console.log('Na u ca menerja ', JSON.parse(restaurant));
            return JSON.parse(restaurant) as Restaurant;
        }
        return null;
    };
    useEffect(() => {
        const state = location.state as { cart: { [key: string]: CartItem }; total: number };
        if (state && state.cart && state.total !== undefined) {
            setCart(state.cart);
            setTotal(state.total);
        }
    }, [location.state]);

    const [phonePrefix, setPhonePrefix] = useState('+355');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cash');

    const goBack = () => {
        navigate('/Client/SpecificRestaurant');
    };

    const handleOrderDone = () => {
        const productt = localStorage.getItem('ProductItem');
        let product: Product[] = [
            {
                name: '',
                price: -1,
                ingredients: [],
                category: '',
                image: '',
            },
        ];
        if (productt != null) {
            product = JSON.parse(productt);
        }
        const order: Order = {
            restaurant: {
                id: getRestaurant()?.id,
            },
            products: product,
            orderTime: new Date().toISOString(),
            totalPrice: total,
            description: 'string',
        };
        OrderWebSocket(order);
        console.log('Orderiiiii ', order);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-gradient-to-r">
                <h1 className="text-white text-3xl font-semibold tracking-wide text-center">
                    {getRestaurant()?.name}
                </h1>
            </div>
            <div className="flex flex-col md:flex-row mt-4">
                <div className="w-full md:w-1/3 p-4 border-r border-gray-200">
                    <h2 className="text-2xl mb-4 font-semibold">Your order</h2>
                    {Object.values(cart).map((item: CartItem) => (
                        <div
                            key={item.name}
                            className="flex items-center mb-6 bg-white rounded-lg p-4 shadow-md">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 rounded-lg object-cover"
                            />
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="text-gray-600 mb-2">{item.description}</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-lg font-bold text-green-600">
                                        {item.price} L
                                    </p>
                                    <p className="text-lg">Quantity: {item.quantity}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="mt-4">
                        <p className="text-lg font-bold">Delivery: 120 L</p>
                        <p className="text-lg font-bold text-red-600">
                            Total price: {total + 120} L
                        </p>
                    </div>
                    <button
                        className="w-full mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none border border-red-500"
                        onClick={() => {
                            alert('Order completed!');
                            handleOrderDone();
                        }}>
                        Checkout
                    </button>
                </div>
                <div className="flex-1 p-4">
                    <h2 className="text-2xl mb-4 font-semibold">Address</h2>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Enter your delivery address"
                            className="w-full p-3 mb-4 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            placeholder="Address details (Neighborhood/Floor/Door)"
                            className="w-full p-3 mb-4 border border-gray-300 rounded"
                        />
                        <div className="flex items-center mb-4">
                            <select
                                value={phonePrefix}
                                onChange={(e) => setPhonePrefix(e.target.value)}
                                className="border border-gray-300 p-3 rounded-l">
                                <option value="+355">+355</option>
                                <option value="+1">+1</option>
                                <option value="+44">+44</option>
                                {/* Add more options as needed */}
                            </select>
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-r"
                            />
                        </div>
                    </div>

                    <h2 className="text-2xl mb-4 font-semibold">Payment method</h2>
                    <div className="mb-4">
                        <label className="mr-6 flex items-center">
                            <input
                                type="radio"
                                value="cash"
                                checked={paymentMethod === 'cash'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <span className="ml-2">Cash</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="visa"
                                checked={paymentMethod === 'visa'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <span className="ml-2">Card</span>
                        </label>
                    </div>
                    <button
                        className="w-full mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none border border-red-500"
                        onClick={goBack}>
                        Return to the order
                    </button>
                </div>
            </div>
        </div>
    );
};
export default CheckoutPage;
