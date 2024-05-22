import './style/manager.css';
import NavBarManager from 'src/component/RestaurantManager/NavBarManager';
import SideBarManager from 'src/component/RestaurantManager/SideBarManager';
import SpecificOrderCard from 'src/component/RestaurantManager/SpecificOrderCard';
import { Order } from 'src/types/Restaurant';

function ManageSpecificOrderPage({ order }: { order: Order }) {
    return (
        <div>
            <div className="ml-[280px] sideBarClose h-[100vh]">
                <NavBarManager />
                <div className="m-[20px] ">
                    <SpecificOrderCard order={order} />
                </div>
            </div>

            <SideBarManager selected={'2'} />
        </div>
    );
}

export default ManageSpecificOrderPage;
