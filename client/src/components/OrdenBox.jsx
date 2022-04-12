// import NombreField from "./NombreField";
// import SelectField from "./Selectfield";
import React, {useState } from "react";
// import { Link } from "react-router-dom";
// import React, {useState, useEffect } from "react";
// import API from "../utils/API";
// import NombreSelect from "./NombreSelect";
function OrdenBox() {
  // const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,]
  const [orden,setOrden] = useState([]);
    function handleChangeI(e) {
   const {name, value} = e.target;
    setOrden({...orden, [name]: value})
    // setFormObj({...formObj, [name]: value})
  };
    return (

       <>




<div className="field is-horizontal">
<div className="m-5 mr-8 media-content">
          
<div className="field"> 
<label className="label">
            Nombre Para La Orden:
            </label>
            <div className="is-mobile">
              <input onChange={handleChangeI}
              type="text"
                aria-label="iput for order name"
                className="input is-normal is-rounded"
                name="nombrDeOrden"
                placeholder="Gonzalo"
                value={orden.nombreDeOrden}
              />
            </div>
         
</div>
         
        

           
           
                
      
            </div>
            </div>
           
         
    
       
       </>
 
    
    );
  
}
export default OrdenBox;
