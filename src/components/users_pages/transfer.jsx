import React from "react";
import UserHeader from "./userHeader";

export default function Transfer() {
   return (
      <div className="deposit withdraw">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-12">
                  <div className="d-head">
                     <span className="text-bold">Transfer</span>
                  </div>
                  <div className="d-select-coin">
                     <select name="coin" id="coin">
                        <option value="BTC" defaultChecked>
                           {" "}
                           Select Coin
                        </option>
                        <option value="BTC"> BTC</option>
                        <option value="USDT">USDT</option>
                        <option value="TRX">TRX</option>
                        <option value="BNB">BNB</option>
                        <option value="DOGE">DOGE</option>
                     </select>
                  </div>
                  <div className="d-address">
                     <div className="d-address-head">
                        <span className="text-bold">Reciepient Bybit email</span>
                     </div>
                     <input type="text" placeholder="Email" />
                  </div>
                  <div className="d-notice">
                     <small className="text-bold p-2">Notice</small>
                     <ul>
                        <li>
                           Zero fee tranfer
                        </li>
                        <li>
                           Transfer instantly with no network delay
                        </li>
                     </ul>
                  </div>
                  <div className="d-btn-con">
                     <div className="row p-3">
                        <button className="btn col-12 text-bold bg-pr">
                           {" "}
                           Transfer
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <UserHeader active={"asset"} />
      </div>
   );
}
