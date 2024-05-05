import SideBar from 'src/component/Administrator/SideBar';
import './style/administrator.css';
import NavBarAdministrator from 'src/component/Administrator/NavBarAdministrator';
import TableUser from 'src/component/Administrator/TableUser';

function UsersPage() {
    return (
        <div>
            <div className="ml-[280px] sideBarClose m-[30px]  h-[100vh]">
                <NavBarAdministrator />
                <TableUser/>
            </div>
            <SideBar selected={'4'} />
        </div>
    );
}

export default UsersPage;
