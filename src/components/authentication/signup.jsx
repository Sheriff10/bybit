import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../general_pages/footer";
import Header from "../general_pages/header";
export default function Signup() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [conPass, setconPass] = useState("");
   const [err, setErr] = useState("");
   const [passErr, setPassErr] = useState("");
   const [loading, setLoading] = useState(0);

   const api = window.api;

   const spinner = (
      <div
         className="spinner-grow text-light spinner-grow-sm"
         role="status"
      ></div>
   );
   const handleSubmit = (e) => {
      e.preventDefault();
      const data = { email, password };
      setErr("");
      setLoading(1);
      setPassErr("");

      if (conPass !== password) {
         setLoading(0);
         setPassErr("Password doesn't match ");
      } else {
         axios
            .post(`${api}/auth/signup`, data)
            .then((res) => {
               setLoading(0);
               if (res.data == "Authenticated") {
                  const token = res.headers["x-auth-token"];
                  window.localStorage.setItem("token", token);
               }
               console.log(res.data);
            })
            .catch((error) => {
               setErr("Invalid login credentials");
               setLoading(0);
               handleResponse(error.response.data);
               console.log(error);
            });
      }
   };

   const handleResponse = (response) => {
      if (response == "email exist") {
         setErr("Email already registered");
         window.location.href = '/login'
      }
   };
   return (
      <>
         <Header />
         <div className="login">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-12">
                     <div className="login-form">
                        <form action="" onSubmit={handleSubmit}>
                           <div className="form-head text-bold">
                              <span className="h4">Create a Bybit Account</span>
                           </div>
                           <div className="form-body">
                              <span>
                                 Already have an account?{" "}
                                 <Link
                                    to="/login"
                                    className="text-pr text-bold"
                                 >
                                    Log In
                                 </Link>
                              </span>
                              <br /> <br />
                              <div className="form-group">
                                 <small className=" text-danger mt-0">
                                    {err}
                                 </small>
                                 <input
                                    type="email"
                                    className={
                                       err !== ""
                                          ? "input-err form-control"
                                          : "form-control"
                                    }
                                    placeholder="Email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                 />
                              </div>
                              <small className="text-danger">{passErr}</small>
                              <div className="form-group">
                                 <input
                                    type="password"
                                    className={
                                       passErr !== ""
                                          ? "input-err form-control"
                                          : "form-control"
                                    }
                                    placeholder="Password"
                                    required
                                    onChange={(e) =>
                                       setPassword(e.target.value)
                                    }
                                    value={password}
                                 />
                              </div>
                              <div className="form-group">
                                 <input
                                    type="password"
                                    className={
                                       passErr !== ""
                                          ? "input-err form-control"
                                          : "form-control"
                                    }
                                    placeholder="Confirm password"
                                    required
                                    onChange={(e) => setconPass(e.target.value)}
                                    value={conPass}
                                 />
                              </div>
                              <div className="form-group p-2">
                                 <input
                                    type="checkbox"
                                    className="m-2"
                                    required
                                 />
                                 <small>
                                    By clicking “Create Account”, you agree to
                                    <span className="text-pr text-bold">
                                       Terms of Service{" "}
                                    </span>
                                    and{" "}
                                    <span className="text-pr text-bold">
                                       Privacy Policy
                                    </span>
                                 </small>
                              </div>
                              <div className="form-group">
                                 <button
                                    type="submit"
                                    className="form-control btn bg-pr text-bold"
                                    value={"Submit"}
                                 >
                                    Submit {loading == 1 ? spinner : null}
                                 </button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
}
