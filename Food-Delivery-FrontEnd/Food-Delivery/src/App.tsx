import EntryPage from './pages/EntryPage';
import {Routes, Route } from 'react-router-dom';

const App = () => {
    
    return (
    <Routes>
        <Route path="/" element={<EntryPage />}/>
    </Routes>
    );
};

export default App;
