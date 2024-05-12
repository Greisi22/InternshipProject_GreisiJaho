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
import RestaurantMenu from './component/Administrator/RestaurantMenu';
import EditMenu from './component/Administrator/EditMenu';
import RestaurantForm from './component/Administrator/RestaurantForm';

import ManagerOrdersPage from 'src/pages/RestaurantManager/ManagerOrdersPage';
import ManagerProductsPage from './pages/RestaurantManager/ManagerProductsPage';

import ManagerDashboardPage from './pages/RestaurantManager/ManagerDashboardPage';
import { handleOrder } from './websocket/OrderWebSocket';
import OrderWebSocket from './websocket/OrderWebSocket';

const App = () => {

   
    return (
        <>
          <OrderWebSocket/>
        </>
    );
};

export default App;
