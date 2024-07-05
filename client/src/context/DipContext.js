import { createContext } from "react";
 
  const DipContext = createContext({
    dipsArr: [
      { id: 1, dipname: "Cheese Dip", price: 4.50, size: "Regular", quantity: 0 },
      { id: 2, dipname: "Cheese Dip", price: "8.50", size: "Large", quantity: 0 },
      { id: 3, dipname: "Guacamole Dip", price: "4.75", size: "Regular", quantity: 0 },
      { id: 4, dipname: "Guacamole Dip", price: "9.25", size: "Large", quantity: 0 }
    ],
    setDips: ()=>{}
  });
 
export default DipContext;