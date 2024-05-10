import React, { useState, useEffect } from 'react';
import { FaSearch, FaTrashAlt } from 'react-icons/fa';

// Import UserList data and interface
import { UserList } from 'src/data/MockData';
import { getAllUser, deleteUser } from 'src/api/localhost/Administrator/userApi';
import { User } from 'src/types/Restaurant';

export const TableUser = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [users, setUsers] = useState<User[]>([]);
    const [sortDirection, setSortDirection] = useState('asc'); // State to hold the sort direction
    const [sortBy, setSortBy] = useState('id'); // State to hold the field to sort by

    let totalItems = 0;
    if (users != undefined) {
        totalItems = users.length;
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    let displayedItems: any = [];
    if (users != undefined) {
        displayedItems = users?.slice(startIndex, endIndex);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllUser();
                console.log('Resonse from Api Greisi: ', response);
                setUsers(response);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchData();
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const toggleActive = (id) => {
        // Find the user by id
        const updatedUsers = users.map((user) => {
            if (user.userId === id) {
                // Toggle the active status
                user.active = user.active === 'Active' ? 'Inactive' : 'Active';
            }
            return user;
        });
        // Update the state with the new users array
        setUsers(updatedUsers);
    };

    const handleSort = (field) => {
        if (field === sortBy) {
            // If the same field is clicked, toggle the sort direction
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            // If a different field is clicked, set it as the new sort field and set the sort direction to ascending
            setSortBy(field);
            setSortDirection('asc');
        }
    };

    const handleDelete = (id: number) => {
        // Filter out the user with the given id
        const updatedUsers = users.filter((user) => user.userId !== id);
        deleteUser(id);
        // Update the state with the new users array
        setUsers(updatedUsers);
    };

    // Sort the displayed items based on the active status
    displayedItems.sort((a, b) => {
        // Compare function based on the field and sort direction
        const compare = (a, b) => {
            if (a === b) return 0;
            return a < b ? -1 : 1;
        };

        if (sortBy === 'active') {
            // Sort by active status
            return sortDirection === 'asc'
                ? compare(a.active, b.active)
                : compare(b.active, a.active);
        } else {
            // Sort by other fields
            return sortDirection === 'asc'
                ? compare(a[sortBy], b[sortBy])
                : compare(b[sortBy], a[sortBy]);
        }
    });

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex justify-between mb-4">
                <div className="relative mr-auto ml-6 mt-5 ">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-12 py-2 w-64 border rounded-3xl focus:outline-none focus:border-blue-500"
                    />
                    <div className="absolute top-0 right-0 flex items-center justify-center h-full w-10 text-gray-600">
                        <FaSearch />
                    </div>
                </div>
                <button className="mr-6 mt-4 bg-blue-500 text-white py-2 px-4 rounded-3xl">
                    Add USER +
                </button>
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
                            <th scope="col" className="px-6 py-3" onClick={() => handleSort('id')}>
                                ID
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3"
                                onClick={() => handleSort('date')}>
                                <div className="flex items-center">
                                    Date
                                    <a href="#">
                                        <svg
                                            className="w-3 h-3 ms-1.5"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg>
                                    </a>
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3"
                                onClick={() => handleSort('email')}>
                                <div className="flex items-center">
                                    Email Address
                                    <a href="#">
                                        <svg
                                            className="w-3 h-3 ms-1.5"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg>
                                    </a>
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3"
                                onClick={() => handleSort('active')}>
                                <div className="flex items-center">
                                    Active
                                    <a href="#">
                                        <svg
                                            className="w-3 h-3 ms-1.5"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg>
                                    </a>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedItems.map((user) => (
                            <tr
                                key={user.userId}
                                className="border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input
                                            id={`checkbox-table-search-${user.userId}`}
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor={`checkbox-table-search-${user.userId}`}
                                            className="sr-only">
                                            checkbox
                                        </label>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {user.userId}
                                </td>
                                <td className="px-6 py-4">{user.date}</td>
                                <td className="px-6 py-4">{user.userEmail}</td>
                                <td className="px-6 py-4" onClick={() => toggleActive(user.userId)}>
                                    <div
                                        className={`inline-block rounded-full w-3 h-3 mr-2 ${user.active === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                    <span
                                        className={`bg-${user.active === 'Active' ? 'green' : 'red'}-200 px-2 py-1 rounded cursor-pointer`}>
                                        {user.active}
                                    </span>
                                </td>
                                <td className="flex items-center px-6 py-4">
                                    <FaTrashAlt
                                        className="text-red-600 dark:text-red-500 hover:cursor-pointer mr-3"
                                        onClick={() => handleDelete(user.userId)} // Attach onClick event handler for delete
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableUser;