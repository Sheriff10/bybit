import axios from "axios";
import React, { useEffect, useState } from "react";
import {
   FaExchangeAlt,
   FaEye,
   FaPaperPlane,
   FaRetweet,
   FaWallet,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import authorizeUser from "../authentication/auth";
import UserHeader from "./userHeader";

export default function Spot() {
   useEffect(() => {
      authorizeUser();
      getCoinBalance();
      getBalance();
   }, []);
   const [balance, setBalance] = useState(0);
   const [loading, setLoading] = useState(0);
   const [loading2, setLoading2] = useState(0)
   const [coinBalance, setCoinBalance] = useState([]);
   const token = window.localStorage.getItem("token");

   const getBalance = () => {
      setLoading2(1);
      axios
         .get(`${window.api}/user/asset`, {
            headers: {
               "x-auth-token": token,
               "Content-Type": "application/json",
            },
         })
         .then((res) => {
            setLoading2(0);
            setBalance(res.data.toFixed(2));
         })
         .catch((err) => {
            setLoading2(0);
            console.log(err);
         });
   };
   const getCoinBalance = () => {
      setLoading(1);
      axios
         .get(`${window.api}/user/spot`, {
            headers: {
               "x-auth-token": token,
               "Content-Type": "application/json",
            },
         })
         .then((res) => {
            setLoading(0);
            setCoinBalance(res.data);
         })
         .catch((err) => {
            setLoading(0);
            console.log(err);
         });
   };
   const mapMenu = (icon, title, link) => {
      return { icon, title, link };
   };
   const menuArr = [
      mapMenu(<FaWallet />, "Deposit", "/user/deposit"),
      mapMenu(<FaPaperPlane />, "Withdraw", "/user/withdraw"),
   ];
   return (
      <div className="asset">
         <div className="container placeholder-glow">
            <div className="a-head">
               <span className="text-bold">My Assets</span>
            </div>
            <div className="row justify-content-center">
               <div className="col-lg-6 col-12">
                  <div className="a-card">
                     <div className="a-card-head">
                        <small className="text-pr">
                           Spot Balance <FaEye />
                        </small>{" "}
                        <br />
                        <span
                           className={`${
                              loading2 == 1 ? "placeholder col-3" : null
                           }`}
                        >
                           {balance} <small>USD</small>
                        </span>
                     </div>
                  </div>
                  <div className="a-menu">
                     <div className="row text-center">
                        {menuArr.map((i, index) => (
                           <div
                              className="col-6 d-flex justify-content-center"
                              key={index}
                           >
                              <Link to={i.link}>
                                 <div className="menu-icon col-12">
                                    <i className="text-pr col-12">{i.icon}</i>{" "}
                                    <br /> {i.title}
                                 </div>
                              </Link>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="coin-list">
                     <div className="coin-box">
                        {coinBalance.map((i, index) => (
                           <div className="row"  key={index}>
                              <div className="col-8">
                                 <div className="coin-img-con">
                                    <img src={i.image} alt="btc" />
                                    <span>{i.coin_name}</span>
                                    <small> {i.symbol}</small>
                                 </div>
                              </div>
                              <div
                                 className="col-4 d-flex align-items-center "
                                
                              >
                                 <div className="coin-text-con col-12 text-right">
                                    <small> Balance</small> <br />
                                    <balance className="text-bold">
                                       {i.balance}
                                    </balance>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <UserHeader active={"asset"} />
      </div>
   );
}
