import EntryPage from './pages/EntryPage';
import { Routes, Route } from 'react-router-dom';
import AdministratorPage from './pages/Administrator/DashboardPage';


const App = () => {
    return (
    
        <Routes>
            <Route path="/" element={<EntryPage />}/>
            <Route path="/administrator" element={< AdministratorPage/>}/>

        </Routes>
    );
};

export default App;
