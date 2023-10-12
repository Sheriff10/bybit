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
   const [toInput, settoInput] = useState(" ");
   const [cryptoPrices, setCryptoPrices] = useState([]);
   const [BtcPrice, setBtcPrice] = useState(0);
   const [loading, setLoading] = useState(0);
   const [errorLog, setErrorLog] = useState({
      message: "",
      class: "bg-success",
   });
   useEffect(() => {
      authorizeUser();
      getCoinBalance();
      // getBTCPrice();
   }, []);
   useEffect(() => {
      console.log(cryptoPrices);
      if (cryptoPrices.length > 1) {
         conversionCalc(cryptoPrices);
      } else {
         getCrypto();
      }
   }, [fromInput]);
   useEffect(() => {
      getCrypto();
   }, [from, to]);

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
            // update select current selected field balance
            const currentSymbolBalance = from.symbol;

            const balances = res.data.filter((i) => {
               return i.symbol == from.symbol;
            });
            const getSymbolBalance = balances[0].balance;
            setBalance(getSymbolBalance);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   // const getBTCPrice = () => {
   //    axios
   //       .get(`${window.api}/user/get_btc_price`, {
   //          headers: {
   //             "x-auth-token": token,
   //             "Content-Type": "application/json",
   //          },
   //       })
   //       .then((res) => {
   //          console.log(res);
   //          setBtcPrice(parseInt(res.data));
   //       })
   //       .catch((err) => {
   //          console.log(err);
   //       });
   // };

   const toggleCoinList = (className) => {
      const getElement = document.querySelector(className);
      getElement.classList.toggle("list-active");
   };

   const handleCoinSelect = (type, coinName, symbol, image, balance) => {
      settoInput(null);
      setFromInput(null);
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
         // console.log(response);
      } catch (error) {
         console.log(error);
      }
   };
   const conversionCalc = (data) => {
      console.log(data);

      try {
         const fromCoinPrice = data.filter((i) => {
            return i.symbol === from.symbol;
         })[0].current_price;
         const toCoin = data.filter((i) => {
            return i.symbol === to.symbol;
         })[0].current_price;

         // if (data[0].symbol === "btc" || data[1].symbol == "btc") {
         //    const fromRateUsd = BtcPrice * fromInput;
         //    const toValue = fromRateUsd / toCoin;
         //    settoInput(toValue);
         // }

         const fromRateUsd = fromCoinPrice * fromInput;
         const toValue = fromRateUsd / toCoin;
         settoInput(toValue);

         // const fromRateUsd = fromCoinPrice * fromInput;
         //    const toValue = fromRateUsd / toCoin;
         //    settoInput(toValue);
      } catch (error) {
         console.log(error);
      }
   };

   const handleConvert = (e) => {
      e.preventDefault();
      setLoading(1);
      const data = {
         fromSymbol: from.symbol,
         toSymbol: to.symbol,
         fromAmount: fromInput,
         toAmount: toInput,
      };
      axios
         .post(`${window.api}/user/convert`, data, {
            headers: {
               "x-auth-token": token,
               "Content-Type": "application/json",
            },
         })
         .then((response) => {
            setLoading(0);
            getCoinBalance();
            settoInput(0);
            setFromInput(0);
            if (response.data == "success") {
               handleResponse("success");
            }
         })
         .catch((error) => {
            setLoading(0);
            handleResponse(error.response.data);
         });
   };
   const toggleErr = () => {
      document.querySelector(".c-error").classList.toggle("err-active");
   };
   const handleResponse = (data) => {
      if (data == "insufficient balance") {
         setErrorLog({
            message: `Insufficient funds for the swap. You currently have ${balance.toFixed(
               6
            )} ${from.symbol}, but the requested swap is for ${fromInput} ${
               from.symbol
            }. Please make sure you have enough funds available for the swap.`,
            class: "bg-danger",
         });
         toggleErr();
      }
      if (data == "same symbol") {
         setErrorLog({
            message: `Invalid swap request. You are trying to swap ${from.symbol} to ${to.symbol}, which is not a valid transaction. Please choose different coins for the swap.`,
            class: "bg-danger",
         });
         toggleErr();
      }
      if (data == "success") {
         setErrorLog({
            message: `Transaction Successful! You have successfully swapped ${fromInput} ${from.symbol} to ${toInput} ${to.symbol}. The swap has been completed`,
            class: "bg-success",
         });
         toggleErr();
      }
   };
   const spinner = (
      <div
         className="spinner-grow text-light spinner-grow-sm"
         role="status"
      ></div>
   );
   return (
      <div className="convert">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-12">
                  <div className="c-head text-center">
                     <span className="text-bold"> Convert</span>
                  </div>
                  <form action="" onSubmit={handleConvert}>
                     <div className="c-box">
                        <div className="c-box-head d-flex">
                           <span>Account</span>
                           <span className="text-bold">Funding Account</span>
                        </div>
                        <div className="c-input">
                           <div className="c-input-body">
                              <div className="c-input-head text-bold pb-3">
                                 <small>From </small>
                                 <small>Balance {balance.toFixed(4)} </small>
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
                                       // step={0.00002}
                                       min={0}
                                       value={fromInput}
                                       onChange={(e) =>
                                          setFromInput(
                                             parseFloat(e.target.value)
                                          )
                                       }
                                       required
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
                              <button
                                 type="submit"
                                 className="btn bg-pr col-12 text-bold"
                              >
                                 {" "}
                                 Convert {loading == 1 ? spinner : null}
                              </button>
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
                                             <span className="text-bold">
                                                {i.balance.toFixed(4)}
                                             </span>
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
                                             <span className="text-bold">
                                                {i.balance.toFixed(4)}
                                             </span>
                                          </div>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>

                        {/* Error Template  */}
                        <div className="c-error text-center">
                           <div className="row justify-content-center">
                              <div className="col-12 col-lg-6">
                                 <div
                                    className={`err-con ${errorLog.class} alert`}
                                 >
                                    <small>{errorLog.message} </small> <br />
                                    <button
                                       type="button"
                                       className="btn bg-pr btn-sm"
                                       onClick={toggleErr}
                                    >
                                       ok
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div className="spacer"></div>
         <UserHeader active={"trade"} />
      </div>
   );
}
