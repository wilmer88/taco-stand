import React from "react";

const ComboContext = React.createContext({
    comboId: 0,
    comboPrice: "",
    supreme: false,
    choice1: "",
    choice2: "",
    choice3: "",
    key:"",
     
     setMyCombo: ()=>{},
     setChoice1: ()=>{},
     setChoice2: ()=>{},

     


     

  
})

export default ComboContext