import axios from "axios";
import React, { useEffect, useState } from "react";
import authorizeUser from "../authentication/auth";
import UserHeader from "./userHeader";

export default function DepositHistory() {
   const [depositHistory, setDepositHistory] = useState([]);
   const [noHistory, setNoHistory] = useState(
      <div className="no-history text-center col-12">
         <h3>No Transaction</h3>
      </div>
   );
   useEffect(() => {
      authorizeUser();
      getHistory();
   }, []);
   const token = window.localStorage.getItem("token");
   const handleColor = (text) => {
      if (text === "true") {
         return <small className="text-danger text-bold"><b>Pending</b></small>;
      } else {
         return <small className="text-success text-bold">{text}</small>;
      }
   };
   const getHistory = () => {
      axios
         .get(`${window.api}/user/deposit_history`, {
            headers: {
               "x-auth-token": token,
               "Content-Type": "application/json",
            },
         })
         .then((res) => {
            setDepositHistory(res.data);
            console.log(res.data);
         })
         .catch((err) => console.log(err));
   };
   return (
      <div className="d-history">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-12">
                  <div className="dp-head">
                     <span>Deposit History</span>
                  </div>
                  <div className="dp-body">
                     <span className="text-bold">All Transaction</span> <br />{" "}
                     <br />
                     <table>
                        <thead>
                           <tr>
                              <th>Coin</th>
                              <th className="text-right">Amount</th>
                           </tr>
                        </thead>
                        <tbody>
                           {depositHistory.map((i, index) => (
                              <tr key={index}>
                                 <td>
                                    <div className="wrap">
                                       <img src={i.image} alt={i.coin} />
                                       <span className="w-t">{i.coin}</span>
                                    </div>
                                    <small className="date">
                                       {i.date} {i.time}
                                    </small>
                                 </td>
                                 <td className="text-right">
                                    <div className="wrap">
                                       <span>{i.amount}</span>
                                    </div>
                                    <small className="status">
                                       {handleColor(i.pending)}
                                    </small>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                     {depositHistory.length == 0 ? noHistory : null}
                  </div>
               </div>
            </div>
         </div>
         <div className="spacer"></div>
         <UserHeader />
      </div>
   );
}
