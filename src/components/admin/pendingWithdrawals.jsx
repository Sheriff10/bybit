import React from "react";

export default function PendingDeposit({ pendingDeposit, handleUpdate }) {
   return (
      <div className="w-con">
         <table>
            <thead>
               <tr>
                  <th>Amount</th>
                  <th>Coin</th>
                  <th>Date</th>
                  <th className="text-right">action</th>
               </tr>
            </thead>
            <tbody>
               {pendingDeposit.map((i, index) => (
                  <tr key={index}>
                     <th>{i.amount}</th>
                     <th>{i.coin}</th>
                     <th>{i.date + " " + i.time}</th>
                     <th className="text-right">
                        {" "}
                        <button className="btn-success btn btn-sm" onClick={() => handleUpdate(i.user, i.coin, i.amount, i.id, "confirmed")}>
                           Confirmed
                        </button>{" "}
                        <button className="btn-danger btn btn-sm" onClick={() => handleUpdate(i.user, i.coin, i.amount, i.id, "canceled")}>
                           Cancel
                        </button>
                     </th>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
