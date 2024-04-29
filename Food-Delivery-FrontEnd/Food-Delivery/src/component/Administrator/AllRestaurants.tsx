import { useState } from 'react';
import { restaurants as initialRestaurants, users } from 'src/data/MockData';
import './styles/AllRestaurants.css';
import deleteIcon from 'src/assets/Icons/EntryPage/delete.png';
import ReactPaginate from 'react-paginate';


function AllRestaurants() {
    const [restaurants, setRestaurants] = useState(initialRestaurants); // State variable to hold the list of restaurants
    const [currentPage, setCurrentPage] = useState(0);
    const [editableItemId, setEditableItemId] = useState(null); // State variable to hold the ID of the editable restaurant item
    const itemsPerPage = 4; // Number of items per page

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const paginatedRestaurants = restaurants.slice(offset, offset + itemsPerPage);

    // Function for handling edit
    const handleEdit = (id) => {
        setEditableItemId(id); // Set the ID of the restaurant being edited
    };

    // Function for handling delete
    const handleDelete = (id) => {
        console.log(`Deleting restaurant with ID ${id}`);
        // Find the index of the restaurant with the given ID
        const index = restaurants.findIndex(restaurant => restaurant.id === id);
        
        // If the restaurant exists, remove it from the array
        if (index !== -1) {
            const updatedRestaurants = [...restaurants];
            updatedRestaurants.splice(index, 1);
            // Update the state with the new list of restaurants
            setRestaurants(updatedRestaurants);
            // Perform any other necessary actions with the updated data
            console.log(`Deleted restaurant with ID ${id}`);
        } else {
            console.log(`Restaurant with ID ${id} not found`);
        }
    };

    // Function for handling view
    const handleView = (id) => {
        console.log(`Viewing restaurant with ID ${id}`);
        // Implement the view functionality here
    };

    // Function for handling save
    const handleSave = (id) => {
        console.log(`Saving changes for restaurant with ID ${id}`);
        // Implement the save functionality here
        setEditableItemId(null); // Clear the editable item ID to exit edit mode
    };

    return (
        <div className="container">
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Restaurant Name</th>
                        <th>ID</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedRestaurants.map(restaurant => (
                        <tr key={restaurant.id}>
                            <td>
                                {editableItemId === restaurant.id ? (
                                    <input type="text" value={restaurant.name} onChange={(e) => {/* Handle input change */}} />
                                ) : (
                                    restaurant.name
                                )}
                            </td>
                            <td>{restaurant.id}</td>
                            <td>
                                {editableItemId === restaurant.id ? (
                                    <input type="text" value={restaurant.phoneNumber} onChange={(e) => {/* Handle input change */}} />
                                ) : (
                                    restaurant.phoneNumber
                                )}
                            </td>
                            <td>
                                {editableItemId === restaurant.id ? (
                                    <input type="text" value={users.find(user => user.id === restaurant.restaurantManager.userId)?.userEmail} onChange={(e) => {/* Handle input change */}} />
                                ) : (
                                    users.find(user => user.id === restaurant.restaurantManager.userId)?.userEmail
                                )}
                            </td>
                            <td className="actions-container">
                                {/* Edit Button */}
                                {editableItemId === restaurant.id ? (
                                    <button className="btn btn-primary mr-2" onClick={() => handleSave(restaurant.id)}>Save</button>
                                ) : (
                                    <button className="btn btn-primary mr-2" onClick={() => handleEdit(restaurant.id)}>Edit</button>
                                )}
                                {/* View Button */}
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
