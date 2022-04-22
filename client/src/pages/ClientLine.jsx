import Licomponent from "../components/LiComponent";
import axios from "axios";
import React, {useEffect, useState} from "react";
const FinishedOrden = () => {

const [den, setDen] = useState([])

useEffect(() => {

  axios.get("http://localhost:3001/api/ordens").then(response  => setDen(response.data)
      )
      .catch((err) =>{ 
        console.log(err)
      });
}, []);

  return (
  <>
 <div className='columns is-mobile'>

<div className= "column is-three-quarters-mobile" >

<div className="column is-narrow">

<div className="container mobile is-centered">
            
            {den.length ? (den.map( res =>(
              <Licomponent key= {res._id} {...res} />
            ))
            ): (<h1 style={{textAlign: "center" , fontSize: "22px", background: "lightyellow"}}>msg: You must be signed in to view this page</h1>)}
              
              
        </div>
      </div>
   
   </div>


 </div>



  

  </>

      )}

export default FinishedOrden;

