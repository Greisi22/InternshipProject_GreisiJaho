import { Restaurant } from 'src/types/Restaurant';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CartItem {
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}

function SpecificRestaurant() {
    const navigate = useNavigate();
    const [cart, setCart] = useState<{ [key: string]: CartItem }>({});
    const [total, setTotal] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [restaurantData, setRestaurantData] = useState<Restaurant>();

    useEffect(() => {
        const restaurant = localStorage.getItem('CurrentRestaurant');
        if (restaurant != null) {
            console.log('Na u ca menerja ', JSON.parse(restaurant));
            setRestaurantData(JSON.parse(restaurant));
        }
    }, []);

    const addToCart = (item: any) => {
        const productt = localStorage.getItem('ProductItem');
        let existingCartItems = []; // Initialize as empty array by default
        if (productt != null) {
            existingCartItems = JSON.parse(productt);
        }

        const updatedCartItems = [...existingCartItems, item];
        localStorage.setItem('ProductItem', JSON.stringify(updatedCartItems));

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
                    <h1 className="text-white text-2xl font-semibold tracking-wide">MUGO</h1>
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
                            <h2 className="text-2xl mb-4 font-semibold">Filter by Category</h2>
                            <div className="flex space-x-4 mb-4">
                                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-200 transition-colors focus:outline-none">
                                    All
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-200 transition-colors focus:outline-none">
                                    Pizza
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-200 transition-colors focus:outline-none">
                                    Burger
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-200 transition-colors focus:outline-none">
                                    Drinks
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-200 transition-colors focus:outline-none">
                                    Desserts
                                </button>
                            </div>
                            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Menu Items</h2>
                            <div className="grid grid-cols-2 gap-8">
                                {restaurantData?.products &&
                                    restaurantData.products.map(
                                        (item) =>
                                            (selectedCategory === 'All' ||
                                                item.category === selectedCategory) && (
                                                <div key={item.name} className="flex items-center">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-32 h-32 object-cover rounded-md shadow-md"
                                                    />
                                                    <div className="ml-6">
                                                        <h3 className="text-2l font-semibold">
                                                            {item.name}
                                                        </h3>
                                                        <p className="text-gray-600 text-lg mt-2">
                                                            {item.description}
                                                        </p>
                                                        <p className="text-xl font-semibold mt-4">
                                                            {item.price} L
                                                        </p>
                                                        <div className="flex items-center space-x-3 mt-3">
                                                            <button
                                                                className="px-3 py-2 bg-gray-200 rounded-md text-gray-700"
                                                                onClick={() => removeFromCart(item)}
                                                                disabled={
                                                                    !cart[item.name] ||
                                                                    cart[item.name].quantity === 0
                                                                }>
                                                                Remove
                                                            </button>
                                                            <button
                                                                className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
                                                                onClick={() => addToCart(item)}>
                                                                Add to Cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ),
                                    )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4 border-l border-gray-200">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Mugo's Order</h2>
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <h3 className="text-2xl mb-6 font-semibold text-gray-700">
                                Your Order
                            </h3>
                            <div className="border-t border-b border-gray-200 py-4">
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-lg text-gray-700">Subtotal</p>
                                    <p className="text-lg font-semibold text-gray-800">{total} L</p>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-lg text-gray-700">Delivery</p>
                                    <p className="text-lg text-gray-800">120 L</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-lg text-gray-700">Total</p>
                                    <p className="text-xl font-semibold text-red-600">
                                        {total + 120} L
                                    </p>
                                </div>
                            </div>
                            <button
                                className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg focus:outline-none focus:ring focus:border-red-300"
                                onClick={goToCheckout}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecificRestaurant;
