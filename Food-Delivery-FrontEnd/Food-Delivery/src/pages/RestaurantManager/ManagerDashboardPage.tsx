
import './style/manager.css';
import NavBarManager from 'src/component/RestaurantManager/NavBarManager';
import SideBarManager from 'src/component/RestaurantManager/SideBarManager';
function ManagerDashboardPage() {
  return (
    <div>
    <div className="ml-[280px] sideBarClose h-[100vh]">
        <NavBarManager />
        <div className="m-[20px]"></div>
    </div>
    <div className="ml-[280px] mt-[100px]">
        <SideBarManager selected={'1'} />
    </div>
</div>
  )
}

export default ManagerDashboardPage
