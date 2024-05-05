import React, { useState } from 'react';
import { restaurants as initialRestaurants, users } from 'src/data/MockData';
import './styles/RevenueTable.css';
import editIcon from 'src/assets/Icons/EntryPage/edit.png';
import deleteIcon from 'src/assets/Icons/EntryPage/delete.png';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

function RevenueTable() {
    const [restaurants, setRestaurants] = useState(initialRestaurants);
    const [currentPage, setCurrentPage] = useState(0);
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const navigate = useNavigate();

    const handleEdit = (id) => {
        console.log(`Editing restaurant with ID ${id}`);
        navigate(`/Administrator/EditRestaurant`);
    };

    const handleDelete = (id) => {
        console.log(`Deleting restaurant with ID ${id}`);
        const updatedRestaurants = restaurants.filter((restaurant) => restaurant.id !== id);
        setRestaurants(updatedRestaurants);
    };

    const handlePrintBill = (id) => {
        console.log(`Printing bill for restaurant with ID ${id}`);
    };

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleSort = () => {
        // sorton ne baze te done payment
        const sortedRestaurants = [...restaurants].sort((a, b) => a.donePayments - b.donePayments);
        setRestaurants(sortedRestaurants);
    };

    const handleCheckboxChange = (checked) => {
        // kur selekton id checkbox for the whole column
        setSelectAllChecked(checked);
        const updatedRestaurants = restaurants.map((restaurant) => ({
            ...restaurant,
            isChecked: checked,
        }));
        setRestaurants(updatedRestaurants);
    };

    const handleIndividualCheckboxChange = (id, checked) => {
        const updatedRestaurants = restaurants.map((restaurant) => {
            if (restaurant.id === id) {
                return { ...restaurant, isChecked: checked };
            }
            return restaurant;
        });
        setRestaurants(updatedRestaurants);
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
                            <th className="p-4">
                                <input
                                    type="checkbox"
                                    checked={selectAllChecked}
                                    onChange={(e) => handleCheckboxChange(e.target.checked)}
                                />
                            </th>
                            <th className="p-4">ID</th>
                            <th className="p-4">Restaurant Name</th>
                            <th className="p-4">Email Address</th>
                            <th className="p-4" onClick={handleSort}>
                                Done Payments
                            </th>
                            <th className="p-4">Print Bill</th>
                            <th className="p-4">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedRestaurants.map((restaurant, index) => (
                            <tr key={restaurant.id}>
                                <td className="p-4">
                                    <input
                                        type="checkbox"
                                        checked={restaurant.isChecked}
                                        onChange={(e) =>
                                            handleIndividualCheckboxChange(
                                                restaurant.id,
                                                e.target.checked,
                                            )
                                        }
                                    />
                                </td>
                                <td className="p-4">{restaurant.id}</td>
                                <td className="p-4">{restaurant.name}</td>
                                <td className="p-4">
                                    {
                                        users.find(
                                            (user) =>
                                                user.id === restaurant.restaurantManager.userId,
                                        )?.userEmail
                                    }
                                </td>
                                <td className="p-4">
                                    <input
                                        type="number"
                                        value={restaurant.donePayments}
                                        onChange={(e) =>
                                            setRestaurants(
                                                restaurants.map((item) =>
                                                    item.id === restaurant.id
                                                        ? {
                                                              ...item,
                                                              donePayments: parseInt(
                                                                  e.target.value,
                                                              ),
                                                          }
                                                        : item,
                                                ),
                                            )
                                        }
                                    />
                                </td>
                                <td className="p-4 icon-cell">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handlePrintBill(restaurant.id)}>
                                        Print Bill
                                    </button>
                                    <img
                                        src={editIcon}
                                        alt="Edit Icon"
                                        className="icon"
                                        onClick={() => handleEdit(restaurant.id)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <img
                                        src={deleteIcon}
                                        alt="Delete Icon"
                                        className="icon"
                                        onClick={() => handleDelete(restaurant.id)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </td>
                                <td className="p-4">{restaurant.totalAmount}</td>
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
