import  React from "react";

const dipContext = React.createContext(

 {
  dips: [{
    id: 1,
    dipname: "",
    price: "",
    size: "",
    quantity: 0,
  },
], setDips:()=>{}
 }
 
 )

export default dipContext;