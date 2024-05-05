import SideBar from "src/component/Administrator/SideBar"
import './style/administrator.css';
import NavBarAdministrator from 'src/component/Administrator/NavBarAdministrator';

function AdministratorPage() {
  return (
    <div>
      <div className="ml-[280px] sideBarClose bg-red-300  h-[100vh]">
                    <NavBarAdministrator />
                </div>
      <SideBar selected={'1'}/>
      </div>
  )
}

export default AdministratorPage