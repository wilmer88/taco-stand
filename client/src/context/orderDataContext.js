import React from "react";
const OrderContext = React.createContext({
    
ordercontextt: [
     {
        nombreDeOrden: "",
        phoneNumber:"",
        tableNumber:"",
        combo:[],
        azada:0,
        pollo: 0,
        barbacoa: 0,
        pastor: 0,
        chorizo: 0,
        cebolla: 0,
        cilantro: 0,
        pico: 0,
        redSalsa: 0,
        greenSalsa: 0,
        largeHorchata: 0,
        smallHorchata: 0,
        coca: 0,
        sprite: 0,
        fanta: 0,
        cancelar:false,
        preparada: false,
        pagado:false,
      }
],

    setOrderDataContext: ()=>{},

})

export default OrderContext;