import Licomponent from "../components/LiComponent";
// import axios from "axios";
import React, {useEffect, useState} from "react";
import API from "../utils/API";
import OrdenLevel from "../components/OrdenLevel";
import Footer from "../components/Footer";
const FinishedOrden = () => {
  // const [azada, pollo, total, precio, nombreDeOrden] = useState([]);
const [den, setDen] = useState([])

useEffect(() => {

  API.getOrdens().then(response  => setDen(response.data)
      )
      .catch((err) =>{ 
        console.log(err)
      });
}, []);

  return (
  <>

<OrdenLevel/>
        
        <div className="column is-narrow"></div>
            <div className="container mobile is-centered">
            
            {den.length ? (den.map( res =>(
              <Licomponent key= {res._id} {...res} />
            ))
            ): (<h1 style={{textAlign: "center" , fontSize: "22px", background: "lightyellow"}}>msg: You must be sign in to see/ cancel or edit your order.</h1>)}
              </div>
            <hr></hr>
          
            
            <div className="column is-narrow"></div>
             
              <hr></hr>
              <div><Footer/></div> 
  </>

      )}

export default FinishedOrden;

