import { OrderCard } from './OrderCard';
import { useEffect, useState } from 'react';
import { retrieveAllOrders } from 'src/api/localhost/Order/OrderApi';
import { Order } from 'src/types/Restaurant';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import Cookies from 'js-cookie';

function AllOrders() {
    const [selected, setSelected] = useState(5);
    const [orders, setOrders] = useState<Order[]>([]);
    const [stompClient, setStompClient] = useState<Stomp.Client | null>(null); // Explicitly typed as Stomp.Client | null

    const userDataCookie = Cookies.get('userRestaurant');
    const userDataObject = userDataCookie ? JSON.parse(userDataCookie) : null;
    const restaurantId = userDataObject.restaurantId;


    const handleButtonClick = (index: number) => {
        setSelected(index);
    };

    const fetchData = async () => {
        const result = await retrieveAllOrders();
        console.log('Orders ', result);
        setOrders(result);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const socketUrl = 'http://localhost:8080/ws';
        const socket = new SockJS(socketUrl);
        const stomp: Stomp.Client = Stomp.over(socket); // Explicitly typed as Stomp.Client
        stomp.connect({}, () => {
            console.log('Connected to WebSocket');
            setStompClient(stomp);

            stomp.subscribe(`/topic/restaurant-${restaurantId}-orders`, (message) => {
                const newOrder = JSON.parse(message.body);
                console.log("muhahahahhahahahaha")
                setOrders((prevOrders) => [...(prevOrders ?? []), newOrder]);
            });
        });

        return () => {
            if (stompClient) {
                stompClient.disconnect(() => {}); // Disconnect callback provided as empty function
            }
        };
    }, []);

    useEffect(() => {
        console.log('ahhsbiushufcnsuncn   ', orders);
    }, [orders]);

    return (
        <div>
            <div>
                All Orders
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {orders && orders.slice().reverse().map((order, index) => <div key={index}>{OrderCard(order)}</div>)}
            </div>
        </div>
    );
}

export default AllOrders;
