import Licomponent from "../components/LiComponent";
// import axios from "axios";
import React, {useContext,useEffect, useState} from "react";
import alertContext from "../context/alertContext";

import API from "../utils/API"
const FinishedOrden = () => {
  const {setAlert} = useContext(alertContext)

  const [den, setDen] = useState([])
useEffect(() => {
  API.getOrdens().then((response ) => {
     console.log(response.data);
      setDen(response.data);
      setAlert({message:"retrived all orders", type:"is-success"});
    })
      .catch((err) =>{ 
        console.log(err)
        setAlert({message:"faild to to get waiting list/ usario debe iniciar sesion/ user must be signed in", type:"is-danger"})
      });
}, [setAlert])

  return ( <>
<div className="container is-align-self-auto is-size-7 mt-6">
 {den.length ? (den.map( res =>(
              <Licomponent key= {res._id} {...res} />
            ))
            ): (<h1 style={{textAlign: "center" , fontSize: "22px", background: "lightyellow"}}>msg: Sign in to view this page/Inicie sesion para poder ver</h1>
            )}
        </div>

  </> )}

export default FinishedOrden;

