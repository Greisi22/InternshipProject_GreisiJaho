import { useEffect, useState } from 'react';
import ManagerOrdersPage from './ManagerOrdersPage';
import { Order } from 'src/types/Restaurant';
import ManageSpecificOrderPage from './ManageSpecificOrderPage';

function OrderPage() {
    const [isSpecificOrder, setSpecificOrder] = useState(false);
    const [order, setOrder] = useState<Order>();

    useEffect(() => {
        console.log('ok');
    }, [order]);

    return (
        <div>
            {isSpecificOrder == false ? (
                <ManagerOrdersPage setSpecificOrder={setSpecificOrder} setOrder={setOrder} />
            ) : (
                order && <ManageSpecificOrderPage order={order} />
            )}
        </div>
    );
}

export default OrderPage;
