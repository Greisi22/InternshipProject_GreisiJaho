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
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button
                    type="button"
                    onClick={() => {
                        handleButtonClick(5);
                    }}
                    className={
                        selected == 5
                            ? 'text-[#e94339] hover:text-white border border-[#e94339] bg-white hover:bg-[#e94339] focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800'
                            : 'text-gray-900 border  hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white  focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'
                    }>
                    All categories
                </button>
                <button
                    type="button"
                    onClick={() => {
                        handleButtonClick(0);
                    }}
                    className={
                        selected == 0
                            ? 'text-[#e94339] hover:text-white border border-[#e94339] bg-white hover:bg-[#e94339] focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800'
                            : 'text-gray-900 border  hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white  focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'
                    }>
                    Pizza
                </button>
                <button
                    type="button"
                    onClick={() => {
                        handleButtonClick(1);
                    }}
                    className={
                        selected == 1
                            ? 'text-[#e94339] hover:text-white border border-[#e94339] bg-white hover:bg-[#e94339] focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800'
                            : 'text-gray-900 border  hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white  focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'
                    }>
                    Drinks
                </button>
                <button
                    type="button"
                    onClick={() => {
                        handleButtonClick(2);
                    }}
                    className={
                        selected == 2
                            ? 'text-[#e94339] hover:text-white border border-[#e94339] bg-white hover:bg-[#e94339] focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800'
                            : 'text-gray-900 border  hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white  focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'
                    }>
                    Sweets
                </button>
                <button
                    type="button"
                    onClick={() => {
                        handleButtonClick(3);
                    }}
                    className={
                        selected == 3
                            ? 'text-[#e94339] hover:text-white border border-[#e94339] bg-white hover:bg-[#e94339] focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800'
                            : 'text-gray-900 border  hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white  focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'
                    }>
                    Prova
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {orders && orders.slice().reverse().map((order, index) => <div key={index}>{OrderCard(order)}</div>)}
            </div>
        </div>
    );
}

export default AllOrders;
