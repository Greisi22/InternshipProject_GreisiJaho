import SideBar from 'src/component/Administrator/SideBar';
import './style/administrator.css';
import NavBarAdministrator from 'src/component/Administrator/NavBarAdministrator';
import RevenueTable from 'src/component/Administrator/RevenueTable';

function RevenuesPage() {
    return (
        <div>
            <div className="ml-[280px] sideBarClose h-[100vh]">
                <NavBarAdministrator />
                <RevenueTable />
            </div>
            <SideBar selected={'6'} />
        </div>
    );
}

export default RevenuesPage;
