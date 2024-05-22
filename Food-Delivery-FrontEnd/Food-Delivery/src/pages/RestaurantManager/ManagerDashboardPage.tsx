import './style/manager.css';
import NavBarManager from 'src/component/RestaurantManager/NavBarManager';
import SideBarManager from 'src/component/RestaurantManager/SideBarManager';
function ManagerDashboardPage() {
    return (
        <div>
            <div className="ml-[280px] sideBarClose bg-red-300  h-[100vh]">
                <NavBarManager />
            </div>

            <SideBarManager selected={'1'} />
        </div>
    );
}

export default ManagerDashboardPage;
