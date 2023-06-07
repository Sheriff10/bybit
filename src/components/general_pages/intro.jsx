import React from "react";

export default function Intro() {
   return (
      <div className="intro">
         <div className="container">
            <div className="d-flex c">
               <div className="wrap">
                  <div className="intro-text">
                     <h1>Bitcoin Rush</h1>
                     <h3 className="text-bold text-pr">
                        1,000,000 USDT Prize Pool Up for Grabs!
                     </h3><br />
                     <a href="#" className="btn bg-pr btn-lg">
                        REGISTER NOW!
                     </a>
                  </div>  
                  <div className="intro-form ">
                     <div className="row align-items-center">
                        <div className="col-lg-10">
                           <div className="input-group pt-3 mb-3">
                              <input
                                 type="text"
                                 className="form-control bg-dark"
                                 placeholder="Enter Email to Register"
                                 aria-label="Email"
                                 aria-describedby="basic-addon1"
                              />
                              <span
                                 className="input-group-text bg-pr"
                                 id="basic-addon1"
                              >
                                 REGISTER
                              </span>
                           </div>
                        </div>
                        <div className="col-lg-2">
                           <div className=" intro-icons d-flex">
                              <i>
                                 <img src="appstore.svg" alt="App store" />
                              </i>
                              <i>
                                 <img src="playstore.svg" alt="App store" />
                              </i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
