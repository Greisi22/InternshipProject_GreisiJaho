import React from 'react';

function CheckoutPage() {
    return (
        <div className="container mx-auto p-4">
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
                    <h2 className="text-2xl mb-4">Të dhënat e tua</h2>
                    <input
                        type="text"
                        placeholder="Vendosni celularin"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <input
                        type="password"
                        placeholder="Fjalëkalimi"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <h2 className="text-2xl mb-4">Mënyra e pagesës</h2>
                    <select className="w-full p-2 mb-4 border border-gray-300 rounded">
                        <option value="cash">CASH</option>
                    </select>
                </div>
                <div className="w-full md:w-1/3 p-4 border-l border-gray-200">
                    <h2 className="text-2xl mb-4">Porosia juaj</h2>
                    {/* Order summary would go here */}
                    <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg">Kryej Porosinë</button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
