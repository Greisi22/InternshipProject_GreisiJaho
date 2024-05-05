import SideBar from 'src/component/Administrator/SideBar';
import NavBarAdministrator from 'src/component/Administrator/NavBarAdministrator';
import './style/administrator.css';

function CreateNewUser() {
    return (
        <div>
            <div>
                <div className="ml-[280px] sideBarClose bg-red-300  h-[100vh]">
                    <NavBarAdministrator />
                </div>

                <SideBar selected={'5'} />
            </div>
        </div>
    );
}

export default CreateNewUser;