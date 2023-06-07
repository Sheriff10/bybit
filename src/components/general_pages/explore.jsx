import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Explore() {
   const eCardFunc = (img, title, text) => {
      return { img, title, text };
   };
   const jArr = [
      eCardFunc(
         "spot.jpeg",
         "Trade With Royalty",
         "ELorem ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis nemo sint eveniet!"
      ),
      eCardFunc(
         "earn.jpeg",
         "Trade With Royalty",
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis nemo sint eveniet!"
      ),
      eCardFunc(
         "buy.jpeg",
         "Trade With Royalty",
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis nemo sint eveniet!"
      ),
      eCardFunc(
         "nft.jpeg",
         "Trade With Royalty",
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis nemo sint eveniet!"
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
                  <div className="col-lg-6">
                     <div className="e-card">
                        <div className="row align-items-center">
                           <div className="col-8">
                              <div className="e-card-head">
                                 <span className="text-bold">Spot</span>
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
