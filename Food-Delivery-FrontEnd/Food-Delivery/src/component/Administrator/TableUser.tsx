import React, { useState } from 'react';
import { FaSearch, FaTrashAlt } from 'react-icons/fa';

// Import UserList data and interface
import { UserList } from 'src/data/MockData';

export const TableUser = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const totalItems = UserList.length;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const displayedItems = UserList.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg  ">
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
        <button className="mr-6 mt-4 bg-blue-500 text-white py-2 px-4 rounded-3xl">Add USER +</button>
      </div>
      <div className="px-6 pr-6 mb-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Email Address
              </th>
              <th scope="col" className="px-6 py-3">
                Active
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((user) => (
              <tr key={user.id} className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input id={`checkbox-table-search-${user.id}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor={`checkbox-table-search-${user.id}`} className="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.id}
                </th>
                <td className="px-6 py-4">
                  {user.date.toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  {user.email}
                </td>
                <td className="px-6 py-4">
                  <div className={`inline-block rounded-full w-3 h-3 mr-2 ${user.active === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className={`bg-${user.active === 'Active' ? 'green' : 'red'}-200 px-2 py-1 rounded`}>
                    {user.active}
                  </span>
                </td>
                <td className="flex items-center px-6 py-4">
                  <FaTrashAlt className="text-red-600 dark:text-red-500 hover:cursor-pointer mr-3" />
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
