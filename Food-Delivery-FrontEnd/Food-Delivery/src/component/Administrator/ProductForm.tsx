import React, { useEffect, useState } from 'react';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Product } from 'src/types/Restaurant';
import { createProduct } from 'src/api/localhost/Product/ProductsApi';
function ProductForm({
    setNewProductClicked,
    setEditedProduct,
    specificProduct,
}: {
    setNewProductClicked: any;
    setEditedProduct: any;
    specificProduct: Product;
}) {
    const [productName, setProductName] = useState('');
    const [image, setImage] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');
    const [isnewProduct, setnewProduct] = useState(false);

    useEffect(() => {
        if (specificProduct.id < 0) {
            setnewProduct(true);
        }
    }, []);

    const handleRegister = () => {
        if (isnewProduct) {
            createProduct(specificProduct);
            console.log('1');
        } else {
            //edit api
            console.log('2');
        }
    };

    const handleProductNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductName(event.target.value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.value);
    };

    const handleIngredientsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIngredients(event.target.value);
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value);
    };

    const handleCancel = () => {
        // Resetting state variables to their initial values
        setProductName('');
        setImage('');
        setIngredients('');
        setPrice('');
        setError('');
        setEditedProduct(false);
        setNewProductClicked(false);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-lg">
            {/* Background image or color */}
            <div className="absolute inset-0 bg-white-900 opacity-50"></div>
            <div className="absolute inset-0 backdrop-blur-lg"></div>
            <section className="relative z-10 w-full md:w-[90%] max-w-xl">
                <div className="relative shadow-3xl w-full bg-white border border-gray-500 rounded-lg dark:border md:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 overflow-auto">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Add Product
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            <div className="text-red-700">{error}</div>
                            <div>
                                <label
                                    htmlFor="product-name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Menu Item Name
                                </label>
                                <input
                                    onChange={handleProductNameChange}
                                    type="text"
                                    name="product-name"
                                    id="product-name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Product Name"
                                    value={productName}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="image"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Image
                                </label>
                                <div className="flex items-center space-x-2">
                                    <input
                                        onChange={handleImageChange}
                                        type="text"
                                        name="image"
                                        id="image"
                                        className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Image URL"
                                        value={image}
                                    />
                                    <IconButton component="label" htmlFor="upload-image">
                                        <CloudUploadIcon />
                                        <input
                                            type="file"
                                            id="upload-image"
                                            style={{ display: 'none' }}
                                        />
                                    </IconButton>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="ingredients"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Ingredients
                                </label>
                                <input
                                    onChange={handleIngredientsChange}
                                    type="text"
                                    name="ingredients"
                                    id="ingredients"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Ingredients"
                                    value={ingredients}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="price"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Price
                                </label>
                                <input
                                    onChange={handlePriceChange}
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Price"
                                    value={price}
                                />
                            </div>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleRegister();
                                }}
                                className="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Submit
                            </button>

                            <button
                                type="button"
                                onClick={handleCancel}
                                className="w-full py-2 px-4 bg-white-300 text-gray-600 rounded-md hover:bg-white-400 focus:outline-none focus:bg-white-400 mr-2">
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductForm;
