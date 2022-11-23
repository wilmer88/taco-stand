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
        setAlert({message:"faild to to get waiting list", type:"is-danger"})
      });
}, [setAlert]);

  return ( <>


<div className="container is-align-self-auto is-size-7">
 {den.length ? (den.map( res =>(
              <Licomponent key= {res._id} {...res} />
            ))
            ): (<h1 style={{textAlign: "center" , fontSize: "22px", background: "lightyellow"}}>msg: You must be signed in to view this page</h1>)}
        </div>

  </> )}

export default FinishedOrden;

