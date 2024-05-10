import { useState } from 'react';
import { Close as CloseIcon, CloudUpload as CloudUploadIcon } from '@mui/icons-material'; // Import CloudUploadIcon
import { IconButton } from '@mui/material'; // Import IconButton for Material UI icons

function EditMenu() {
    const [productName, setProductName] = useState('');
    const [image, setImage] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');

    const handleRegister = () => {
        // Here you can handle the form submission, e.g., send the data to your backend
        // You can add validation here before submitting the form
    };

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.value);
    };

    const handleIngredientsChange = (event) => {
        setIngredients(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleCancel = () => {
        // Reset all form fields and error state
        setProductName('');
        setImage('');
        setIngredients('');
        setPrice('');
        setError('');
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
            {/* Background overlay */}
            <section className="relative z-10 w-full md:w-[90%] max-w-xl">
                <div className="relative shadow-3xl w-full bg-white border border-gray-500 rounded-lg dark:border md:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 overflow-auto" >
                   
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Edit Menu 
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
                                    value={productName}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Product Name"
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
                                        value={image}
                                        className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Image URL"
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
                                    value={ingredients}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Ingredients"
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
                                    value={price}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Price"
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
                                className="w-full py-2 px-4 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
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

export default EditMenu;
