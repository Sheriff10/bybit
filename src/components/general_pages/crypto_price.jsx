// bd0cc682-27f3-459d-8885-9a85fd9fe370    CMC private key
import React, { useEffect } from "react";
import axios from "axios";

export default function Crypto_price() {
    useEffect(() => {
        get_prices()
    }, [])
   const get_prices = async () => {
      axios
         .get(
            "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
            {
               headers: {
                  "X-CMC_PRO_API_KEY": "bd0cc682-27f3-459d-8885-9a85fd9fe370",
               },
            }
         )
         .then((res) => {
            console.log(res);
         })
         .catch((err) => {
            console.log(err);
         });
   };
   return <div>Crypto_price</div>;
}
