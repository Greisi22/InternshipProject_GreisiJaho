import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Restaurant } from 'src/types/Restaurant';
import { createRestaurant } from 'src/api/localhost/Administrator/restaurantsApi';
import { putFiles } from 'src/utils/Functinalities/Restaurant'; 
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { createRestaurant1 } from 'src/utils/Functinalities/Restaurant';

 

function RestaurantForm() {
    const [restaurantName, setRestaurantName] = useState<string>('');
    const [address, setRestaurantAddress] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [website, setWebsite] = useState<string>('');
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [category, setRestaurantCategory] = useState<string>('');
    const navigate = useNavigate();

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newImageFiles = Array.from(event.target.files);
            console.log('Image files: ', newImageFiles);

            setImageFiles((prevImageFiles) => [...prevImageFiles, ...newImageFiles]);
        }
    };

     const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const categoryArray = category.split(',').map((cat) => cat.trim());

        const restaurant: Restaurant = {
            name: restaurantName,
            address: address,
            phoneNumber: phoneNumber,
            website: website,
            images: imageFiles.map(file => file.name), 
            category: categoryArray,
        };

        const createdRestaurant = await createRestaurant1(restaurant, imageFiles);

        localStorage.setItem('restaurantCreated', JSON.stringify(createdRestaurant));
        console.log(createdRestaurant);

        // Call the function to create the folder and store the image files
        await putFiles("1" , imageFiles);

        navigate('/prova4');
    };
    const handleCancel = () => {
        setRestaurantName('');
        setRestaurantAddress('');
        setPhoneNumber('');
        setWebsite('');
        setImageFiles([]);
        setRestaurantCategory('');
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-lg">
            <form
                className="max-w-lg mx-auto p-8 bg-gray-100 rounded-lg shadow-md max-h-[700px] overflow-scroll"
                onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4 text-center">Restaurant Form</h2>
                <div className="mb-4">
                    <label htmlFor="restaurant-name" className="block mb-2 font-medium text-gray-800">
                        Restaurant Name
                    </label>
                    <input
                        type="text"
                        id="restaurant-name"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Name"
                        value={restaurantName}
                        onChange={(e) => setRestaurantName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone-number" className="block mb-2 font-medium text-gray-800">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        id="phone-number"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="website" className="block mb-2 font-medium text-gray-800">
                        Website
                    </label>
                    <input
                        type="text"
                        id="website"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block mb-2 font-medium text-gray-800">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setRestaurantAddress(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block mb-2 font-medium text-gray-800">
                        Category
                    </label>
                    <input
                        type="text"
                        id="category"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter categories separated by commas"
                        value={category}
                        onChange={(e) => setRestaurantCategory(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block mb-2 font-medium text-gray-800">
                        Images
                    </label>
                    <div className="flex justify-between items-center space-x-2">
                        <div>{imageFiles.map(file => file.name).join(', ')}</div>
                        <input
                            type="file"
                            id="upload-image"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                            multiple
                        />
                        <label htmlFor="upload-image">
                            <IconButton component="span">
                                <CloudUploadIcon />
                            </IconButton>
                        </label>
                    </div>
                </div>
                <button className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
                    Submit
                </button>
                <button
                    type="button"
                    onClick={handleCancel}
                    className="mt-4 w-full py-2 px-4 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
                    Cancel
                </button>
                <p className="mt-4 text-sm text-center text-gray-600">
                    By clicking continue, you agree to our Terms of Service and Privacy Policy
                </p>
            </form>
        </div>
    );
}

export default RestaurantForm;