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

import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const App = () => {

    const [stompClient, setStompClient] = useState(null);
    const [connected, setConnected] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (connected) {
            const socket = new SockJS('/stomp-endpoint');
            const client = Stomp.over(socket);
            client.connect({}, (frame) => {
                setConnected(true);
                setStompClient(client);
                console.log('Connected: ' + frame);
                client.subscribe('/topic/greetings', (greeting) => {
                    const greetingMessage = JSON.parse(greeting.body);
                    setMessage(greetingMessage.message);
                });
            });
        }
    }, [connected]);

    const connect = () => {
        setConnected(true);
    };

    const disconnect = () => {
        if (stompClient !== null) {
            stompClient.disconnect();
        }
        setConnected(false);
        console.log("Disconnected");
    };

    const sendName = () => {
        if (stompClient) {
            stompClient.send("/app/hello", {}, JSON.stringify({'name': message}));
        }
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
