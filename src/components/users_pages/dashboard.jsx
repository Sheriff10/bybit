import React, { useEffect, useState } from "react";
import {
   FaAngleRight,
   FaExchangeAlt,
   FaHeadset,
   FaRegBell,
   FaSearch,
   FaUser,
   FaWallet,
} from "react-icons/fa";
import CryptoPrices from "./crypto-prices";
import UserHeader from "./userHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import authorizeUser from "../authentication/auth"

export default function Dashboard() {
   const dumArr = [1, 2, 3];
   useEffect(() => {
      authorizeUser()
      getCrypto();
   }, []);
   const [crypto, setCrypto] = useState([]);


   const getCrypto = async () => {
      try {

         const response = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets",
            {
               params: {
                  vs_currency: "usd",
                  ids: "bitcoin,ethereum,ripple",
                  sparkline: false,
               },
            }
         );
         setCrypto(response.data);
      } catch (error) {
         console.log(error);
      }
   };
   const handleColor = (data, price) => {
      const price_change = parseFloat(data);
      if (price_change < 0)
         return (
            <div className="content text-danger">
               <span className="text-bold">{price}</span> <br />
               <small>{price_change.toFixed(2)}%</small>
            </div>
         );
      else {
         return (
            <div className="content text-success">
               <span className="text-bold">{price}</span> <br />
               <small>{price_change.toFixed(2)}%</small>
            </div>
         );
      }
   };

   return (
      <div className="dashboard">
         <div className="header">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col">
                     <div className="logo">
                        <i className="bg-pr">
                           <FaUser />
                        </i>
                     </div>
                  </div>
                  <div className="col col-6">
                     <div className="menu-link-con d-flex justify-content-center align-items-center">
                        <div className="search-con">
                           <div className="input-group pt-3 mb-3">
                              <span
                                 className="input-group-text"
                                 id="basic-addon1"
                              >
                                 <FaSearch />
                              </span>
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Serach coin"
                                 aria-label="Serach coin"
                                 aria-describedby="basic-addon1"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col kk ">
                     <div className="mb-btn-con text-right">
                        <i>
                           <FaHeadset />
                        </i>
                        <i>
                           <FaRegBell />
                        </i>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-12">
                  <div className="d-intro">
                     <img
                        src="/introbg.png"
                        alt="intro"
                        className="img-fluid"
                     />
                     <div className="d-intro-text col-6">
                        <h3>Bitcoin Rush</h3>
                        <span className="text-pr">
                           Lorem ipsum dolor sit amet consectetur adipisicing.
                        </span>{" "}
                        <br />
                        <button className="btn bg-pr btn-sm col-12">
                           Register Now
                        </button>
                     </div>
                  </div>
                  <div className="d-favourite">
                     <span className="text-bold"> Top Coins</span>
                     <div className="row">
                        {/* {coinItems} */}
                        {crypto.map((i, index) => (
                           <div className="col-4" key={index}>
                              <div className="coin-box">
                                 <div className="head text-bold">
                                    <span>{i.symbol}USDT</span>
                                 </div>
                              {handleColor(i.price_change_percentage_24h, i.current_price)}

                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="d-dw">
                     <div className="row">
                        <div className="col-6">
                           <div className="wrap">
                              <Link to="/user/deposit">
                                 <div className="d-dw-text">
                                    <i>
                                       <FaWallet />{" "}
                                    </i>
                                    <span>Deposit</span>
                                 </div>
                                 <div className="d-dw-icon">
                                    <i>
                                       <FaAngleRight />
                                    </i>
                                 </div>
                              </Link>
                           </div>
                        </div>
                        <div className="col-6">
                           <div className="wrap">
                              <Link to="/user/withdraw">
                                 <div className="d-dw-text">
                                    <i>
                                       <FaExchangeAlt />{" "}
                                    </i>
                                    <span>Withdraw</span>
                                 </div>
                                 <div className="d-dw-icon">
                                    <i>
                                       <FaAngleRight />
                                    </i>
                                 </div>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <CryptoPrices />
               </div>
            </div>
         </div>
         <UserHeader active={"home"} />
      </div>
   );
}
