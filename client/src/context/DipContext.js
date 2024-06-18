import { createContext } from "react";
 
  const DipContext = createContext({
    dipsArr: [],
    setDips: ()=>{}
  });
 
export default DipContext;