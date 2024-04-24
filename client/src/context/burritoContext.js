import  React from "react";

const burritosContext = React.createContext(
    
 {
    burritoOrders: [{
    burritoOrderId: 0,
    burritoName: "",
    burritosPrice: "0",
    pineapple:false,
    supreme: false,
    key: 1,
  }],
      
   setNacho:()=>{}
 }
    
    )

export default burritosContext;