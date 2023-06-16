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
import Spot from './components/users_pages/spot';
import DepositHistory from './components/users_pages/depositHistory';
import ConfirmEmail from './components/users_pages/confirmEmail';

function App() {
  window.api = "http://localhost:5000"
  // window.api = "https://puzzled-tuna-panama-hat.cyclic.app"
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signup/verify_email' element={<ConfirmEmail />} />
        <Route path='/user/asset' element={<Asset />} />
        <Route path='/user/convert' element={<Convert />} />
        <Route path='/user/deposit' element={<Deposit />} />
        <Route path='/user/deposit/history' element={<DepositHistory />} />
        <Route path='/user/withdraw' element={<Withdraw />} />
        <Route path='/user/home' element={<Dashboard />} />
        <Route path='/user/market' element={<Market />} />
        <Route path='/user/account/spot' element={<Spot />} />
      </Routes>
    </div>
  );
}

export default App;
