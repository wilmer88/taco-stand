import API from "../../utils/API"
import { useParams } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import StripCheckout from "react-stripe-checkout";
import alertContext from "../../context/alertContext";

const key = process.env.REACT_APP_STRIPE
const Payment = () => {

  const { ordenId } = useParams();
  const {setAlert} = useContext(alertContext);
  const [paymentObj, setPaymentObj] = useState({});

  useEffect(() => {
    API.getOrden(ordenId).then((response) => {
      console.log(response.data);
      setPaymentObj(response.data);
     }).catch((err) =>{ 
      console.log(err)
    });
   }, [ordenId])

const handleToken = token =>{
  const body = {token,paymentObj}
  const headers = {
    "Content-Type": "application/json"
  };
  paidFieldUpdateFunction()
  return  API.makeTacoPayment(body,headers).then(response =>{
    const {status} = response
    console.log(response);
    console.log(status);
  }).catch(error =>{console.log(error)})
};

  let ordenTotal = paymentObj.aguasVirtual + paymentObj.canDrinkVirtual + paymentObj.tacosVirtual + paymentObj.topingVirtual
  const numberInDollars = ordenTotal?.toFixed(2);

     const paidFieldUpdateFunction = ()=>{
     
      API.paidUpdate(ordenId, {pagado: true}).then((updatedfildObj) =>{
        console.log(updatedfildObj.data);
    setAlert({message:"Paid field was successfully updated!", type:"is-success"});
    
      }).catch((err) => {
        setAlert({message:"faild to update paid field!", type:"is-danger"});
          console.log(err);
        });

     };

    return (<>
      <div id='paymentPage'  className="container has-text-centered" >
          <h1 className="title is-3">Hola {paymentObj.nombreDeOrden}, </h1>
          <h1 className="title is-3">Total/Total</h1>
          <h5 className="title is-3">${numberInDollars}</h5>
          <StripCheckout className="has-text-centerd"
          stripeKey={key}
          token={handleToken}
          amount={ordenTotal * 100}
          name={paymentObj.nombreDeOrden}
          billingAddress
          shippingAddress>
            <button className="button is-danger is-light">Page Con Tarjeta</button>
          </StripCheckout>
   
      </div>
    </>);
};
export default Payment;
//  async function handleToken(token, addresses){

//   const response =  await API.makeTacoPayment({token, paymentObj});
//   console.log(response)


//   }

