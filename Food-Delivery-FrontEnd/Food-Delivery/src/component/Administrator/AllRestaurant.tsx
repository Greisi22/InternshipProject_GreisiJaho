import { useState, useEffect } from 'react';
import { Pagination } from 'antd'; // Make sure you have imported Pagination from antd
import deleteIcon from 'src/assets/Icons/EntryPage/delete.png';
import { useNavigate } from 'react-router-dom';
import { getApprovedRestaurants } from 'src/api/localhost/Administrator/restaurantsApi';
import { RestaurantAproved } from 'src/types/Restaurant';
import { deleteRestaurant } from 'src/api/localhost/Administrator/restaurantsApi';

function AllRestaurant() {
    const navigate = useNavigate();

    const columnNames = ['Restaurant Name', 'ID', 'Phone Number', 'Email', 'Actions'];
    const [fixedData, setfixedData] = useState<RestaurantAproved[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7);
    const [selectedArray, setSelectedArray] = useState<number[]>([]);
    const [data, setData] = useState<RestaurantAproved[]>([]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data?.length || 0);
    const currentData = data?.slice(startIndex, endIndex) || [];

    // Handle page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleEdit = (name: string) => {
        console.log(`Editing restaurant with ID ${name}`);
        navigate(`/Administrator/EditRestaurant`);
    };

    // view button click
    const handleView = () => {
        // Logic to view details
    };

    const handleDelete = async (name: string) => {
        try {
            await deleteRestaurant(name);
            console.log('Restaurant deleted successfully.');
        } catch (error: any) {
            console.log('Error deleting restaurant:', error.message);
        }
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value != null) {
            const searchString = event.target.value.toLowerCase();
            const filteredData = filteredRestaurants(searchString);
            setData(searchString !== '' ? filteredData : fixedData);
        }
    };

    const filteredRestaurants = (search: string) => {
        return fixedData.filter((restaurant) => {
            const lowerCaseSearch = search.toLowerCase();
            return Object.values(restaurant).some(
                (value) =>
                    typeof value === 'string' && value.toLowerCase().includes(lowerCaseSearch),
            );
        });
    };

    const fetchData = async () => {
        const response = await getApprovedRestaurants();
        setData(response);
        setfixedData(response);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex justify-between mb-4">
                    <div className="relative ml-auto mt-4 mr-6">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-12 py-2 w-64 border rounded focus:outline-none focus:border-blue-500"
                            onChange={handleSearch}
                        />
                        <div className="absolute top-0 right-0 flex items-center justify-center h-full w-10 text-gray-600">   
                        </div>
                    </div>
                </div>

                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-sm">
                    <thead
                        className="h-[40px] text-xs text-gray-700 uppercase bg-gray-500"
                        style={{ backgroundColor: 'rgb(209, 209, 209)' }}>
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
                        { currentData.length > 0 && currentData.map((restaurant, index) => (
                            <tr
                                key={index + startIndex}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center whitespace-nowrap">
                                        <input
                                            defaultChecked={selectedArray.includes(index + startIndex)}
                                            onChange={() => {
                                                const updatedSelectedArray = [...selectedArray];
                                                if (
                                                    updatedSelectedArray.includes(
                                                        index + startIndex,
                                                    )
                                                ) {
                                                    updatedSelectedArray.splice(
                                                        updatedSelectedArray.indexOf(
                                                            index + startIndex,
                                                        ),
                                                        1,
                                                    );
                                                } else {
                                                    updatedSelectedArray.push(
                                                        index + startIndex,
                                                    );
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

                                <td className="px-6 whitespace-nowrap">{restaurant.name}</td>
                                <td className="px-6 whitespace-nowrap">{restaurant.name}</td>
                                <td className="px-6 whitespace-nowrap">Phone Number</td>
                                <td className="px-6 whitespace-nowrap">
                                    {/* {
                                        users.find(
                                            (user) =>
                                                // user.id === restaurant.restaurantManager.userId,
                                        )?.userEmail
                                    } */}
                                </td>
                                <td className="px-6 py-4 flex space-x-2">
                                    {/* Edit Button */}
                                    <button
                                        className="btn btn-primary-small"
                                        style={{
                                            width: '30%',
                                            padding: '12px',
                                            fontSize: '16px',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            backgroundColor: '#16C098',
                                            color: '#fff',
                                        }}
                                        onClick={() => handleEdit(restaurant.name)}>
                                        Edit
                                    </button>
                                    {/* View Button */}
                                    <button
                                        className="btn btn-view"
                                        style={{
                                            width: '30%',
                                            fontSize: '13px',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            backgroundColor: '#EAEAEA',
                                            color: '#000',
                                            border: '1px solid #000',
                                        }}
                                        onClick={handleView}>
                                        View
                                    </button>
                                    {/* Delete Button */}
                                    <img
                                        src={deleteIcon}
                                        alt="Delete Icon"
                                        className="icon"
                                        onClick={() => handleDelete(restaurant.name)}
                                        style={{
                                            cursor: 'pointer',
                                            maxWidth: '2.5rem',
                                            padding: '6px',
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                        {currentData.length === 0 && (
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

export default AllRestaurant;
