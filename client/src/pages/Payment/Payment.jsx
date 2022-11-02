import API from "../../utils/API"
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import StripCheckout from "react-stripe-checkout";

const Payment = () => {

  const { ordenId } = useParams();

  const [paymentObj, setPaymentObj] = useState({});

  useEffect(() => {
    API.getOrden(ordenId).then((responses) => {
      // console.log(response)
      // console.log(response.data)
      setPaymentObj(responses.data)
     }).catch((err) =>{ 
      console.log(err)
    });
   }, [ordenId])

 
const handleToken = token =>{
  const body = {token,paymentObj}
  // const headers = {
  //   "Content-Type": "application/json"
  // }
  return  API.makeTacoPayment(body).then(response =>{
    const {status} = response
    console.log(response)
    console.log(status)

  }).catch(error =>{console.log(error)})
}

  const numberInDollars = paymentObj.ordenTotal?.toFixed(2);

    return (<>
    

      <div id='paymentPage'  className="container has-text-centered" >
   
          <h1 className="title is-3">Hola {paymentObj.nombreDeOrden}, </h1>
          <h1 className="title is-3">El total de  orden</h1>

          <h5 className="title is-3">${numberInDollars}</h5>
          <StripCheckout className="has-text-centerd"
          stripeKey="pk_test_51LyjEmJGe32KkiAVPHkqL73qTmYGd4W8LhwwLCw7y0YnHG1BpUdtyJXa8UBClg0VLzAPgjbW8ZPgRaGYw4SUr86Z00GJc7Q1S2"
          token={handleToken}
          amount={paymentObj.ordenTotal * 100}
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

