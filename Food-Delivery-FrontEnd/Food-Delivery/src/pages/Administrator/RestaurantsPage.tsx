import SideBar from 'src/component/Administrator/SideBar';
import './style/administrator.css';
import NavBarAdministrator from 'src/component/Administrator/NavBarAdministrator';
import AllRestaurants from 'src/component/Administrator/AllRestaurant';

function RestaurantsPage() {
    return (
        <div>
            <div className="ml-[280px] sideBarClose h-[100vh]">
                <NavBarAdministrator />
                <AllRestaurants />
            </div>

            <SideBar selected={'3'} />
        </div>
    );
}

export default RestaurantsPage;
