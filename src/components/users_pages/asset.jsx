import React from "react";
import {
   FaExchangeAlt,
   FaEye,
   FaPaperPlane,
   FaRetweet,
   FaWallet,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import UserHeader from "./userHeader";

export default function Asset() {
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
         <div className="container">
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
                        <span>
                           10.34 <small>USD</small>
                        </span>
                     </div>
                  </div>
                  <div className="a-menu">
                     <div className="row text-center">
                        {menuArr.map((i, index) => (
                           <div className="col-3 d-flex justify-content-center" key={index}>
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
                              <small className="text-pr">Funding</small> <br />
                              <span>
                                 0.00 <small>USD</small>
                              </span>
                           </div>
                           <div className="menu">
                              <small className="text-pr">Funding</small> <br />
                              <span>
                                 0.00 <small>USD</small>
                              </span>
                           </div>
                           <div className="menu">
                              <small className="text-pr">Funding</small> <br />
                              <span>
                                 0.00 <small>USD</small>
                              </span>
                           </div>
                           <div className="menu">
                              <small className="text-pr">Funding</small> <br />
                              <span>
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
