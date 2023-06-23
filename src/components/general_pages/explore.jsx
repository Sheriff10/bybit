import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Explore() {
   const eCardFunc = (img, title, text) => {
      return { img, title, text };
   };
   const jArr = [
      eCardFunc(
         "spot.jpeg",
         "Spot Trading",
         "Buy and sell variety of crypto on the exchange. catch your next big win   "
      ),
      eCardFunc(
         "earn.jpeg",
         "High Yield APY",
         "Enjoy high yield with our diverse and flexible staking product"
      ),
      eCardFunc(
         "buy.jpeg",
         "Fiat - Crypto",
         "Buy crypto with your local currency from your local banks (coming soon...)"
      ),
      eCardFunc(
         "nft.jpeg",
         "NFT Marketplace",
         "Explore, buy and trade unique NFTs from creative artist all over the world"
      ),
   ];
   return (
      <div className="explore">
         <div className="container">
            <div className="e-head">
               <h2>Explore Our Full Product Suite Here</h2>
            </div>
            <div className="row">
               {jArr.map((i, index) => (
                  <div className="col-lg-6" key={index}>
                     <div className="e-card">
                        <div className="row align-items-center">
                           <div className="col-8">
                              <div className="e-card-head">
                                 <span className="text-bold">{i.title}</span>
                                 <br /> <br />
                                 <p>
                                    {i.text}
                                 </p>
                                 <div className="btn-con d-flex">
                                    <a href="#" className="btn">
                                       <FaArrowRight />{" "}
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-4">
                              <img
                                 src={i.img}
                                 alt="Logo"
                                 className="img-fluid"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
