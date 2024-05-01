import React, { useState } from 'react';
import { restaurants as initialRestaurants, users } from 'src/data/MockData';
import './styles/RevenueTable.css';
import editIcon from 'src/assets/Icons/EntryPage/edit.png';
import deleteIcon from 'src/assets/Icons/EntryPage/delete.png';
import ReactPaginate from 'react-paginate';

function RevenueTable() {
    const [restaurants, setRestaurants] = useState(initialRestaurants);
    const [currentPage, setCurrentPage] = useState(0);
    const [editableItemId, setEditableItemId] = useState(null);

    const handleEdit = (id: number, name) => {
        console.log(`Editing restaurant with ID ${id}`);
        
        setEditableItemId(id);
    };

    const handleDelete = (id) => {
        console.log(`Deleting restaurant with ID ${id}`);
        const updatedRestaurants = restaurants.filter((restaurant) => restaurant.id !== id);
        setRestaurants(updatedRestaurants);
    };

    const handleSubmitEdit = (id, fieldName, newValue) => {
        console.log(`Submitting edit for restaurant with ID ${id} and new ${fieldName}: ${newValue}`);
        const updatedRestaurants = restaurants.map((restaurant) => {
            if (restaurant.id === id) {
                return { ...restaurant, [fieldName]: newValue };
            }
            return restaurant;
        });
        setRestaurants(updatedRestaurants);
        setEditableItemId(null);
    };

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const itemsPerPage = 4;
    const offset = currentPage * itemsPerPage;
    const paginatedRestaurants = restaurants.slice(offset, offset + itemsPerPage);

    return (
        <div className="table-container">
            <div className="table-scroll-container">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="p-4"><input type="checkbox" /></th>
                            <th className="p-4">ID</th>
                            <th className="p-4">Restaurant Name</th>
                            <th className="p-4">Email Address</th>
                            <th className="p-4">Done Payments</th>
                            <th className="p-4">Pending Payments</th>
                            <th className="p-4">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedRestaurants.map((restaurant, index) => (
                            <tr key={restaurant.id}>
                                <td className="p-4"><input type="checkbox" /></td>
                                <td className="p-4">{restaurant.id}</td>
                                <td className="p-4">
                                    {editableItemId === restaurant.id ? (
                                        <input
                                            type="text"
                                            value={restaurant.name}
                                            onChange={(e) => handleSubmitEdit(restaurant.id, 'name', e.target.value)}
                                        />
                                    ) : (
                                        restaurant.name
                                    )}
                                </td>
                                <td className="p-4">
                                    {editableItemId === restaurant.id ? (
                                        <input
                                            type="text"
                                            value={users.find((user) => user.id === restaurant.restaurantManager.userId)?.userEmail}
                                            onChange={(e) => handleSubmitEdit(restaurant.id, 'email', e.target.value)}
                                        />
                                    ) : (
                                        users.find((user) => user.id === restaurant.restaurantManager.userId)?.userEmail
                                    )}
                                </td>
                                <td className="p-4">
                                    {editableItemId === restaurant.id ? (
                                        <input
                                            type="text"
                                            value={restaurant.donePayments}
                                            onChange={(e) => handleSubmitEdit(restaurant.id, 'donePayments', e.target.value)}
                                        />
                                    ) : (
                                        restaurant.donePayments
                                    )}
                                </td>
                                <td className="p-4 icon-cell">
                                    <i className="fas fa-hourglass text-red-500"></i>
                                    <img src={editIcon} alt="Edit Icon" className="icon" onClick={() => handleEdit(restaurant.id, restaurant.name)} style={{ cursor: 'pointer' }} />
                                    <img src={deleteIcon} alt="Delete Icon" className="icon" onClick={() => handleDelete(restaurant.id)} style={{ cursor: 'pointer' }} />
                                </td>
                                <td className="p-4">$$</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <ReactPaginate
                    pageCount={Math.ceil(restaurants.length / itemsPerPage)}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination'}
                    previousLabel={<span>&#60;</span>}
                    nextLabel={<span>&#62;</span>}
                    activeClassName={'active'}
                />
            </div>
        </div>
    );
}

export default RevenueTable;