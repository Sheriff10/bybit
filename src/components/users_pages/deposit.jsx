import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import authorizeUser from "../authentication/auth";
import UserHeader from "./userHeader";

export default function Deposit() {
   const [address, setaddress] = useState("bep20AddressHere");
   const [coinList, setCoinList] = useState([]);
   const [coin, setCoin] = useState("btc");
   const [amount, setAmount] = useState("");
   const token = window.localStorage.getItem("token");
   const DumNetwork = [
      { network_name: "BTC", address: "BTCAddressHere" },
      { network_name: "BEP20", address: "bep20AddressHere" },
      { network_name: "ERC20", address: "2rc20AddressHere" },
      { network_name: "TRC20", address: "Trc20AddressHere" },
   ];

   useEffect(() => {
      authorizeUser();
      getTokenList();
   }, []);
   const handleAddressChange = (adrs, newActive) => {
      setaddress(adrs);
      toggleActiveAddress(newActive);
   };
   const toggleActiveAddress = (newActive) => {
      console.log(newActive);
      const getActiveAddress = document.querySelector(
         ".deposit .active-address"
      );
      getActiveAddress.classList.remove("active-address");
      // add active-address class to the clicked one
      document.querySelector(newActive).classList.add("active-address");
   };

   const getTokenList = () => {
      axios
         .get(`${window.api}/user/spot`, {
            headers: {
               "x-auth-token": token,
               "Content-Type": "application/json",
            },
         })
         .then((res) => {
            console.log(res);
            setCoinList(res.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const handleDeposit = (e) => {
      const data = { amount, coin };
      e.preventDefault();
      axios
         .post(`${window.api}/user/deposit`, data, {
            headers: {
               "x-auth-token": token,
               "Content-Type": "application/json",
            },
         })
         .then((res) => {
            console.log(res);
            window.alert("deposit Successfull");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   function copyToClipboard(text) {
      navigator.clipboard
         .writeText(text)
         .then(() => {
            alert("Address Copied");
         })
         .catch((error) => {
            console.error("Error copying text to clipboard:", error);
            alert("Error copying text to clipboard!");
         });
   }
   return (
      <div className="deposit">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-12">
                  <div className="d-head">
                     <span className="text-bold">Deposit</span>
                  </div>
                  <div className="d-select-coin">
                     <select
                        name="coin"
                        id="coin"
                        onChange={(e) => setCoin(e.target.value)}
                     >
                        {coinList.map((i, index) => (
                           <option value={i.symbol} key={index}>
                              {" "}
                              {i.symbol}
                           </option>
                        ))}
                     </select>
                  </div>
                  <div className="d-networks">
                     <span className="text-bold">Network</span>
                     <div className="n-wrap d-flex">
                        {DumNetwork.map((i, index) => (
                           <small
                              className={
                                 i.network_name === "BTC"
                                    ? `${i.network_name} active-address text-pr`
                                    : `${i.network_name} text-pr`
                              }
                              onClick={() =>
                                 handleAddressChange(
                                    i.address,
                                    "." + i.network_name
                                 )
                              }
                              key={index}
                           >
                              {i.network_name}
                           </small>
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
                              <small>{address}</small>
                           </div>
                           <div className="col text-right">
                              <span onClick={() => copyToClipboard(address)}>
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
                     <form action="" onSubmit={handleDeposit}>
                        <div className="row">
                           <div className="col-12">
                              <input
                                 type="number"
                                 className="form-control"
                                 placeholder="Enter amount sent"
                                 onChange={(e) => setAmount(e.target.value)}
                                 value={amount}
                                 required
                              />
                           </div>
                           <div className="col-6 p-2">
                              <button
                                 type="button"
                                 className="btn col-12 text-bold btn-pr-outline"
                                 onClick={() => copyToClipboard(address)}
                              >
                                 {" "}
                                 Copy Address
                              </button>
                           </div>
                           <div className="col-6 p-2">
                              <button
                                 type="submit"
                                 className="btn col-12 text-bold bg-pr"
                              >
                                 {" "}
                                 I've sent
                              </button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <UserHeader active={"asset"} />
      </div>
   );
}
