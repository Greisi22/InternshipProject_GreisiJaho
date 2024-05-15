import './style/manager.css';
import NavBarManager from 'src/component/RestaurantManager/NavBarManager';
import SideBarManager from 'src/component/RestaurantManager/SideBarManager';
import AllOrders from 'src/component/RestaurantManager/AllOrders';
import SpecificOrderCard from 'src/component/RestaurantManager/SpecificOrderCard';
import { Orders } from 'src/data/MockData';
function ManagerOrdersPage() {
    return (
        <div>
            <div className="ml-[280px] sideBarClose h-[100vh]">
                <NavBarManager />
                <div className="m-[20px] ">
                    <SpecificOrderCard order={Orders[0]} />
                    {/* <AllOrders /> */}
                </div>
            </div>
            <div className="ml-[280px] mt-[100px]">
                <SideBarManager selected={'2'} />
            </div>
        </div>
    );
}

export default ManagerOrdersPage;
