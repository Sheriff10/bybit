import React from "react";
import { FaBars, FaSearch, } from "react-icons/fa"
import { Link } from "react-router-dom";

export default function Header() {
   const toggleMenu = () => {
      document.querySelector('.menu-link').classList.toggle("menu-active")
   }
   return (
      <div className="header">
         <div className="container">
            <div className="row align-items-center">
               <div className="col col-lg-1">
                  <div className="logo">
                     <span>Logo</span>
                  </div>
               </div>
               <div className="col col-lg-9">
                  <div className="menu-link-con d-flex align-items-center">
                     
                     <div className="menu-link trans">
                        <div className="mb-btn">
                           <div className="cancel">
                              <span onClick={toggleMenu}>X</span>
                           </div>
                           <Link to="/login" className="btn"> Login</Link>
                           <Link to="/signup" className="btn bg-pr"> Signup</Link>
                        </div>
                        <a href="">Home</a>
                        <a href="">Market</a>
                        <a href="">Trade</a>
                        <a href="">Tools</a>
                        <a href="">Finance</a>
                        <a href="">Web3</a>
                        <a href="">Get Started</a>
                     </div>
                     <div className="search-con">
                        <div className="input-group pt-3 mb-3">
                           <span className="input-group-text" id="basic-addon1">
                              @
                           </span>
                           <input
                              type="text"
                              className="form-control"
                              placeholder="Search coin"
                              aria-label="Search coin"
                              aria-describedby="basic-addon1"
                           />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col">
                  <div className="btn-con">
                     <Link to="/login" className="btn btn-sm">
                        Login
                     </Link>
                     <Link to="/signup" className="btn btn-sm">
                        Signup
                     </Link>   
                  </div>
               </div>
               <div className="col kk">
                  <div className="mb-btn-con d-flex">
                     <i><FaSearch /></i>
                     <i onClick={toggleMenu}><FaBars /></i>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
