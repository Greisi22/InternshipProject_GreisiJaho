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
import AllRestaurants from './component/Administrator/AllRestaurant';
import RevenueTable from './component/Administrator/RevenueTable';

import EditRestaurant from './component/Administrator/EditRestaurant';
import MultiFilters from './component/Administrator/MultiFilters';

import EditRestaurant from './component/Administrator/EditRestaurant'; 
import RestaurantMenu from './component/Administrator/RestaurantMenu';
import EditMenu from './component/Administrator/EditMenu';
import RestaurantForm from './component/Administrator/RestaurantForm';


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
          
                <Route path="/Administrator/AllRestaurants" element={<AllRestaurants />} />
                <Route path="/Administrator/RevenueTable" element={<RevenueTable />} />

                <Route path="/Administrator/EditRestaurant" element={<EditRestaurant  />} />
                <Route path="/Administrator/MenuBar" element={<MultiFilters />} />


   

                <Route path="/Administrator/EditRestaurant" element={<EditRestaurant/>} />
                <Route path="/Administrator/RestaurantMenu" element={<RestaurantMenu/>} />
                <Route path="/Administrator/EditMenu" element={<EditMenu/>} />
                <Route path="/Administrator/RestaurantForm" element={<RestaurantForm/>}/>
                <Route path="/Administrator/ProductForm" element={<ProductForm/>}/>
                

                
                

            </Routes>
        </>
    );
};

export default App;
