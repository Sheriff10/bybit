import React from "react";
import { FaBars, FaSearch, } from "react-icons/fa"

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
                           <a href="#" className="btn"> Login</a>
                           <a href="#" className="btn bg-pr"> Signup</a>
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
                              placeholder="Serach coin"
                              aria-label="Serach coin"
                              aria-describedby="basic-addon1"
                           />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col">
                  <div className="btn-con">
                     <a href="#" className="btn btn-sm">
                        Login
                     </a>
                     <a href="#" className="btn btn-sm">
                        Signup
                     </a>   
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
