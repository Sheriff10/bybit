import React from "react";
import UserHeader from "./userHeader";

export default function Withdraw() {
   return (
      <div className="deposit withdraw">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-12">
                  <div className="d-head">
                     <span className="text-bold">Withdraw</span>
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
                  <div className="d-networks">
                     <span className="text-bold">Network</span>
                     <div className="n-wrap d-flex">
                        <select name="coin" id="coin">
                           <option value="BTC" defaultChecked>
                              {" "}
                              Select Network
                           </option>
                           <option value="BTC"> BTC</option>
                           <option value="USDT">BEP20</option>
                           <option value="TRX">ERC20</option>
                           <option value="BNB">TRC20</option>
                           <option value="DOGE">POLYGON</option>
                        </select>
                     </div>
                  </div>
                  <div className="d-address">
                     <div className="d-address-head">
                        <span className="text-bold">Reciepient Address</span>
                     </div>
                     <input type="text" placeholder="Wallet Address" />
                  </div>
                  <div className="d-notice">
                     <small className="text-bold p-2">Notice</small>
                     <ul>
                        <li>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Exercitationem aliquid nobis voluptas corrupti!
                        </li>
                        <li>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Exercitationem aliquid nobis voluptas corrupti!
                        </li>
                     </ul>
                  </div>
                  <div className="d-btn-con">
                     <div className="row p-3">
                        <button className="btn col-12 text-bold bg-pr">
                           {" "}
                           Witdraw
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
