import Licomponent from "../components/LiComponent";
// import axios from "axios";
import React, {useEffect, useState} from "react";
import API from "../utils/API";
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

  return (<>
{ den.map( res =>(
   <Licomponent key= {res._id} {...res} />
))}

  </>

      )}

export default FinishedOrden;