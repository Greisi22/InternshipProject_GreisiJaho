import { useState } from 'react';
import { Pagination } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import { products } from 'src/data/MockData'; 
import { Delete } from '@mui/icons-material';
import pizzaImage from 'src/assets/pizza.png';

function RestaurantMenu() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Define state variables
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7);
    const [selectedArray, setSelectedArray] = useState<number[]>([]);
    const [data, setData] = useState(products);
    const [loading, setLoading] = useState(false);

    // Slice data to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data?.length || 0);
    const currentData = data?.slice(startIndex, endIndex) || [];

    // Handle page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleEdit = (id: number) => {
        console.log(`Editing product with ID ${id}`);
        // Navigate to /Administrator/EditMenu
        navigate('/Administrator/EditMenu');
    };

    const handleDelete = (id: number) => {
        const updatedData = data.filter(product => product.id !== id);
        setData(updatedData);
    };

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 table-sm">
                    <thead className="h-[40px] text-xs text-gray-700 uppercase bg-gray-300">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center"></div>
                            </th>
                            {['Product Name', 'Image', 'Ingredients', 'Price', 'Actions'].map((columnName, index) => (
                                <th key={index} scope="col" className="px-6">
                                    {columnName}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {loading === false ? (
                            currentData.map((product, index) => (
                                <tr
                                    key={index + startIndex}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
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
                                                className="sr-only"
                                            >
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <td className="px-6 whitespace-nowrap">{product.name}</td>
                                    <td className="px-6 whitespace-nowrap">
                                        <img src={pizzaImage} alt={product.name} className="h-12 w-12" />
                                    </td>
                                    <td className="px-6 whitespace-nowrap">{product.ingredients.join(', ')}</td>
                                    <td className="px-6 whitespace-nowrap">${product.price}</td>
                                    <td className="px-6 py-4 flex space-x-2">
                                        {/* Edit Button */}
                                        <a
                                            href="#"
                                            className="text-blue-500"
                                            onClick={() => handleEdit(product.id)}
                                            style={{ cursor: 'pointer', maxWidth: '2.5rem', padding: '3px', marginTop: '8px', display:'block' }}
                                        >
                                            Edit
                                        </a>
                                        {/* Delete Button */}
                                        <Delete
                                            className="icon"
                                            onClick={() => handleDelete(product.id)}
                                            style={{ cursor: 'pointer', maxWidth: '2.5rem', padding: '3px', marginTop: '8px', display:'block' }}
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="px-6 py-4" colSpan={5}>
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

export default RestaurantMenu;
