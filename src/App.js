import logo from './logo.svg';
import './App.css';
import "./css/general_pages.css"
import "./css/authentication.css"
import "./css/user.css"
import { Route, Routes } from 'react-router-dom';
import Home from './components/general_pages/home';
import Login from './components/authentication/login';
import Signup from './components/authentication/signup';
import Asset from './components/users_pages/asset';
import Convert from './components/users_pages/convert';
import Deposit from './components/users_pages/deposit';
import Withdraw from './components/users_pages/withdraw';
import Dashboard from './components/users_pages/dashboard';
import Market from './components/users_pages/market';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/user/asset' element={<Asset />} />
        <Route path='/user/convert' element={<Convert />} />
        <Route path='/user/deposit' element={<Deposit />} />
        <Route path='/user/withdraw' element={<Withdraw />} />
        <Route path='/user/home' element={<Dashboard />} />
        <Route path='/user/market' element={<Market />} />
      </Routes>
    </div>
  );
}

export default App;