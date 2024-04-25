import EntryPage from './pages/EntryPage';
import { Routes, Route } from 'react-router-dom';
import AdministratorPage from './pages/AdministratorPage';
import Register from './component/Login/Register';
import Login from './component/Login/Login';

const App = () => {
    // const login_function = (username: string, password: string) => {
    //     fetch('http://localhost:8080/user/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ userEmail: username, userPassword: password }),
    //         credentials: 'include', //very important cause it wouldn't save the cookie without this
    //     })
    //         .then((response) => {
    //             if (response.ok) {
    //                 console.log('U be login');
    //             } else {
    //                 console.log('Nuk u be login');
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };
    return (
        // <>
        //     <div>Login</div>
        //     <button onClick={() => login_function('davidi@example.com', 'password')}>Test</button>
        // </>
        <Routes>
            <Route path="/" element={<EntryPage />}/>
            <Route path="/administrator" element={< AdministratorPage/>}/>
            <Route path="/prova" element={<Login/>}/>

        </Routes>
    );
};

export default App;
