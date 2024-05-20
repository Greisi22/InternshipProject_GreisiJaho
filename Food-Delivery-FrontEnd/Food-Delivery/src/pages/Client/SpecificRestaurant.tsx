import { Restaurant } from 'src/types/Restaurant';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CartItem {
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}

function SpecificRestaurant({ restaurantData }: { restaurantData: Restaurant }) {
    console.log('Restaurant Data  ', restaurantData);
    const navigate = useNavigate();
    const [cart, setCart] = useState<{ [key: string]: CartItem }>({});
    const [total, setTotal] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const addToCart = (item: any) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[item.name]) {
                newCart[item.name].quantity += 1;
            } else {
                newCart[item.name] = { ...item, quantity: 1 };
            }
            return newCart;
        });

        setTotal((prevTotal) => prevTotal + item.price);
    };

    const removeFromCart = (item: any) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[item.name] && newCart[item.name].quantity > 0) {
                newCart[item.name].quantity -= 1;
                if (newCart[item.name].quantity === 0) {
                    delete newCart[item.name];
                }
            }
            return newCart;
        });

        setTotal((prevTotal) => prevTotal - item.price);
    };

    const goToCheckout = () => {
        navigate('/Client/Checkout', { state: { cart, total } });
    };

    const filterItems = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <div className="container mx-auto p-4">
            <div>
                <div className="bg-red-500 p-4 rounded-t-lg">
                    <h1 className="text-white text-2xl">MUGO</h1>
                </div>
                <div className="flex flex-col md:flex-row mt-4">
                    <div className="flex-1">
                        <div className="p-4">
                            <div className="rating">
                                Ushqimi ⭐ 6.7 (80+) &nbsp; Sherbimi ⭐ 8.1 (83+) &nbsp; 35 min
                                &nbsp; -200 L
                            </div>
                        </div>
                        <div className="p-4">
                            <h2 className="text-2xl mb-4">Filter by Category</h2>
                            <div className="flex space-x-4 mb-4">
                                <button
                                    className={`px-4 py-2 border border-gray-300 rounded ${selectedCategory === 'All' && 'bg-gray-200'}`}
                                    onClick={() => filterItems('All')}>
                                    All
                                </button>
                                <button
                                    className={`px-4 py-2 border border-gray-300 rounded ${selectedCategory === 'Pizza' && 'bg-gray-200'}`}
                                    onClick={() => filterItems('Pizza')}>
                                    Pizza
                                </button>
                                <button
                                    className={`px-4 py-2 border border-gray-300 rounded ${selectedCategory === 'Burger' && 'bg-gray-200'}`}
                                    onClick={() => filterItems('Burger')}>
                                    Burger
                                </button>
                                <button
                                    className={`px-4 py-2 border border-gray-300 rounded ${selectedCategory === 'Drinks' && 'bg-gray-200'}`}
                                    onClick={() => filterItems('Drinks')}>
                                    Drinks
                                </button>
                                <button
                                    className={`px-4 py-2 border border-gray-300 rounded ${selectedCategory === 'Desserts' && 'bg-gray-200'}`}
                                    onClick={() => filterItems('Desserts')}>
                                    Desserts
                                </button>
                            </div>
                            <h2 className="text-2xl mb-4">Menu Items</h2>
                            {restaurantData.products &&
                                restaurantData.products.map(
                                    (item) =>
                                        (selectedCategory === 'All' ||
                                            item.category === selectedCategory) && (
                                            <div key={item.name} className="flex items-center mb-4">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-20 h-20 rounded-lg object-cover"
                                                />
                                                <div className="ml-4">
                                                    <h3 className="text-xl">{item.name}</h3>
                                                    <p className="text-gray-600">
                                                        {item.description}
                                                    </p>
                                                    <p className="text-lg font-bold">
                                                        {item.price} L
                                                    </p>
                                                    <div className="flex items-center space-x-2 mt-2">
                                                        <button
                                                            className="px-2 py-1 border border-gray-300 rounded"
                                                            onClick={() => removeFromCart(item)}
                                                            disabled={
                                                                !cart[item.name] ||
                                                                cart[item.name].quantity === 0
                                                            }>
                                                            -
                                                        </button>
                                                        <span>
                                                            {cart[item.name]?.quantity || 0}
                                                        </span>
                                                        <button
                                                            className="px-2 py-1 border border-gray-300 rounded"
                                                            onClick={() => addToCart(item)}>
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ),
                                )}
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4 border-l border-gray-200">
                        <h2 className="text-2xl mb-4">Porosia te MUGO</h2>
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <h3 className="text-xl mb-4">Totali</h3>
                            <p className="mt-2">Delivery: 120 L</p>
                            <p className="mt-2 font-bold">Totali për të paguar: {total + 120} L</p>
                            <button
                                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
                                onClick={goToCheckout}>
                                Kryej Porosinë
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecificRestaurant;
