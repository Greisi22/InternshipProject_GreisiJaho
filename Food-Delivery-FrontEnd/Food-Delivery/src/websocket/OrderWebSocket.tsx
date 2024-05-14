import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

function OrderWebSocket(products: any, orderTime: any, orderStatus: any, usedId: any, restorantId: any) {
    const restaurantId = 1; // Hardcoded restaurant ID
    let orders = [];
    let stompClient: any = null;

    const connectToWebSocket = (onConnect: any) => {
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
                user: {
                    userId: 3,     
                },
                restaurant: {
                    id: 7,
                }
            };
            stompClient.send(`/app/orders`, {}, JSON.stringify(order));
        }
    };

    connectToWebSocket(placeOrder);
}

export default OrderWebSocket;
