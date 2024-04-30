import  React from "react";

const comboContext = React.createContext(
    
 {
  combo: [{
    comboId: 1,
    comboPrice: "0",
    supreme: false,
    choice1: "",
    choice2: "",
    key: 1,
  }],
      
      setCombo:()=>{}
 }
    
    )


export default comboContext;