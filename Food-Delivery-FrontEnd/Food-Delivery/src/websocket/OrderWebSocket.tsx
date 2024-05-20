import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { Order, Restaurant } from 'src/types/Restaurant';

function OrderWebSocket(order: Order) {
    console.log('here');
    const restaurant = localStorage.getItem('CurrentRestaurant'); // Hardcoded restaurant ID
    let orders = [];
    let stompClient: any = null;
    let restaurantId: number = -1;

    if (restaurant != null) {
        const restaurantt: Restaurant = JSON.parse(restaurant);
        if (restaurantt.id != undefined) {
            restaurantId = restaurantt.id;
        }
    }

    console.log('ID RESTORANTIT ', restaurantId);

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
            stompClient.send(`/app/orders`, {}, JSON.stringify(order));
        }
    };

    connectToWebSocket(placeOrder);
}

export default OrderWebSocket;
