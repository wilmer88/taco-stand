import  React from "react";

const burritosContext = React.createContext(
    
 {
    burritoOrders: [{
      burritosOrderId: 1,
    burritosOrderName: "",
    burritosPrice: "0",
    key: 1,
  }],
      
   setBurritoContext:()=>{}
 }
    
    )

export default burritosContext;