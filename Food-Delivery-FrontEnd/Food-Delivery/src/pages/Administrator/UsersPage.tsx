import SideBar from 'src/component/Administrator/SideBar';
import './style/administrator.css';
import NavBarAdministrator from 'src/component/Administrator/NavBarAdministrator';
import TableUser from 'src/component/Administrator/TableUser';
import RegisterUser from 'src/component/Login/RegisterUser';
import { useState } from 'react';

function UsersPage() {
    const [addUser, setUsersRagister] = useState(false);
    const [isUserCreated, setcreatedUser] = useState(false);
    return (
        <div>
            {addUser && (
                <div className="absolute h-full  w-full  z-[100] mt-[-30px]">
                    <RegisterUser setUsersRagister={setUsersRagister} setcreatedUser={setcreatedUser} />

                </div>
            )}
            <div className="ml-[280px] sideBarClose m-[30px]  h-[100vh]">
                <NavBarAdministrator />
                <TableUser setUsersRagister={setUsersRagister} isUserCreated={isUserCreated} />
            </div>
            <SideBar selected={'4'} />
        </div>
    );
}

export default UsersPage;
