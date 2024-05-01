import  React from "react";

const dipContext = React.createContext(

 {
  dipContext: [{
    dipId: 0,
    dipName:"",
    dipPrice:"",
    dipSize:"",
    key: 0
  }], setDipsItem:()=>{}
 }
 
 )

export default dipContext;