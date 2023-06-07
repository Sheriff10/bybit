import React from "react";
import { FaRegCopy } from "react-icons/fa";
import UserHeader from "./userHeader";

export default function Deposit() {
   const DumNetwork = [
      { network_name: "BEP20" },
      { network_name: "ERC20" },
      { network_name: "TRC20" },
   ];
   return (
      <div className="deposit">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-12">
                  <div className="d-head">
                     <span className="text-bold">Deposit</span>
                  </div>
                  <div className="d-select-coin">
                     <select name="coin" id="coin">
                        <option value="BTC" defaultChecked> Select Coin</option>
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
                        {DumNetwork.map((i, index) => (
                           <small className="text-pr" key={index}>{i.network_name}</small>
                        ))}
                     </div>
                  </div>
                  <div className="d-address">
                     <div className="d-address-head">
                        <span className="text-bold">Wallet Address</span>
                     </div>
                     <div className="d-address-img text-center p-3">
                        <img src="/scan.jpg" alt="scan" className="img-fluid" />
                     </div>
                     <div className="d-address-con">
                        <div className="row">
                           <div className="col-8 aa">
                              <small>
                                 0x631d75e4f86aaa2e43596eefbb69bb1b601eba90
                              </small>
                           </div>
                           <div className="col text-right">
                              <span>
                                 <i>
                                    <FaRegCopy />
                                 </i>{" "}
                                 Copy
                              </span>
                           </div>
                        </div>
                     </div>
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
                     <div className="row">
                        <div className="col-6 p-2">
                           <button className="btn col-12 text-bold btn-pr-outline">
                              {" "}
                              Copy Address
                           </button>
                        </div>
                        <div className="col-6 p-2">
                           <button className="btn col-12 text-bold bg-pr">
                              {" "}
                              I've sent
                           </button>
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
