import React from "react";
import { FaChartLine, FaExchangeAlt, FaHome, FaWallet } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function UserHeader({ active }) {
   const menuFunc = (title, icon, m_class, link) => {
      return { title, icon, m_class, link };
   };
   const menuArr = [
      menuFunc("Home", <FaHome />, "home", "/user/home"),
      menuFunc("Market", <FaChartLine />, "market", "/user/market"),
      menuFunc("Trade", <FaExchangeAlt />, "trade", "/user/convert"),
      menuFunc("Asset", <FaWallet />, "asset", "/user/asset"),
   ];
   return (
      <div className="col-12 u-header">
         <div className="container">
            <div className="row">
               {menuArr.map((i, index) => (
                  <div
                     className={`col ${active == i.m_class ? "active" : null}`}
                     key={index}
                  >
                     <NavLink to={i.link} href="#">
                        {" "}
                        <i> {i.icon} </i> <br />
                        {i.title}
                     </NavLink>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
