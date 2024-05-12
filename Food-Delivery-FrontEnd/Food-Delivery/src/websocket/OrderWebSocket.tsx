import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const RestaurantOrdersComponent = () => {
    const restaurantId = 1; // Hardcoded restaurant ID
    const [orders, setOrders] = useState([]);
    const [stompClient, setStompClient] = useState(null);

    useEffect(() => {
        const socketUrl = 'http://localhost:8080/ws'; // Replace with your WebSocket endpoint
        const socket = new SockJS(socketUrl);
        const stomp = Stomp.over(socket);
        stomp.connect({}, () => {
            console.log('Connected to WebSocket');
            setStompClient(stomp);

            stomp.subscribe(`/topic/restaurant-${restaurantId}-orders`, (message) => {
                const newOrder = JSON.parse(message.body);
                setOrders((prevOrders) => [...prevOrders, newOrder]);
            });
        });

        return () => {
            if (stompClient) {
                stompClient.disconnect();
            }
        };
    }, []);

    const placeOrder = () => {
        if (stompClient) {
            const order = {
                id: Math.floor(Math.random() * 1000), // Example order ID
                message: `New order for restaurant ${restaurantId}`,
            };
            stompClient.send(`/app/orders`, {}, JSON.stringify(order)); // Change the destination to match the backend controller mapping
        }
    };

    return (
        <div>
            <h2>Restaurant Orders</h2>
            <button onClick={placeOrder}>Place Order</button> {/* Button to trigger placeOrder function */}
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>{order.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantOrdersComponent;
