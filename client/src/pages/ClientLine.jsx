import Licomponent from "../components/LiComponent";
// import axios from "axios";
import React, {useEffect, useState} from "react";
import API from "../utils/API"
const FinishedOrden = () => {
  
  const [den, setDen] = useState([])
useEffect(() => {
  API.getOrdens().then((response ) => {
     console.log(response.data);
      setDen(response.data) }
      )
      .catch((err) =>{ 
        console.log(err)
      });
}, []);

  return ( <>


<div className="container is-align-self-auto is-size-7">
 {den.length ? (den.map( res =>(
              <Licomponent key= {res._id} {...res} />
            ))
            ): (<h1 style={{textAlign: "center" , fontSize: "22px", background: "lightyellow"}}>msg: You must be signed in to view this page</h1>)}
        </div>

  </> )}

export default FinishedOrden;

