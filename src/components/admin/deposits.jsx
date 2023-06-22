import React from "react";

export default function Deposits({ deposits }) {
   const handleColor = (string) => {
      if (string === "confirmed") {
         return <span className="text-success"> {string} </span>;
      } else {
         return <span className="text-danger"> {string} </span>;
      }
   };
   return (
      <div className="w-con">
         <table>
            <thead>
               <tr>
                  <th>Amount</th>
                  <th>Coin</th>
                  <th>Date</th>
                  <th className="text-right">status</th>
               </tr>
            </thead>
            <tbody>
               {deposits.map((i, index) => (
                  <tr key={index}>
                     <th>{i.amount}</th>
                     <th>{i.coin}</th>
                     <th>{i.date + " " + i.time}</th>
                     <th className="text-right">{handleColor(i.pending)}</th>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
