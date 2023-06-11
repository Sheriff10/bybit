import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../general_pages/footer";
import Header from "../general_pages/header";

export default function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [err, setErr] = useState("");
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
      axios
         .post(`${api}/auth/login`, data)
         .then((res) => {
            setLoading(0);
            if (res.data == "Authenticated") {
               const token = res.headers["x-auth-token"];
               window.localStorage.setItem("token", token);
               window.location.href = "/user/home";
            }
            console.log(res.data);
         })
         .catch((error) => {
            setErr("Invalid login credentials");
            setLoading(0);
            console.log(error);
         });
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
                              <span className="h4">Welcome to Bybit</span>
                           </div>
                           <div className="form-body">
                              <span>
                                 New to Bybit?{" "}
                                 <Link
                                    to="/signup"
                                    className="text-pr text-bold"
                                 >
                                    Sign up
                                 </Link>
                              </span>
                              <br /> <br />
                              <div className="form-group">
                                 <input
                                    type="email"
                                    className={
                                       err != ""
                                          ? `input-err form-control`
                                          : "form-control"
                                    }
                                    placeholder="Email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                 />
                              </div>
                              <div className="form-group">
                                 <input
                                    type="password"
                                    className={
                                       err != ""
                                          ? `input-err form-control`
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
                              <small className="text-bold text-danger">
                                 {err}
                              </small>
                              <div className="d-flex">
                                 <a href="#" className="text-pr text-bold">
                                    Forgotten Password?
                                 </a>
                              </div>
                              <div className="form-group">
                                 <button
                                    type="submit"
                                    className="form-control btn bg-pr text-bold"
                                    value={"Submit"}
                                 >
                                    {" "}
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
