import SideBar from 'src/component/Administrator/SideBar';
import './style/administrator.css';
import NavBarAdministrator from 'src/component/Administrator/NavBarAdministrator';
import Table from 'src/component/General/Table';
function StatisticsPage() {
    return (
        <div>
            <div className="ml-[280px] sideBarClose h-[100vh]">
                <NavBarAdministrator />
                <Table />
            </div>
            <SideBar selected={'7'} />
        </div>
    );
}

export default StatisticsPage;
