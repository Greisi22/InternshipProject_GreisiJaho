import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { restaurants as initialRestaurants, users } from 'src/data/MockData';
import './styles/EditRestaurant.css';

interface Restaurant {
    id: number;
    name: string;
    website: string;
    restaurantManager: {
        userId: number;
    };
    isAccepted: boolean;
    donePayments: number;
    totalAmount: number;
}

interface RestaurantManager {
    id: number;
    userEmail: string;
    userRole: string;
}

const EditRestaurant = () => {
    const { id } = useParams<{ id: string }>();
    const [restaurant, setRestaurant] = useState<Restaurant>({
        id: 0,
        name: '',
        website: '',
        restaurantManager: { userId: 0 },
        isAccepted: false,
        donePayments: 0,
        totalAmount: 0
    });
    const [restaurantManager, setRestaurantManager] = useState<RestaurantManager>({
        id: 0,
        userEmail: '',
        userRole: ''
    });

    useEffect(() => {
        const selectedRestaurant = initialRestaurants.find(restaurant => restaurant.id === parseInt(id || ""));
        const selectedManager = users.find(user => user.id === selectedRestaurant?.restaurantManager.userId);
        if (selectedRestaurant) {
            setRestaurant(selectedRestaurant);
        }
        if (selectedManager) {
            setRestaurantManager(selectedManager);
        }
    }, [id]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted!");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRestaurant(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleManagerEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setRestaurantManager(prevState => ({
            ...prevState,
            userEmail: value
        }));
    };

    return (
        <div className="edit-restaurant-container">
            <h2>Edit Restaurant</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Restaurant Name</label>
                    <input type="text" id="name" name="name" value={restaurant.name} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" value={restaurant.phoneNumber || ''} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Manager Email</label>
                    <input type="text" id="email" name="email" value={restaurantManager.userEmail || ''} onChange={handleManagerEmailChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="website">Website:</label>
                    <input type="text" id="website" name="website" placeholder="www.restaurantwebsite.com" value={restaurant.website} onChange={handleInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
        </div>
    );
};

export default EditRestaurant;
