import { useState } from 'react';
import { Pagination } from 'antd';
import { restaurants as initialRestaurants, users } from 'src/data/MockData';
import deleteIcon from 'src/assets/Icons/EntryPage/delete.png';
import editIcon from 'src/assets/Icons/EntryPage/edit.png';
import { useNavigate } from 'react-router-dom';

function RevenueTable() {
    const navigate = useNavigate();

    // column names
    const columnNames = ['ID', 'Restaurant Name', 'Email Address', 'Done Payments', 'Print Bill', 'Total Amount'];
//
    // Define state variables
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7);
    const [selectedArray, setSelectedArray] = useState<number[]>([]);
    const [loading] = useState(false);
    const [data, setData] = useState(initialRestaurants);

    //per te ber display current page 
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data?.length || 0);
    const currentData = data?.slice(startIndex, endIndex) || [];

    // Handle page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleEdit = (id: number) => {
        console.log(`Editing restaurant with ID ${id}`);
        navigate(`/Administrator/EditRestaurant`);
    };

    // view button click
    const handlePrintBill = () => {
        // not yet implemented 
    };

    // delete icon
    const handleDelete = (id: number) => {
        const updatedData = data.filter(restaurant => restaurant.id !== id);
        setData(updatedData);
    };

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-sm">
                    <thead className="h-[40px] text-xs text-gray-700 uppercase bg-gray-500" style={{ backgroundColor: 'rgb(209, 209, 209)' }}>
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center"></div>
                            </th>
                            {columnNames.map((columnName, index) => (
                                <th key={index} scope="col" className="px-6">
                                    {columnName}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {loading === false ? (
                            currentData.map((restaurant, index) => (
                                <tr
                                    key={index + startIndex}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center whitespace-nowrap">
                                            <input
                                                defaultChecked={selectedArray.includes(index + startIndex)}
                                                onChange={() => {
                                                    const updatedSelectedArray = [...selectedArray];
                                                    if (updatedSelectedArray.includes(index + startIndex)) {
                                                        updatedSelectedArray.splice(
                                                            updatedSelectedArray.indexOf(index + startIndex),
                                                            1,
                                                        );
                                                    } else {
                                                        updatedSelectedArray.push(index + startIndex);
                                                    }
                                                    setSelectedArray(updatedSelectedArray);
                                                }}
                                                id={`checkbox-table-search-${index}`}
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor={`checkbox-table-search-${index}`}
                                                className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <td className="px-6 whitespace-nowrap">{restaurant.id}</td>
                                    <td className="px-6 whitespace-nowrap">{restaurant.name}</td>
                                    <td className="px-6 whitespace-nowrap">{users.find(user => user.id === restaurant.restaurantManager.userId)?.userEmail}</td>
                                    <td className="px-6 whitespace-nowrap">{restaurant.donePayments}</td>
                                    <td className="px-6 whitespace-nowrap">
                                        <div className="flex space-x-2 items-center">
                                            {/* Print Button */}
                                            <button className="btn btn-primary-print" onClick={handlePrintBill} style={{ width: '26%', padding: '7px', fontSize: '16px', borderRadius: '6px', cursor: 'pointer', backgroundColor: '#16C098', color: '#fff' }}>Print</button>
                                            {/* Edit Button */}
                                            <img
                                                src={editIcon}
                                                alt="Edit Icon"
                                                className="icon"
                                                onClick={() => handleEdit(restaurant.id)}
                                                style={{ cursor: 'pointer', maxWidth: '2.5rem', padding: '6px' }}
                                            />
                                            {/* Delete Button */}
                                            <img
                                                src={deleteIcon}
                                                alt="Delete Icon"
                                                className="icon"
                                                onClick={() => handleDelete(restaurant.id)}
                                                style={{ cursor: 'pointer', maxWidth: '2.5rem', padding: '6px' }}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-6 whitespace-nowrap">{restaurant.totalAmount}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="px-6 py-4" colSpan={columnNames.length}>
                                    Loading...
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end mt-4">
               
                <Pagination
                    current={currentPage}
                    total={data.length}
                    defaultPageSize={itemsPerPage}
                    showSizeChanger={false}
                    onChange={handlePageChange}
                />
            </div>
        </>
    );
}

export default RevenueTable;
