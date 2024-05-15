import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Product } from 'src/types/Restaurant';
import RestaurantOrdersComponent from 'src/websocket/OrderWebSocket';

function OrderForm() {
    const [orderTime, setOrderTime] = useState<Date | string>(''); // Define orderTime state as Date or string
    const [orderStatus, setOrderStatus] = useState('');
    const [products, setProducts] = useState<Product[]>([
        {
            name: 'Pizza',
            description: 'Delicious pizza with various toppings',
            price: 10,
            ingredients: ['Tomato', 'Cheese', 'Pepperoni'],
            category: 'Food',
            amount: 2,
        },
        {
            name: 'Salad',
            description: 'Healthy salad with fresh vegetables',
            price: 8,
            ingredients: ['Lettuce', 'Tomato', 'Cucumber'],
            category: 'Drink',
            amount: 1,
        },
    ]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Convert orderTime to Date object if it's a string
        const formattedOrderTime = typeof orderTime === 'string' ? new Date(orderTime) : orderTime;
        const userDataCookie = Cookies.get('user');
        const userDataObject = userDataCookie ? JSON.parse(userDataCookie) : null;
        console.log(userDataObject);
        // Call the RestaurantOrdersComponent with the products, orderTime, and orderStatus
        RestaurantOrdersComponent(products, new Date(), orderStatus,1, 2 );

        // Here you can handle form submission, for example, send data to a backend server
        console.log({
            orderTime: formattedOrderTime,
            orderStatus,
        });
    };

  


    return (
        <form>
            {/* {userDataObject} */}
            <div>
                <label htmlFor="orderTime">Order Time:</label>
                <input
                    type="datetime-local"
                    id="orderTime"
                    value={
                        typeof orderTime === 'string'
                            ? orderTime
                            : orderTime
                              ? orderTime.toISOString().substring(0, 16)
                              : ''
                    } // Format Date to string if it's a Date object
                    onChange={(e) => setOrderTime(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="orderStatus">Order Status:</label>
                <input
                    type="text"
                    id="orderStatus"
                    value={orderStatus}
                    onChange={(e) => setOrderStatus(e.target.value)}
                    required
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
}

export default OrderForm;
