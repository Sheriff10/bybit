import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowDown, FaCaretDown } from "react-icons/fa";
import authorizeUser from "../authentication/auth";
import UserHeader from "./userHeader";
const token = window.localStorage.getItem("token");

export default function Convert() {
   const [coinBalance, setCoinBalance] = useState([]);
   const [balance, setBalance] = useState(0);
   const [from, setFrom] = useState({
      coin_name: "Bitcoin",
      symbol: "btc",
      image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579ƒ",
   });
   const [to, setTo] = useState({
      coin_name: "tether",
      symbol: "usdt",
      image: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
   });
   const [fromInput, setFromInput] = useState(0);
   const [toInput, settoInput] = useState(0);
   const [cryptoPrices, setCryptoPrices] = useState([])
   useEffect(() => {
      authorizeUser();
      getCoinBalance();
   }, []);
   useEffect(() => {
      if (cryptoPrices.length !== 0) {
         conversionCalc(cryptoPrices)
      }
   }, [fromInput])
   useEffect(() => {
      getCrypto();
   }, [from, to])

   const getCoinBalance = () => {
      axios
         .get(`${window.api}/user/spot`, {
            headers: {
               "x-auth-token": token,
               "Content-Type": "application/json",
            },
         })
         .then((res) => {
            setCoinBalance(res.data);
            console.log(res.data);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const toggleCoinList = (className) => {
      const getElement = document.querySelector(className);
      getElement.classList.toggle("list-active");
   };

   const handleCoinSelect = (type, coinName, symbol, image, balance) => {
      if (type == "from") {
         setFrom({
            coin_name: coinName,
            symbol,
            image,
         });
         setBalance(balance);
         toggleCoinList(".l1");
      } else {
         setTo({
            coin_name: coinName,
            symbol,
            image,
         });
         toggleCoinList(".l2");
      }
   };
   const getCrypto = async () => {
      try {
         let id = from.coin_name + "," + to.coin_name;
         const response = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets",
            {
               params: {
                  vs_currency: "usd",
                  ids: id.toString().toLocaleLowerCase(),
               },
               sparkline: false,
            }
         );
        setCryptoPrices(response.data);
         console.log(response);
      } catch (error) {
       console.log(error);
      }
   };
   const conversionCalc = (data) => {

      const fromCoinPrice = data.filter(i => {return i.symbol === from.symbol})[0].current_price
      const toCoin = data.filter(i => {return i.symbol === to.symbol})[0].current_price
      // const fromCoinPrice = data[0].current_price;
      // const toCoin = data[1].current_price

     
      const fromRateUsd = fromCoinPrice * fromInput
      const toValue = fromRateUsd / toCoin

      console.log(to.symbol)
      settoInput(toValue)
   };
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
                              <small>Balance {balance} </small>
                           </div>
                           <div className="wrap">
                              <div className="c-coin d-flex">
                                 <div className="img-wrap d-flex align-items-center">
                                    <img src={from.image} alt="Bitcoin" />
                                 </div>
                                 <div
                                    className="t-wrap"
                                    onClick={() => toggleCoinList(".l1")}
                                 >
                                    <span className="text-bold">
                                       {from.symbol} <FaCaretDown />{" "}
                                    </span>{" "}
                                    <br />
                                    <small>{from.coin_name}</small>
                                 </div>
                              </div>
                              <div className="c-text">
                                 <input
                                    type="number"
                                    placeholder="0.00"
                                    value={fromInput}
                                    onChange={(e) =>
                                       setFromInput(e.target.value)
                                    }
                                 />
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
                                    <img src={to.image} alt="Bitcoin" />
                                 </div>
                                 <div
                                    className="t-wrap"
                                    onClick={() => toggleCoinList(".l2")}
                                 >
                                    <span className="text-bold">
                                       {to.symbol} <FaCaretDown />
                                    </span>{" "}
                                    <br />
                                    <small>{to.coin_name}</small>
                                 </div>
                              </div>
                              <div className="c-text">
                                 <input
                                    type="number"
                                    placeholder="0.00"
                                    value={toInput}
                                    readOnly
                                 />
                              </div>
                           </div>
                        </div>

                        <div className="c-btn-con">
                           <div className="btn bg-pr col-12 text-bold">
                              {" "}
                              Convert{" "}
                           </div>
                        </div>
                     </div>

                     {/* COin List */}
                     <div className="asset">
                        <div className="coin-list l1 trans">
                           <div className="coin-box">
                              <div className="col-12 p-2 text-bold text-center">
                                 from
                              </div>
                              {coinBalance.map((i, index) => (
                                 <div
                                    className="row"
                                    onClick={() =>
                                       handleCoinSelect(
                                          "from",
                                          i.coin_name,
                                          i.symbol,
                                          i.image,
                                          i.balance
                                       )
                                    }
                                    key={index}
                                 >
                                    <div className="col-8">
                                       <div className="coin-img-con">
                                          <img src={i.image} alt="btc" />
                                          <span>{i.coin_name}</span>
                                          <small> {i.symbol}</small>
                                       </div>
                                    </div>
                                    <div className="col-4 d-flex align-items-center ">
                                       <div className="coin-text-con col-12 text-right">
                                          <small> Balance</small> <br />
                                          <balance className="text-bold">
                                             {i.balance}
                                          </balance>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                        <div className="coin-list l2 trans">
                           <div className="coin-box">
                              <div className="col-12 p-2 text-center text-bold">
                                 to
                              </div>
                              {coinBalance.map((i, index) => (
                                 <div
                                    className="row"
                                    onClick={() =>
                                       handleCoinSelect(
                                          "to",
                                          i.coin_name,
                                          i.symbol,
                                          i.image,
                                          i.balance
                                       )
                                    }
                                    key={index}
                                 >
                                    <div className="col-8">
                                       <div className="coin-img-con">
                                          <img src={i.image} alt="btc" />
                                          <span>{i.coin_name}</span>
                                          <small> {i.symbol}</small>
                                       </div>
                                    </div>
                                    <div className="col-4 d-flex align-items-center ">
                                       <div className="coin-text-con col-12 text-right">
                                          <small> Balance</small> <br />
                                          <balance className="text-bold">
                                             {i.balance}
                                          </balance>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
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
