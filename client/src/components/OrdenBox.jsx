import NombreField from "./NombreField";
import SelectField from "./Selectfield";
import React, {useState } from "react";
// import { Link } from "react-router-dom";
// import React, {useState, useEffect } from "react";
// import API from "../utils/API";
// import NombreSelect from "./NombreSelect";
function OrdenBox() {
  const [orden,setOrden] = useState({
    nombreDeOrden: "",
    azada: 0,
    pollo: 0,
    barbacoa: 0,
    pastor: 0,
    chorizo: 0,
  });
    function handleChangeI(e) {
   const {name, value} = e.target;
    setOrden({...orden, [name]: value})
    // setFormObj({...formObj, [name]: value})
  };
    return (

       <>
<div className="content has-text-centered">
            <form>
              <div className="card">
              <div className="card-content">
              <div className="box is-shadowless is-align-self-center">
              <br></br>
              <div className="field is-horizontal">
                <NombreField/>
                
                <SelectField
                name="azada"
                text="Azada"
                value= {orden.azada}
                onChange= {handleChangeI}
                />

                <SelectField
                text="Pollo"/>

                <SelectField
                text="Barbacoa"/>

              </div>
             </div>
           </div>
                </div>
            </form>
          </div>
       
       </>
 
    
    );
  
}
export default OrdenBox;
