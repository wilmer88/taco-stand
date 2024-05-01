import dipContext from '../../context/DipContext';
import React, { useContext, useState, useCallback } from 'react';
import RegularNlargeComponent from '../../components/regularNlargeComponent/regularNlargeComponent';
import { Link } from "react-router-dom";

const DipsPage = ()=>{

  console.log("im from DipsPage");

  const { dipPageContext, setDips} = useContext(dipContext);

  const [dipPageOrders, setDipPageOrders] = useState({
    dips: [
        {
            id: 1,
            name: "Cheese Dip",
            price: "4.50",
            size: "Regular",
            quantity: 0,
        },
        {
            id: 2,
            name: "Cheese Dip",
            price: "8.50",
            size: "Large",
            quantity: 0,
        },
        {
            id: 3,
            name: "Guacamole Dip",
            price: "4.75",
            size: "Regular",
            quantity: 0,
        },
        {
            id: 4,
            name: "Guacamole Dip",
            price: "9.25",
            size: "Large",
            quantity: 0,
        }
    ]
});

const handleDipIncrement = useCallback((id) => {
  setDipPageOrders(prevState => ({
      dips: prevState.dips.map(dip => 
          dip.id === id ? { ...dip, quantity: dip.quantity + 1 } : dip
      )
  }));
}, []); 

    return(
        <>
        
        <RegularNlargeComponent
        itemName="Cheese Dip"
        regularPriceDisplay="Regular(4.50)"
        largePriceDisplay="Large(8.50)"
        regularCounter={dipPageOrders.dips[0].quantity}
        largeCounter={dipPageOrders.dips[1].quantity}
        itemNameAddButtonR="cheeseDipRegular"
        itemNameAddButtonL="cheeseDipLarge"
        regularAddHandler={() => handleDipIncrement(1)}
        />


<div className='columns  is-responsive is-mobile is-centered  ' >
    
    <Link  to="/orden">
    <button className="button is-success is-small">Back</button>
    </Link>
    </div>
        </>
    )
};
export default DipsPage