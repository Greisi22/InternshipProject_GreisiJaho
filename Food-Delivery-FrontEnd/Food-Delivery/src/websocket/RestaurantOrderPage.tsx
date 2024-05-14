// RestaurantOrderPage.js
import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const RestaurantOrderPage = () => {
  const restaurantId = 7; // Hardcoded restaurant ID
  const [orders, setOrders] = useState([]);
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    const socketUrl = 'http://localhost:8080/ws';
    const socket = new SockJS(socketUrl);
    const stomp = Stomp.over(socket);
    stomp.connect({}, () => {
      console.log('Connected to WebSocket');
      setStompClient(stomp);

      stomp.subscribe(`/topic/restaurant-${restaurantId}-orders`, (message) => {
        const newOrder = message.body;
        setOrders((prevOrders) => [...prevOrders, newOrder]);
      });
    });

    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <h2>Restaurant Order Page</h2>
      <ul>
        {orders.map((order) => (
          <li >{order}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantOrderPage;
