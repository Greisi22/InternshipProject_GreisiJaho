import React, { useState } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const UserOrderPage = () => {
  const [orderMessage, setOrderMessage] = useState('');
  const [stompClient, setStompClient] = useState(null);

  const placeOrder = () => {
    if (!orderMessage.trim()) {
      console.error('Order message cannot be empty');
      return;
    }

    if (!stompClient) {
      console.error('WebSocket connection not established');
      return;
    }

    const order = {
        restaurant: {
          id: 1
        },
        message: orderMessage,
        user: {
            userId: 1
        },
   
      };

    stompClient.send('/app/orders', {}, JSON.stringify(order));

    console.log('Order placed successfully:', orderMessage);
    setOrderMessage('');
  };

  const connectWebSocket = () => {
    const socketUrl = 'http://localhost:8080/ws';
    const socket = new SockJS(socketUrl);
    const stomp = Stomp.over(socket);
    stomp.connect({}, () => {
      console.log('Connected to WebSocket');
      setStompClient(stomp);
    });
  };

  if (!stompClient) {
    connectWebSocket();
  }

  return (
    <div>
      <h2>User Order Page</h2>
      <input
        type="text"
        value={orderMessage}
        onChange={(e) => setOrderMessage(e.target.value)}
        placeholder="Enter your order message"
      />
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default UserOrderPage;
