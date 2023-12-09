import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';

import './App.css';

function App() {
    return (
        <>
            <Routes>
                {/* <Route path='/' element={<Login />} /> */}
                <Route path='/' element={<Login />} />
            </Routes>
            {/* <h1>Hello World</h1> */}
        </>
    );
}

export default App;
