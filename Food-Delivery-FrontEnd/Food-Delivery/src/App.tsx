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

import RestaurantForm from './component/RestaurantManager/RestaurantForm';

import ManagerOrdersPage from 'src/pages/RestaurantManager/ManagerOrdersPage';
import ManagerProductsPage from './pages/RestaurantManager/ManagerProductsPage';

import ManagerDashboardPage from './pages/RestaurantManager/ManagerDashboardPage';

import RestaurantOrderPage from './websocket/RestaurantOrderPage';

import SpecificRestaurant from './pages/Client/SpecificRestaurant';

import FoodGallery from './component/Client/FoodGallery';
import CheckoutPage from './component/Client/CheckoutPage';

import { Order, Restaurant } from 'src/types/Restaurant';
import { useState } from 'react';
import ManageSpecificOrderPage from './pages/RestaurantManager/ManageSpecificOrderPage';

import RestaurantsEntryPage from './pages/Client/RestaurantsEntryPage';
import Tamporary from './Tamporary';
import RestaurantDocumentation from './pages/RestaurantManager/RestaurantDocumentation';

const App = () => {
    const initialOrder: Order = {};

    const initialRestaurant: Restaurant = {};

    const [isSpecificOrder, setSpecificOrder] = useState(false);
    const [order, setOrder] = useState<Order>(initialOrder);
    const [restaurantt, setRestaurant] = useState<Restaurant>(initialRestaurant);

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
                <Route path="/Administrator/EditRestaurant" element={<EditRestaurant />} />
                <Route path="/Administrator/EditRestaurant" element={<EditRestaurant />} />
                <Route path="/Administrator/RestaurantMenu" element={<RestaurantMenu />} />
                {/* <Route path="/Administrator/EditMenu" element={<EditMenu />} /> */}
                <Route path="/Administrator/RestaurantForm" element={<RestaurantForm />} />
                {/* <Route path="/Administrator/ProductForm" element={<ProductForm />} /> */}
                <Route path="/RestaurantManager/Dashboard" element={<ManagerDashboardPage />} />
                <Route
                    path="/RestaurantManager/Order"
                    element={
                        <ManagerOrdersPage
                            setSpecificOrder={setSpecificOrder}
                            setOrder={setOrder}
                        />
                    }
                />
                <Route
                    path="/RestaurantManager/SpecificOrderr"
                    element={<ManageSpecificOrderPage order={order} />}
                />
                <Route path="/RestaurantManager/Product" element={<ManagerProductsPage />} />
                <Route
                    path="/RestaurantManager/RestaurantDocumentation"
                    element={<RestaurantDocumentation />}
                />
                <Route path="prova1" element={<Tamporary />} />
                <Route path="prova2" element={<RestaurantOrderPage />} />
                <Route path="/Client/FoodGallery" element={<FoodGallery />} />
                <Route path="/Client/Checkout" element={<CheckoutPage />} />
                <Route
                    path="/Client/SpecificRestaurant"
                    element={<SpecificRestaurant restaurantData={restaurantt} />}
                />
                <Route
                    path="/Client/RestaurantEntry"
                    element={<RestaurantsEntryPage setRestaurant={setRestaurant} />}
                />
            </Routes>
        </>
    );
};

export default App;
