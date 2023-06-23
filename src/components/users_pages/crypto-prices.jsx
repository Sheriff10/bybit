import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CryptoPrices() {
   useEffect(() => {
      getCrypto();
   }, []);
   const [crypto, setCrypto] = useState([]);

   const getCrypto = async () => {
      try {
         const crypto_data = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
         );
         setCrypto(crypto_data.data);
      } catch (error) {
         console.log(error);
      }
   };
   const handleColor = (data) => {
      const price_change = parseFloat(data);

      if (price_change < 0)
         return (
            <button className="btn-sm col-12 btn text-bold btn-danger">
               {price_change.toFixed(2)}%
            </button>
         );
      else {
         return (
            <button className="btn-sm col-12 btn text-bold btn-success">
               {price_change.toFixed(2)}%
            </button>
         );
      }
   };
   return (
      <div className="crypto-market">
         <div className="cm-head">
            <span>
               <a className="m-1  active">Trending</a>
            </span>
            <span>
               <a className="m-1">Gainers</a>
            </span>
            <span>
               <a className="m-1">Losers</a>
            </span>
            <span>
               <a className="m-1">Hot</a>
            </span>
         </div>
         <div className="cm-body">
            <table>
               <thead>
                  <tr>
                     <th>Trading Pairs</th>
                     <th>Price</th>
                     <th>24H Change</th>
                  </tr>
               </thead>
               <tbody>
                  {crypto.map((i, index) => (
                     <tr key={index}>
                        <td>
                           <span>
                              {i.symbol} <small>/ USDT</small>
                           </span>
                        </td>
                        <td>{i.current_price}</td>
                        <td className="text-right col-2 ">
                           {handleColor(i.price_change_percentage_24h)}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}
