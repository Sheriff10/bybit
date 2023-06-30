import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import authorizeUser from "../authentication/auth";

export default function UpdateBTC() {

   useEffect(() => {
    authorizeUser();
 }, []);


   const [price, setPrice] = useState("");
   const token = window.localStorage.getItem("token")

   const handleSubmit = (e) => {
      e.preventDefault();
      const data = { price };
      axios
         .post(`${window.api}/admin/update_btc`, data, {
            headers: {
               "x-auth-token": token,
               "Content-Type": "application/json",
            },
         })
         .then((res) => {
            console.log(res);
            window.alert("BTC price Updated Successfully ")
         })
         .catch((err) => {
            console.log(err);
            if (err) window.alert(err.response.data)
         });
   };
   return (
      <div className="btcprice">
         <form action="" onSubmit={handleSubmit}>
            <div className="form-group col-lg-4 col-12">
               <label htmlFor="">Enter BTC Price</label>
               <input
                  type="number"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
               />
               <button className="btn btn-warning mt-3 col-12">Update</button>
            </div>
         </form>
      </div>
   );
}
