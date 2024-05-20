import React, { useState } from 'react';
import chocolateCroissant from './assets/chocolateCroissant.png';
import grandmaFritters from './assets/grandmaFritters.png';
import CheckoutPage from './CheckoutPage';

// Define the type for a menu item
interface MenuItem {
    name: string;
    description: string;
    price: number;
    image: string;
}

// Define the type for the cart item
interface CartItem {
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}

interface FoodGalleryProps {
    menuItems: MenuItem[];
    cart: { [key: string]: CartItem };
    total: number;
    addToCart: (item: MenuItem) => void;
    removeFromCart: (item: MenuItem) => void;
    goToCheckout: () => void;
}

const FoodGallery: React.FC<FoodGalleryProps> = ({
    menuItems,
    cart,
    total,
    addToCart,
    removeFromCart,
    goToCheckout,
}) => {
    return (
        <div>
            <div className="bg-red-500 p-4 rounded-t-lg">
                <h1 className="text-white text-2xl">MUGO</h1>
            </div>
            <div className="flex flex-col md:flex-row mt-4">
                <div className="flex-1">
                    <div className="p-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-xl">
                                Ushqimi <span className="text-red-500">8.8 (195+)</span>
                            </span>
                            <span className="text-xl">
                                Sherbimi <span className="text-red-500">8.7 (181+)</span>
                            </span>
                            <span className="text-xl">40 min</span>
                        </div>
                    </div>
                    <div className="p-4">
                        <h2 className="text-2xl mb-4">Artikujt më të shitur</h2>
                        {menuItems.map((item) => (
                            <div key={item.name} className="flex items-center mb-4">
                                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                                <div className="ml-4">
                                    <h3 className="text-xl">{item.name}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                    <p className="text-lg font-bold">{item.price} L</p>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <button
                                            className="px-2 py-1 border border-gray-300 rounded"
                                            onClick={() => removeFromCart(item)}
                                            disabled={!cart[item.name] || cart[item.name].quantity === 0}
                                        >
                                            -
                                        </button>
                                        <span>{cart[item.name]?.quantity || 0}</span>
                                        <button
                                            className="px-2 py-1 border border-gray-300 rounded"
                                            onClick={() => addToCart(item)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-4 border-l border-gray-200">
                    <h2 className="text-2xl mb-4">Porosia te MUGO</h2>
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <h3 className="text-xl mb-4">Totali</h3>
                        <p>Ke një kupon?</p>
                        <p className="mt-2">Delivery: 120 L</p>
                        <p>Kuponi: 0 L</p>
                        <p className="mt-2 font-bold">Totali për të paguar: {total + 120} L</p>
                        <button
                            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
                            onClick={goToCheckout}
                        >
                            Kryej Porosinë
                        </button>
                        <p className="mt-2 text-red-500">Ju nuk e keni kaluar akoma minimumin e porosisë prej 300 L</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const App: React.FC = () => {
    const [page, setPage] = useState<'menu' | 'checkout'>('menu');
    const [cart, setCart] = useState<{ [key: string]: CartItem }>({});
    const [total, setTotal] = useState(0);

    const menuItems: MenuItem[] = [
        {
            name: 'Kruasan Çokollatë Dhe Lajthi',
            description: 'Kruasan me çokollatë dhe lajthi',
            price: 250,
            image: chocolateCroissant,
        },
        {
            name: 'Petullat e Gjyshe',
            description: '3 petulla të shoqëruara me djathë',
            price: 550,
            image: grandmaFritters,
        },
    ];

    const addToCart = (item: MenuItem) => {
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

    const removeFromCart = (item: MenuItem) => {
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

    return (
        <div className="container mx-auto p-4">
            {page === 'menu' ? (
                <FoodGallery
                    menuItems={menuItems}
                    cart={cart}
                    total={total}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    goToCheckout={() => setPage('checkout')}
                />
            ) : (
                <CheckoutPage cart={cart} total={total} goBack={() => setPage('menu')} />
            )}
        </div>
    );
};

export default App;
export { FoodGallery };
