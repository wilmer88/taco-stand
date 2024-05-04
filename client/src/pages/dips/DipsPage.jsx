import dipContext from '../../context/DipContext';
import React, { useContext, useState, useCallback } from 'react';
import RegularNlargeComponent from '../../components/regularNlargeComponent/regularNlargeComponent';
import { Link } from "react-router-dom";

const DipsPage = ()=>{

//   console.log("im from DipsPage");



  const {setDips, dips} = useContext(dipContext);
  const [dipPageOrders, setDipPageOrders] = useState({
    dips: [
        {
            id: 1,
            dipname: "Cheese Dip",
            price: "4.50",
            size: "Regular",
            quantity: 0,
        },
        {
            id: 2,
            dipname: "Cheese Dip",
            price: "8.50",
            size: "Large",
            quantity: 0,
        },
        {
            id: 3,
            dipname: "Guacamole Dip",
            price: "4.75",
            size: "Regular",
            quantity: 0,
        },
        {
            id: 4,
            dipname: "Guacamole Dip",
            price: "9.25",
            size: "Large",
            quantity: 0,
        }
    ]
});
// console.log(dips);
// console.log(dipPageOrders.dips);




const addTodipContext = (event) => {
    // console.log(dipPageOrders.dips);

  let filterdips = [];

  for (let  i = 0; i< dipPageOrders.dips.length; i++){
    if (dipPageOrders.dips[i].quantity > 0){
      filterdips.push(dipPageOrders.dips[i]);
    }
  }

  setDips(filterdips);

  setTimeout(() => {

// console.log(filterdips)
 }, 1000);     
  
};

const handleDipIncrement = useCallback((id) =>
     {
        // console.log("Incrementing dip id:", id);

    setDipPageOrders(prevState => {
        const updatedDips = prevState.dips.map(dip =>
            dip.id === id ? { ...dip, quantity: dip.quantity + 1 } : dip
         );
        //  console.log("Updated dips:", updatedDips);
         return {dips: updatedDips}

        
        });
    }, 
    []); 

const handleDipDecroment = useCallback((id) => {
  setDipPageOrders(prevState => ({
      dips: prevState.dips.map(dip => dip.id === id ? { ...dip, quantity: dip.quantity > 0 ? dip.quantity - 1 : 0} : dip)
  }
));
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
        regularSubtractHandler={addTodipContext}

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