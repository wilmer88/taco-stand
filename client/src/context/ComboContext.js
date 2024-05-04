import {createContext, useContext} from "react";

  const defaultValue=
    
 {
  combo: [{
    comboId: 1,
    comboPrice: "0",
    supreme: false,
    choice1: "",
    choice2: "",
    key: 1,}],
    
    setCombo:()=>{}

 };

// Custom hook to use context, potentially with additional logic or warnings
 const ComboContext = createContext(defaultValue);
 export const useComboContext = ()=>{
    // Add any debug warnings or additional logic here
  const context = useContext(useComboContext);
  return context
 }
 
 

export default ComboContext;