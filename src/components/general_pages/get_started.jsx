import React from "react";
import { FaDiceOne, FaDiceThree, FaDiceTwo } from "react-icons/fa";

export default function Get_started() {
   const handleImgIndexAdd = (target) => {
      const get_target = document.querySelector(target);
      console.log(get_target);
      get_target.classList.add("img-top");
   };
   const handleImgIndexRemove = (target) => {
      const get_target = document.querySelector(target);
      get_target.classList.remove("img-top");
   };
   return (
      <div className="get-started">
         <div className="container">
            <div className="g-head">
               <h2>Get Started in 3 Steps</h2>
            </div>
            <div className="row align-items-center">
               <div className="col-lg-6 col-12">
                  <div className="g-text text-bold">
                     <ul>
                        <li className="trans l1">
                           <i className="bg-pr">
                              <FaDiceOne />
                           </i>
                           <span>Register to BYBIT</span>
                        </li>
                        <li
                           className="trans l2"
                           onMouseOver={() => handleImgIndexAdd(".im2")}
                           onMouseOut={() => handleImgIndexRemove(".im2")}
                        >
                           <i className="bg-pr">
                              <FaDiceTwo />
                           </i>
                           <span>Make your first deposit</span>
                        </li>
                        <li
                           className="trans l3"
                           onMouseOver={() => handleImgIndexAdd(".im3")}
                           onMouseOut={() => handleImgIndexRemove(".im3")}
                        >
                           <i className="bg-pr">
                              <FaDiceThree />
                           </i>
                           <span>Make your first spot trade</span>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-6 col-12 c">
                  <div className="g-img">
                     <img
                        src="register.jpeg"
                        alt="Register"
                        className="img-fluid im1"
                     />
                     <img
                        src="deposit.png"
                        alt="deposit"
                        className="img-fluid im2"
                     />
                     <img
                        src="trade.jpeg"
                        alt="trade"
                        className="img-fluid im3"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
