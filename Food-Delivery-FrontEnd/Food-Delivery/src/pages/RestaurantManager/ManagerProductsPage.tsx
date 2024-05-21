import MultiFilters from 'src/component/RestaurantManager/MultiFilters';
import './style/manager.css';
import NavBarManager from 'src/component/RestaurantManager/NavBarManager';
import SideBarManager from 'src/component/RestaurantManager/SideBarManager';

function ManagerProductsPage() {
    return (
        <div>
            <div className="ml-[280px] sideBarClose h-[100vh]">
                <NavBarManager />
                <div className="m-[20px]"></div>
                <MultiFilters />
            </div>

            <SideBarManager selected={'3'} />
        </div>
    );
}

export default ManagerProductsPage;
