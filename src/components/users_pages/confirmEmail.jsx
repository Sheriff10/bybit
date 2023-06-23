import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Footer from "../general_pages/footer";
import Header from "../general_pages/header";

export default function ConfirmEmail() {
    const [emailHead, setemailHead] = useState('')
    const [emailText, setEmailText] = useState('')
    const [emailIcon, setEmailIcon] = useState('')
   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);
   const token = searchParams.get("token");

   useEffect(() => {
      confirmEmail();
   }, []);

   const api = window.api;

   const confirmEmail = () => {
      if (!token) window.location.href = "/login";
      else {
         axios
            .get(`${api}/auth/signup/verify_email`, {
               headers: {
                  "email_token": token,
                  "Content-Type": "application/json",
               },
            })
            .then((res) => {
                handleResponse(res.data)
            })
            .catch((error) => console.log(error));
      }
   };
   const handleResponse = (res) => {
    if (res == "invalid token") {
        setemailHead('Link Expired')
        setEmailText(" Please login and request for another verification. Thank you")
        setEmailIcon(<small className=" text-bold bg-danger"> x </small>)
    }else{
        setemailHead("Account Verified")
        setEmailText(<span>
            Thank your for verifying your email. Your account is
            ready. <br /> Happy trading
         </span>)
        setEmailIcon(<small className="text-light bg-success text-bold"> <FaCheck /> </small>)
    }
   }
   return (
      <div className="confirm-email">
         <Header />
         <div className="container">
            <div className="row hh justify-content-center">
               <div className="col-12 col-lg-6">
                  <div className="c-card">
                    <div className="icon-con text-center">{emailIcon}</div>
                     <h2>{emailHead}</h2> <br />
                     {emailText}
                     <div className="btn-con p-4">
                        <Link to="/login" className="btn btn-lg col-12 bg-pr">
                           Login
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
}
