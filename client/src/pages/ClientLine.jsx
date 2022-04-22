import Licomponent from "../components/LiComponent";
import axios from "axios";
import React, {useEffect, useState} from "react";

import OrdenLevel from "../components/OrdenLevel";
import Footer from "../components/Footer";
const FinishedOrden = () => {
  // const [azada, pollo, total, precio, nombreDeOrden] = useState([]);
const [den, setDen] = useState([])

useEffect(() => {

  axios.get("/api/ordens").then(response  => setDen(response.data)
      )
      .catch((err) =>{ 
        console.log(err)
      });
}, []);

  return (
  <>


<div className="columns is-centered">
<div className="column">
<OrdenLevel/>
</div>
</div>



<div className="column is-one-fifth"></div>

<div className= "column is-three-quarters-mobile" >

<br></br>

<div className="field is-mobile" >
           
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

       <div className="column is-one-fifth"></div>
  <hr></hr>

  <div className="columns is-centered">
<div className="column">
<Footer/>
</div>
</div>

  </>

      )}

export default FinishedOrden;

