import React, { useContext, useEffect, useState, useMemo, useCallback} from "react";
import alertContext from "../../context/alertContext";
import { Link } from "react-router-dom";
import comboContext from "../../context/ComboContext";
import OrderDataContext from "../../context/orderDataContext";


// import OnUpdateHook from "../hooks/onUpdateHook";

const estilo = {
    nombre: {
      background: "#e8eaf6",
    },
    cambio: {
      borderRadius: "50%"
    },
    pad: {
     padding: "60px",
    },};

const CheckoutBag= () => {

    const [levelPageCounter, setLevelCounter] = useState(0);
    const{OrderContextObj}= useContext(OrderDataContext);
    const burritoCount = useMemo(() => OrderContextObj.burritos?.length || 0, [OrderContextObj.burritos]);

  const { combo } = useContext(comboContext);
  const totalDipQuantity = useMemo(() => OrderContextObj.dips.reduce((sum, dip) => sum + dip.quantity, 0), [OrderContextObj.dips]);
  const comboCount = useMemo(() => combo.combo?.length || 0, [combo.combo]);



  const {message, type, setAlert} = useContext(alertContext);
  useEffect(()=>{
    if(message.length){
      setTimeout(()=>{
        setAlert({ message:"", type:"" })
      }, 8500)
    }

  },[message,setAlert])
  // console.count("i rerenderd in Alert component");

  useEffect(() => {
    // console.log(totalDipQuantity);
    // console.log("Memoized - Total Dip Quantity:", totalDipQuantity);
    // console.log("Memoized - Combo Count:", comboCount);
    // console.log("Current Level Page Counter:", levelPageCounter);

    setLevelCounter(totalDipQuantity + comboCount + burritoCount);

    // console.log("Updated Level Counter to:", totalDipQuantity + comboCount);

}, [totalDipQuantity, comboCount,OrderContextObj]);


  return (
    <>
  

<Link className="levelHover" to="/checkoutPage">
<h3 className="label" style={estilo.nombre}><i className="icofont-list icofont-2x"></i>Your Bag: {levelPageCounter} </h3>
</Link>

 
    
    </>
  );
};

export default (CheckoutBag);