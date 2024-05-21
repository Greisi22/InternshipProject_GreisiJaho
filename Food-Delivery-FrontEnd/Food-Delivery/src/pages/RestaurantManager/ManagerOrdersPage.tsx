import './style/manager.css';
import NavBarManager from 'src/component/RestaurantManager/NavBarManager';
import SideBarManager from 'src/component/RestaurantManager/SideBarManager';
import AllOrders from 'src/component/RestaurantManager/AllOrders';
function ManagerOrdersPage({
    setSpecificOrder,
    setOrder,
}: {
    setSpecificOrder: any;
    setOrder: any;
}) {
    return (
        <div>
            <div className="ml-[280px] sideBarClose h-[100vh]">
                <NavBarManager />
                <div className="m-[20px] ">
                    <AllOrders setSpecificOrder={setSpecificOrder} setOrder={setOrder} />
                </div>
            </div>

            <SideBarManager selected={'2'} />
        </div>
    );
}

export default ManagerOrdersPage;
