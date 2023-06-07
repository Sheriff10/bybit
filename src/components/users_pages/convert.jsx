import React from "react";
import { FaArrowDown } from "react-icons/fa";
import UserHeader from "./userHeader";

export default function Convert() {
   return (
      <div className="convert">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-12">
                  <div className="c-head text-center">
                     <span className="text-bold"> Convert</span>
                  </div>
                  <div className="c-box">
                     <div className="c-box-head d-flex">
                        <span>Account</span>
                        <span className="text-bold">Funding Account</span>
                     </div>
                     <div className="c-input">
                        <div className="c-input-body">
                           <div className="c-input-head text-bold pb-3">
                              <small>From </small>
                              <small>
                                 available Balance 0{" "}
                                 <small className="text-pr">Max</small>
                              </small>
                           </div>
                           <div className="wrap">
                              <div className="c-coin d-flex">
                                 <div className="img-wrap d-flex align-items-center">
                                    <img src="/btc.png" alt="Bitcoin" />
                                 </div>
                                 <div className="t-wrap">
                                    <span className="text-bold">BTC</span>{" "}
                                    <br />
                                    <small>Bitcoin</small>
                                 </div>
                              </div>
                              <div className="c-text">
                                 <input type="number" placeholder="0.00" />
                              </div>
                           </div>
                        </div>
                        <div className="c-input-icon text-center">
                           <i>
                              <FaArrowDown />
                           </i>
                        </div>
                        <div className="c-input-body">
                           <div className="c-input-head text-bold pb-3">
                              <small>To </small>
                           </div>
                           <div className="wrap">
                              <div className="c-coin d-flex">
                                 <div className="img-wrap d-flex align-items-center">
                                    <img src="/usdt.png" alt="Bitcoin" />
                                 </div>
                                 <div className="t-wrap">
                                    <span className="text-bold">USDT</span>{" "}
                                    <br />
                                    <small>Tether</small>
                                 </div>
                              </div>
                              <div className="c-text">
                                 <input type="number" placeholder="0.00" />
                              </div>
                           </div>
                        </div>

                        <div className="c-btn-con">
                            <div className="btn bg-pr col-12 text-bold"> Convert </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <UserHeader active={"trade"} />
      </div>
   );
}
