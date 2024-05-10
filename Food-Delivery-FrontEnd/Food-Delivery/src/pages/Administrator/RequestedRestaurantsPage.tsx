import SideBar from "src/component/Administrator/SideBar"
import './style/administrator.css';
import NavBarAdministrator from 'src/component/Administrator/NavBarAdministrator';
import TableComponent from "src/component/Administrator/TableComponent";


function RequestedRestaurantsPage() {
  return (
    <div>
      
         <div className="ml-[280px] sideBarClose   h-[100vh]">
                    <NavBarAdministrator />
                    <TableComponent/>
                </div>
          <SideBar selected={'2'}/>
         
    </div>
  )
}

export default RequestedRestaurantsPage