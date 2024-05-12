import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const OrderComponent = () => {
    const [stompClient, setStompClient] = useState(null);

    useEffect(() => {
        const socketUrl = 'http://localhost:8080/ws'; // Replace with your WebSocket endpoint
        const socket = new SockJS(socketUrl);
        const stomp = Stomp.over(socket);

        stomp.connect({}, () => {
            console.log('STOMP connected');
            setStompClient(stomp);
        }, (error) => {
            console.error('STOMP error:', error);
        });

        return () => {
            if (stompClient) {
                stompClient.disconnect();
            }
        };
    }, []);

    const placeOrder = (order) => {
        if (stompClient && order) {
            stompClient.send('/app/placeOrder', {}, order);
        }
    };

    const handlePlaceOrder = () => {
        const order = 'Your order details'; // Replace with actual order details
        placeOrder(order);
    };

    return (
        <div>
            <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
    );
};

export default OrderComponent;
