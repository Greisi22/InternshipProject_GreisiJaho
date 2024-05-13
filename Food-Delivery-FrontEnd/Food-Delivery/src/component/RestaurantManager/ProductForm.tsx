import { useState } from 'react';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material'; // Import CloudUploadIcon
import { IconButton } from '@mui/material'; // Import IconButton for Material UI icons

function ProductForm() {
    const [productName, setProductName] = useState('');
    const [image, setImage] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');

    const handleRegister = () => {
        // Here you can handle the form submission, e.g., send the data to your backend
        // You can add validation here before submitting the form
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
    };

    return (
        <div className="fixed w-full">
        {/* Background image or color */}
        <div className="absolute inset-0 bg-white-900 opacity-50"></div>
        <div
            className="absolute inset-0 backdrop-blur-lg"
           ></div>
            <section className="relative z-10 w-full md:w-[90%] max-w-xl">
                <div className="relative shadow-3xl w-full bg-white border border-gray-500 rounded-lg dark:border md:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 overflow-auto" >

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
                                    value={productName} // Add value attribute to bind input value
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
                                        value={image} // Add value attribute to bind input value
                                    />
                                    <IconButton component="label" htmlFor="upload-image">
                                        <CloudUploadIcon />
                                        <input type="file" id="upload-image" style={{ display: 'none' }} />
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
                                    value={ingredients} // Add value attribute to bind input value
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
                                    value={price} // Add value attribute to bind input value
                                />
                            </div>
                            <button
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default form submission
                                    handleRegister(); // Call your registration function
                                }}
                                className="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Submit
                            </button>

                            <button
                                type="button"
                                onClick={handleCancel}
                                className="w-full py-2 px-4 bg-white-300 text-gray-600 rounded-md hover:bg-white-400 focus:outline-none focus:bg-white-400 mr-2"
                            >
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