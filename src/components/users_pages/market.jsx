import React from "react";
import CryptoPrices from "./crypto-prices";
import {
    FaAngleRight,
    FaExchangeAlt,
    FaHeadset,
    FaRegBell,
    FaSearch,
    FaUser,
    FaWallet,
 } from "react-icons/fa";
import UserHeader from "./userHeader";

export default function Market() {
   return (
      <div className="market dashboard bg-dark">
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
         <CryptoPrices />
         <UserHeader active={"market"} />
      </div>
   );
}
