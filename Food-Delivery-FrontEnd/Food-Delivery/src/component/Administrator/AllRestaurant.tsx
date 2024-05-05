import React, { useState } from 'react';
import { restaurants as initialRestaurants, users } from 'src/data/MockData';
import './styles/AllRestaurants.css';
import deleteIcon from 'src/assets/Icons/EntryPage/delete.png';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

function AllRestaurants() {
    const [restaurants, setRestaurants] = useState(initialRestaurants);
    const [currentPage, setCurrentPage] = useState(0);
    const [editableItemId, setEditableItemId] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const itemsPerPage = 4;
    const navigate = useNavigate();

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleSort = (criteria) => {
        if (sortBy === criteria) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(criteria);
            setSortOrder('asc');
        }
    };

    const sortedRestaurants = () => {
        if (sortBy) {
            return [...restaurants].sort((a, b) => {
                const aValue = a[sortBy];
                const bValue = b[sortBy];
                if (sortOrder === 'asc') {
                    return aValue.localeCompare(bValue);
                } else {
                    return bValue.localeCompare(aValue);
                }
            });
        }
        return restaurants;
    };

    const offset = currentPage * itemsPerPage;
    const paginatedRestaurants = sortedRestaurants().slice(offset, offset + itemsPerPage);

    const handleDelete = (id) => {
        console.log(`Deleting restaurant with ID ${id}`);
        const updatedRestaurants = restaurants.filter(restaurant => restaurant.id !== id);
        setRestaurants(updatedRestaurants);
        console.log(`Deleted restaurant with ID ${id}`);
    };

    const handleView = (id) => {
        console.log(`Viewing restaurant with ID ${id}`);
        // Navigon + gets the id of the restaurant 
        navigate(`/restaurants/${id}`);
    };

    const handleEdit = () => {
        console.log(`Navigating to EditRestaurant page`);
        navigate(`/Administrator/EditRestaurant`);
    };

    const handleSave = (id) => {
        console.log(`Saving changes for restaurant with ID ${id}`);
        setEditableItemId(null);
    };

    return (
        <div className="container">
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th onClick={() => handleSort('name')}>Restaurant Name</th>
                        <th onClick={() => handleSort('id')}>ID</th>
                        <th onClick={() => handleSort('phoneNumber')}>Phone Number</th>
                        <th onClick={() => handleSort('email')}>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedRestaurants.map(restaurant => (
                        <tr key={restaurant.id}>
                            <td>
                                {editableItemId === restaurant.id ? (
                                    <input type="text" value={restaurant.name} onChange={(e) => {}} />
                                ) : (
                                    restaurant.name
                                )}
                            </td>
                            <td>{restaurant.id}</td>
                            <td>
                                {editableItemId === restaurant.id ? (
                                    <input type="text" value={restaurant.phoneNumber} onChange={(e) => {}} />
                                ) : (
                                    restaurant.phoneNumber
                                )}
                            </td>
                            <td>
                                {editableItemId === restaurant.id ? (
                                    <input type="text" value={users.find(user => user.id === restaurant.restaurantManager.userId)?.userEmail} onChange={(e) => {}} />
                                ) : (
                                    users.find(user => user.id === restaurant.restaurantManager.userId)?.userEmail
                                )}
                            </td>
                            <td className="actions-container">
                                 <button className="btn btn-primary mr-2" onClick={handleEdit}>Edit</button>
                             
                                <button className="btn btn-success" onClick={() => handleView(restaurant.id)}>View</button>
                                <img src={deleteIcon} alt="Delete Icon" className="icon" onClick={() => handleDelete(restaurant.id)} style={{ cursor: 'pointer' }} />
                            </td>
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
    );
}

export default AllRestaurants;
