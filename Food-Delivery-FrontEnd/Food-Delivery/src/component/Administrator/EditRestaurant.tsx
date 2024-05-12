import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { restaurants as initialRestaurants, users } from 'src/data/MockData';
import './styles/EditRestaurant.css'; 

interface Restaurant {
    id: number;
    name: string;
    phoneNumber: string;
    website: string;
    restaurantManager: {
        userId: number;
    };
    isAccepted: boolean;
    donePayments: number;
    totalAmount: number;
}

interface UserManager {
    id: number;
    userEmail: string;
    userRole: string;
}

const EditRestaurant = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
    const [restaurantManager, setRestaurantManager] = useState<UserManager | null>(null);

    useEffect(() => {
        // Find restaurant and manager based on ID
        const selectedRestaurant = initialRestaurants.find(restaurant => restaurant.id === parseInt(id));
        const selectedManager = users.find(user => user.id === selectedRestaurant?.restaurantManager.userId);
        setRestaurant(selectedRestaurant || null);
        setRestaurantManager(selectedManager || null);
    }, [id]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted!");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRestaurant(prevState => ({
            ...(prevState || {}),
            [name]: value
        }) as Restaurant | null); // Ensure the state is of type Restaurant | null
    };

    return (
        <div className="edit-restaurant-container">
            <h2>Edit Restaurant</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Restaurant Name</label>
                    <input type="text" id="name" name="name" value={restaurant?.name || ''} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" value={restaurant?.phoneNumber || ''} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Manager Email</label>
                    <input type="text" id="email" name="email" value={restaurantManager?.userEmail || ''} readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="website">Website:</label>
                    <input type="text" id="website" name="website" placeholder="www.restaurantwebsite.com" readOnly />
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
        </div>
    );
};

export default EditRestaurant;
