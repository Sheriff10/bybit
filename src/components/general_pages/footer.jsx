import React from "react";

export default function Footer() {
   const dum = [1, 2, 3, 4];
   const footerFunc = (title, menu) => {
      return { title, menu };
   };
   const l1 = [
      "About Bybit",
      "Bybit Communities",
      "Blog",
      "Announcements",
      "Risk Disclosure",
      "Careers",
   ];
   const l2 = [
      "One-Click Buy",
      "P2P Trading (0 Fees)",
      "VIP Program",
      "Referral Program",
      "Institutional Services",
      "Listing Application",
      "Tax API",
      "Audit",
   ];
   const l3 = [
      "Contact Us",
      "Help Center",
      "User Feedback",
      "Bybit Learn",
      "Trading Fee",
      "API",
      "Authenticity Check",
      "P2P FAQ",
   ];
   const l4 = [
      "Trade",
      "Derivatives",
      "Earn",
      "Launchpad",
      "NFT",
      "Bybit Card",
   ];
   const footerArr = [
      footerFunc("About", l1),
      footerFunc("Service", l2),
      footerFunc("Support", l3),
      footerFunc("Product", l4),
   ];
   return (
      <div className="footer">
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-12">
                  <h1>Logo Here</h1>
               </div>
               <div className="col-lg-8 col-12">
                  <div className="row">
                     {footerArr.map((i, index) => (
                        <div className="col-6 col-lg-3" key={index}>
                           <div className="box">
                              <div className="box-head text-pr text-bold">
                                 <span>{i.title}</span>
                              </div>
                              <div className="box-body">
                                 <ul>
                                    {i.menu.map((i, index) => (
                                       <li key={index}>{i}</li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="col-12 text-center p-3">
                  <small>© 2018-2023 Bybit.com. All rights reserved.</small>
               </div>
            </div>
         </div>
      </div>
   );
}
