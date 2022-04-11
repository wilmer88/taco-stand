import NombreField from "./NombreField";
// import { Link } from "react-router-dom";
// import React, {useState, useEffect } from "react";
// import API from "../utils/API";
// import NombreSelect from "./NombreSelect";
function OrdenBox() {
    //const numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,]
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
