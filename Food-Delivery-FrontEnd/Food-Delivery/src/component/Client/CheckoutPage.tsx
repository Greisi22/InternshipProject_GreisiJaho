import React from 'react';
import { useLocation } from 'react-router-dom';

const CheckoutPage = () => {
    // Get the order data from location state
    const location = useLocation();
    const { order } = location.state || {};

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-8">Finalizimi i porosisë</h2>
            {/* Address section */}
            <div className="bg-gray-100 rounded-lg px-6 py-8 mb-8">
                <h3 className="text-xl font-semibold mb-4">Adresa e dërgimit</h3>
                <p className="text-gray-600 mb-4">Vendosni adresen ku doni t'ju vije ushqimi</p>
                {/* Search input for the location */}
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                    <input type="text" placeholder="Vendosni adresen tuaj" className="outline-none flex-grow" />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">Kërko</button>
                </div>
            </div>
            
            {/* Order details section */}
            <div className="bg-gray-100 rounded-lg px-6 py-8 mb-8">
                <h3 className="text-xl font-semibold mb-4">Porosia juaj</h3>
                <p className="text-gray-600 mb-4">Detaje mbi porosinë? Shkruaji këtu</p>
                {/* Display order details */}
                {order ? (
                    <>
                        {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between mb-2">
                                <p className="text-gray-800">{item.name}</p>
                                <p className="text-gray-800">{item.price} L</p>
                            </div>
                        ))}
                        <hr className="my-4 border-gray-400" />
                        <div className="flex justify-between mb-2">
                            <p className="text-gray-600">Delivery</p>
                            <p className="text-gray-800">{order.delivery} L</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p className="text-gray-600">Kuponi</p>
                            <p className="text-gray-800">{order.discount} L</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-600">Totali për të paguar</p>
                            <p className="text-gray-800">{order.total} L</p>
                        </div>
                    </>
                ) : (
                    <p className="text-gray-600">No order details found</p>
                )}
            </div>
            {/* Payment section */}
            <div className="bg-gray-100 rounded-lg px-6 py-8 mb-8">
                <h3 className="text-xl font-semibold mb-4">Mënyra e pagesës</h3>
                <p className="text-gray-600 mb-4">Default është Cash, zgjidh mënyrën</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">CASH</button>
                {/* Add more payment options */}
            </div>
            {/* Checkout button */}
            <div className="flex justify-center items-center">
                <button className="bg-green-500 text-white px-6 py-3 rounded-md">Kryej Porosinë</button>
                <p className="text-sm ml-4 text-green-500">Super! Sapo plotësove minimumin e porosisë!</p>
            </div>
        </div>
    );
};

export default CheckoutPage;