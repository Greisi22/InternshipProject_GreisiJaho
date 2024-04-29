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

const App = () => {


    
    const prova = () => {
        var socket = new WebSocket('ws://localhost:8080/stomp-endpoint');

        socket.onopen = function () {
            console.log('WebSocket connection opened');

            // Send a message to the server
            var message = {
                name: 'John',
            };
            socket.send(JSON.stringify(message));
        };

        socket.onmessage = function (event) {
            console.log('Received message from server:', event.data);
        };

        socket.onclose = function () {
            console.log('WebSocket connection closed');
        };
    };

    return (
        <>
            <div
                onClick={() => {
                    prova();
                }}>
                {' '}
                Provaaaaaaaaaaaaaaa
            </div>

            {/* <Routes>
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
            </Routes> */}
        </>
    );
};

export default App;
