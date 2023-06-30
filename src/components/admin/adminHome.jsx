import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import authorizeUser from "../authentication/auth";
import AllUsers from "./allUsers";
import Deposits from "./deposits";
import PendingDeposit from "./pendingWithdrawals";
import UpdateBTC from "./updateBTC";
const token = window.localStorage.getItem("token");

export default function AdminHome() {
   const [overview, setOverview] = useState([]);
   const [totalUsers, setTotalUsers] = useState(0);
   const [totalDeposit, setTotalDeposit] = useState(0);
   const [totalPendingDeposit, setTotalPendingDeposit] = useState(0);
   const [totalWithdrawal, settoTalWithdrawal] = useState(0);
   const [pendingDeposit, setPendingDeposit] = useState([]);
   const [users, setUsers] = useState([]);
   const [deposit, setDeposit] = useState([]);
   const [component, setComponent] = useState(
      <PendingDeposit pendingDeposit={pendingDeposit} />
   );

   useEffect(() => {
      authorizeUser();
      getOverviewData();
   }, []);
   useState(() => {
      if (users.length !== 0) {
         toggleActiveTab(".a1");
      }
   }, [users]);

   const getOverviewData = () => {
      axios
         .get(`${window.api}/admin/overview`, {
            headers: {
               "x-auth-token": token,
               "Content-Type": "application/json",
            },
         })
         .then((res) => {
            setOverview(res.data);
            setTotalUsers(res.data.overview.totalUsers);
            setTotalDeposit(res.data.overview.totalDeposit);
            setTotalPendingDeposit(res.data.overview.totalPendingDeposit);
            setPendingDeposit(res.data.data.pendingDeposit);
            setUsers(res.data.data.users);
            setDeposit(res.data.data.deposits);
         })
         .catch((err) => {
            if (err) {
               window.alert("Access Forbidden");
               window.location.href = "/login";
            }
         });
   };

   const aCardFunc = (title, value, icon, text) => {
      return { title, value, icon, text };
   };
   const aCardArr = [
      aCardFunc(
         "Total Users",
         totalUsers,
         <FaHome />,
         "total number of registered users"
      ),
      aCardFunc(
         "Total Deposits",
         totalDeposit,
         <FaHome />,
         "total deposit on the exchange"
      ),
      aCardFunc(
         "Pending Deposits",
         totalPendingDeposit,
         <FaHome />,
         "Unapproved deposits"
      ),
      aCardFunc(
         "Total Withdrawals",
         totalWithdrawal,
         <FaHome />,
         "Number of withdrawals made by users"
      ),
   ];
   // Deposits update functions

   const handleUpdate = (email, coin, amount, deposit_id, pending) => {
      const data = { email, coin, amount, deposit_id, pending };

      axios
         .post(`${window.api}/admin/updatecoin`, data, {
            headers: {
               "x-auth-token": token,
               "Content-Type": "application/json",
            },
         })
         .then((res) => {
            if(res.data == "updated") {
                window.location.href = '/admin/dashboard'
            }
         })
         .catch((err) => console.log(err));
   };

   const toggleActiveTab = (className) => {
      document.querySelector(".a-tab").classList.remove("a-tab");
      document.querySelector(className).classList.add("a-tab");

      if (className === ".a1")
         setComponent(
            <PendingDeposit
               pendingDeposit={pendingDeposit}
               handleUpdate={handleUpdate}
            />
         );
      if (className === ".a2") setComponent(<Deposits deposits={deposit} />);
      if (className === ".a3") setComponent(<AllUsers users={users} />);
      if (className === ".a4") setComponent(<UpdateBTC/>);
   };

   return (
      <div className="admin">
         <div className="a-banner">
            <div className="a-banner-head">
               <h3>Overview</h3>
            </div>
            <div className="container">
               <div className="row">
                  {aCardArr.map((i, index) => (
                     <div className="col-6 col-lg-3" key={index}>
                        <div className="a-card">
                           <div className="a-card-head">
                              <span className="text-bold">{i.title}</span>
                              <i>{i.icon}</i>
                           </div>
                           <div className="a-card-body">
                              <h3>
                                 <b>{i.value}</b>
                              </h3>
                              <small>{i.text}</small>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <div className="container">
            <div className="a-menu">
               <a className="a1" onClick={() => toggleActiveTab(".a1")}>
                  Pending Deposits
               </a>
               <a className="a2" onClick={() => toggleActiveTab(".a2")}>
                  Deposits
               </a>
               <a className="a3" onClick={() => toggleActiveTab(".a3")}>
                  Users
               </a>
               <a className="a4" onClick={() => toggleActiveTab(".a4")}>
                  Update BTC price
               </a>
               <small className="a-tab"></small>
            </div>
            <div className="wrap ">{component}</div>
         </div>
         {/* {loading == 1 ? spinner : null} */}
      </div>
   );
}
