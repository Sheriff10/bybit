import React from "react";
import { Link } from "react-router-dom";
import Footer from "../general_pages/footer";
import Header from "../general_pages/header";
export default function Signup() {
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
                                 Already have an account? {" "}
                                 <Link to="/login" className="text-pr text-bold">
                                    Log In
                                 </Link>
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
                              <div className="form-group">
                                 <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm password"
                                 />
                              </div>
                              <div className="form-group p-2">
                                 <input type="checkbox" className="m-2" />
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
                                    Submit
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
