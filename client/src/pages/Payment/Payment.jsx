import API from "../../utils/API";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import StripCheckout from "react-stripe-checkout";
import alertContext from "../../context/alertContext";
// import * as dotenv from "dotenv";
// const configPath = "./path/to/.env"

const key = process.env.REACT_APP_NOT_SECRET_CODE

const Payment = () => {

  const { ordenId } = useParams();
  const {setAlert} = useContext(alertContext);
  const [paymentObj, setPaymentObj] = useState({});
  const navigate =  useNavigate()

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
      setTimeout(() => {navigate("/ordens")}, 3000);
      API.paidUpdate(ordenId, {pagado: true}).then((updatedfildObj) =>{
        console.log(updatedfildObj.data);
    setAlert({message:"Paid field was successfully updated!", type:"is-success"});
      }).catch((err) => {
        setAlert({message:"faild to update paid field!", type:"is-danger"});
          console.log(err);
        });
     };

     const alertContinue = () =>{
      alert("your are now using stripe a third party payment service")
     };

    return (<>
         <div className="container">
      <div id='paymentPage'  className="box has-text-centered mb-0" >
   
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
            <button  className="button is-danger is-light" onClick={alertContinue}>Pagar/Pay</button>
          </StripCheckout>
        </div>
          
      </div>
    </>);
};
export default Payment;


