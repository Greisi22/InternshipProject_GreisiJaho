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
            restaurantId: getRestaurant()?.id,
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
            <h1 className="text-3xl mb-4 text-center">Finalizimi i porosisë</h1>
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-4" style={{ padding: '5rem' }}>
                    <h2 className="text-2xl mb-4">Adresa e dërgimit</h2>
                    <input
                        type="text"
                        placeholder="Vendosni adresën ku doni t'ju vijë ushqimi"
                        className="w-1/2 p-3 mb-4 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Detaje të adresës (Afe/Kati/Porta)"
                        className="w-1/2 p-3 mb-4 border border-gray-300 rounded"
                    />

                    <h2 className="text-2xl mb-4">Të dhënat e tua</h2>
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
                            placeholder="Vendosni celularin"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-r"
                        />
                    </div>

                    <h2 className="text-2xl mb-4">Menyra Pageses</h2>
                    <div className="mb-4">
                        <label className="mr-4">
                            <input
                                type="radio"
                                value="cash"
                                checked={paymentMethod === 'cash'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            Cash
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="visa"
                                checked={paymentMethod === 'visa'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            Card
                        </label>
                    </div>
                    <button
                        className="w-1/2 px-4 py-2 bg-green-500 text-white rounded-lg"
                        onClick={goBack}>
                        Kthehu te porosia
                    </button>
                </div>
                <div className="w-full md:w-1/3 p-4 border-l border-gray-200">
                    <h2 className="text-2xl mb-4">Porosia jote</h2>
                    {Object.values(cart).map((item: CartItem) => (
                        <div key={item.name} className="flex items-center mb-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 rounded-lg object-cover"
                            />
                            <div className="ml-4">
                                <h3 className="text-xl">{item.name}</h3>
                                <p className="text-gray-600">{item.description}</p>
                                <p className="text-lg font-bold">{item.price} L</p>
                                <p className="text-lg">Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                    <div className="mt-4">
                        <p>Delivery: 120 L</p>
                        <p>Totali për të paguar: {total + 120} L</p>
                    </div>
                    <button
                        className="w-full px-4 py-2 bg-green-500 text-white rounded-lg mt-4"
                        onClick={() => {
                            alert('Porosia u krye!');

                            handleOrderDone();
                        }}>
                        Kryej porosinë
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
