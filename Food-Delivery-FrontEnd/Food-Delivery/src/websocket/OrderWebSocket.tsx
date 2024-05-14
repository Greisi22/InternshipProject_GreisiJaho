import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { Product } from 'src/types/Restaurant';

function OrderWebSocket(products, orderTime, orderStatus) {
    console.log('Heiiiiiiii', products, orderTime, orderStatus);
    const restaurantId = 1; // Hardcoded restaurant ID
    let orders = [];
    let stompClient = null;

    const connectToWebSocket = (onConnect) => {
        const socketUrl = 'http://localhost:8080/ws'; // Replace with your WebSocket endpoint
        const socket = new SockJS(socketUrl);
        const stomp = Stomp.over(socket);
        stomp.connect({}, () => {
            console.log('Connected to WebSocket');
            stompClient = stomp;

            stomp.subscribe(`/topic/restaurant-${restaurantId}-orders`, (message) => {
                const newOrder = JSON.parse(message.body);
                orders.push(newOrder);
                console.log('Orders:', orders);
            });

            // Invoke the callback once the connection is established
            onConnect();
        });
    };

    const placeOrder = () => {
        if (stompClient) {
            const order = {
                products: products,
                orderTime: orderTime,
                orderStatus: orderStatus,
            };
            stompClient.send(`/app/orders`, {}, JSON.stringify(order));
        }
    };

    // Call connectToWebSocket with placeOrder as a callback
    connectToWebSocket(placeOrder);
}

export default OrderWebSocket;
