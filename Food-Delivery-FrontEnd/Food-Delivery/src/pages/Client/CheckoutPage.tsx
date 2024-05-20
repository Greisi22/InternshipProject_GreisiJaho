import React from 'react';

// Define the type for the cart item
interface CartItem {
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}

interface CheckoutPageProps {
    cart: { [key: string]: CartItem };
    total: number;
    goBack: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cart, total, goBack }) => {
    return (
        <div>
            <h1 className="text-3xl mb-4">Finalizimi i porosisë</h1>
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-4">
                    <h2 className="text-2xl mb-4">Adresa e dërgimit</h2>
                    <input
                        type="text"
                        placeholder="Vendosni adresën ku doni t'ju vijë ushqimi"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Detaje të adresës (Afe/Kati/Porta)"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <h2 className="text-2xl mb-4">Si e do porosinë?</h2>
                    <div className="flex items-center space-x-4 mb-4">
                        <label className="flex items-center">
                            <input type="radio" name="deliveryType" value="delivery" defaultChecked />
                            <span className="ml-2">Delivery</span>
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="deliveryType" value="takeaway" />
                            <span className="ml-2">Takeaway</span>
                        </label>
                    </div>
                    <input
                        type="text"
                        placeholder="Në cilën orë e doni porosinë?"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <button
                        className="w-full px-4 py-2 bg-green-500 text-white rounded-lg"
                        onClick={goBack}
                    >
                        Kthehu te porosia
                    </button>
                </div>
                <div className="w-full md:w-1/3 p-4 border-l border-gray-200">
                    <h2 className="text-2xl mb-4">Porosia jote</h2>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        {Object.keys(cart).map((key) => (
                            <div key={key} className="flex justify-between mb-4">
                                <span>{cart[key].name}</span>
                                <span>{cart[key].quantity}</span>
                                <span>{cart[key].price * cart[key].quantity} L</span>
                            </div>
                        ))}
                        <p className="font-bold">Totali: {total + 120} L</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
