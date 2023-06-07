import React from "react";
import Footer from "../general_pages/footer";
import Header from "../general_pages/header";
export default function Login() {
   return (
      <>
         <Header />
         <div className="login">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-12">
                     <div className="login-form">
                        <form action="">
                           <div className="form-head text-bold">
                            <span className="h4">Welcome to Bybit</span>
                           </div>
                           <div className="form-body">
                              <span>
                                 New to Bybit?{" "}
                                 <a href="#" className="text-pr text-bold">
                                    Sign up
                                 </a>
                              </span>
                              <br /> <br />
                              <div className="form-group">
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                 />
                              </div>
                              <div className="form-group">
                                 <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                 />
                              </div>
                              <div className="d-flex">
                                 <a href="#" className="text-pr text-bold">
                                    Forgotten Password?
                                 </a>
                              </div>
                              <div className="form-group">
                                 <button
                                    type="submit"
                                    className="form-control btn bg-pr text-bold"
                                    value={"Submit"}> Submit </button>
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
