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

export default function Asset() {
   useEffect(() => {
      authorizeUser();
      getBalance();
   }, []);
   const [balance, setBalance] = useState(0);
   const [loading, setLoading] = useState(0);
   const token = window.localStorage.getItem("token");

   const getBalance = () => {
      setLoading(1);
      axios
         .get(`${window.api}/user/asset`, {
            headers: {
               "x-auth-token": token,
               "Content-Type": "application/json",
            },
         })
         .then((res) => {
            setLoading(0);
            setBalance(res.data.toFixed(2));
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
      mapMenu(<FaExchangeAlt />, "Convert", "/user/convert"),
      mapMenu(<FaRetweet />, "Transfer", "/user/asset"),
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
                           Total Asset <FaEye />
                        </small>{" "}
                        <br />
                        <span
                           className={`${loading == 1 ? "placeholder col-2" : null}`}
                        >
                           {balance} <small>USD</small>
                        </span>
                     </div>
                  </div>
                  <div className="a-menu">
                     <div className="row text-center">
                        {menuArr.map((i, index) => (
                           <div
                              className="col-3 d-flex justify-content-center"
                              key={index}
                           >
                              <Link to={i.link}>
                                 <div className="menu-icon">
                                    <i className="text-pr">{i.icon}</i> <br />{" "}
                                    {i.title}
                                 </div>
                              </Link>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="a-account">
                     <div className="a-acct-menu">
                        <div className="row">
                           <div className="a-m-head text-bold">
                              <span>My Account</span>
                           </div>
                           <div className="menu">
                              <Link to={'/user/account/spot'}>
                              <small className="text-pr">Spot Account</small>{" "}
                              <br />
                              <span className={`${loading == 1 ? "placeholder col-2 col-2" : null} text-light`}>
                                 {balance} <small>USD</small>
                              </span>
                              </Link>
                           </div>
                           <div className="menu">
                              <small className="text-pr">Margin Account</small>{" "}
                              <br />
                              <span className={`${loading == 1 ? "placeholder col-2" : null}`}>
                                 0.00 <small>USD</small>
                              </span>
                           </div>
                           <div className="menu">
                              <small className="text-pr">Futures Account</small>{" "}
                              <br />
                              <span className={`${loading == 1 ? "placeholder col-2" : null}`}>
                                 0.00 <small>USD</small>
                              </span>
                           </div>
                           <div className="menu">
                              <small className="text-pr">
                                 Lending & Borrowing Account
                              </small>{" "}
                              <br />
                              <span className={`${loading == 1 ? "placeholder col-2" : null}`}>
                                 0.00 <small>USD</small>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <UserHeader active={"asset"} />
      </div>
   );
}
