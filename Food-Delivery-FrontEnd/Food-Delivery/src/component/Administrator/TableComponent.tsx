import React, { useState } from 'react';
import { restaurants } from 'src/data/MockData';
import { FaTrashAlt, FaCheck, FaSearch } from 'react-icons/fa'; // Import FontAwesome icons
import { Pagination } from 'antd';

export const TableComponent = () => {
    const [acceptedRestaurants, setAcceptedRestaurants] = useState([]);
    const [restaurantsToShow, setRestaurantsToShow] = useState(restaurants);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, restaurantsToShow?.length || 0);
    const currentData = restaurantsToShow?.slice(startIndex, endIndex) || [];

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleDelete = (id) => {
        const updatedRestaurants = restaurantsToShow.filter((restaurant) => restaurant.id !== id);
        setRestaurantsToShow(updatedRestaurants);
    };

    const handleAccept = (id) => {
        const acceptedRestaurant = restaurants.find((restaurant) => restaurant.id === id);
        setAcceptedRestaurants([...acceptedRestaurants, acceptedRestaurant]);
        // Remove the delete icon by updating the restaurants to show
        const updatedRestaurants = restaurantsToShow.filter((restaurant) => restaurant.id !== id);
        setRestaurantsToShow(updatedRestaurants);
    };

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex justify-between mb-4">
                    <div className="relative ml-auto mt-4 mr-6">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-12 py-2 w-64 border rounded focus:outline-none focus:border-blue-500"
                        />
                        <div className="absolute top-0 right-0 flex items-center justify-center h-full w-10 text-gray-600">
                            <FaSearch />
                        </div>
                    </div>
                </div>
                <div className="px-6 pr-6 mb-4">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input
                                            id="checkbox-all-search"
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label htmlFor="checkbox-all-search" className="sr-only">
                                            checkbox
                                        </label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Restaurant Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Documentation
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((restaurant) => (
                                <tr
                                    key={restaurant.id}
                                    className="border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id={`checkbox-table-search-${restaurant.id}`}
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor={`checkbox-table-search-${restaurant.id}`}
                                                className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {restaurant.id}
                                    </th>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {restaurant.name}
                                    </th>
                                    <td className="px-6 py-4">{restaurant.website}</td>
                                    <td className="px-6 py-4">{restaurant.website}</td>
                                    <td className="flex items-center px-6 py-4">
                                        {/* Show delete icon if the restaurant is not accepted */}
                                        {!acceptedRestaurants.some(
                                            (accepted) => accepted.id === restaurant.id,
                                        ) && (
                                            <FaTrashAlt
                                                className="text-red-600 dark:text-red-500 hover:cursor-pointer mr-3"
                                                onClick={() => handleDelete(restaurant.id)}
                                            />
                                        )}
                                        {/* Accept icon */}
                                        <FaCheck
                                            className="text-green-600 dark:text-green-500 hover:cursor-pointer"
                                            onClick={() => handleAccept(restaurant.id)}
                                        />
                                        {/* Show accepted message if the restaurant is in accepted list */}
                                        {acceptedRestaurants.some(
                                            (accepted) => accepted.id === restaurant.id,
                                        ) && (
                                            <span className="ml-2 text-green-600 dark:text-green-500">
                                                Accepted
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="relative  w-[90%]">
                <div className="absolute right-0">
                    <Pagination
                        current={currentPage}
                        total={restaurantsToShow.length}
                        pageSize={itemsPerPage}
                        showSizeChanger={false}
                        onChange={handlePageChange}
                    />
                </div>
            </div>
        </>
    );
};

export default TableComponent;
