import EntryPage from './pages/EntryPage';
import { Routes, Route } from 'react-router-dom';
import AdministratorPage from './pages/Administrator/DashboardPage';
import CreateNewUser from './pages/Administrator/CreateNewUser';
import RequestedRestaurantsPage from './pages/Administrator/RequestedRestaurantsPage';
import RestaurantsPage from './pages/Administrator/RestaurantsPage';
import RevenuesPage from './pages/Administrator/RevenuesPage';
import SettingsPage from './pages/Administrator/SettingsPage';
import StatisticsPage from './pages/Administrator/StatisticsPage';
import UsersPage from './pages/Administrator/UsersPage';
import TableComponent from './component/Administrator/TableComponent';
import TableUser from './component/Administrator/TableUser';
const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<EntryPage />} />
            </Routes>
            <Routes>
                <Route path="/Administrator/dashboard" element={<AdministratorPage />} />
                <Route
                    path="/Administrator/RequestedRestaurantsPage"
                    element={<RequestedRestaurantsPage />}
                />
                <Route path="/Administrator/RestaurantsPage" element={<RestaurantsPage />} />\
                <Route path="/Administrator/UsersPage" element={<UsersPage />} />
                <Route path="/Administrator/CreateNewUser" element={<CreateNewUser />} /> 
                <Route path="/Administrator/RevenuesPage" element={<RevenuesPage />} />
                <Route path="/Administrator/StatisticsPage" element={<StatisticsPage />} />
                <Route path="/Administrator/SettingsPage" element={<SettingsPage />} />
                <Route path="/Administrator/TableComponet" element={<TableComponent />} />
                <Route path="/Administrator/UserList" element={<TableUser />} />
                
               
            </Routes>
        </>
    );
};

export default App;
