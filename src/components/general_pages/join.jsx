import React from "react";

export default function Join() {
   const jCardFunc = (img, title, text) => {
      return { img, title, text };
   };
   const jArr = [
      jCardFunc(
         "king.png",
         "Trade like a KING ",
         "Begin your trading Journey on bybit. Join the KINGS"
      ),
      jCardFunc(
         "trade.png",
         "Passive Income",
         "Trade on bybit and create a vaste income stream"
      ),
      jCardFunc(
         "light.png",
         "Crypto Ideas",
         "Don't miss the market trend. Stay tuned on our socials for more crypto news"
      ),
   ];
   return (
      <div className="join">
         <div className="container">
            <div className="j-head">
               <h2>Join Bybit Exchange</h2>
            </div>
            <div className="j-body">
               <div className="container">
                  <div className="row">
                     {jArr.map((i, index) => (
                        <div className="col-lg-4 col-6 p-2" key={index}>
                           <div className="j-card">
                              <div className="j-card-img">
                                 <img
                                    src={i.img}
                                    alt="Trade"
                                    className="img-fluid"
                                 />
                                 <div className="j-card-cap">
                                    <h4>{i.title}</h4>
                                    <span>{i.text}</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
