import React from "react";
import {useState } from "react";

import DipComponent from "../../components/dipComponent/DipComponent";

const DipsModel = ()=>{
  // console.count("i rerenderd in dipsModal");
  const[dipCounterLetVar, setDipCounterLetVar]=useState(0);    
    const [dipmodal, setDipmodal]= useState("modal");

    const showAboutModel= (e)=>{
      e.preventDefault()
      if(dipmodal === "modal"){
        setDipmodal("modal is-active")
      }
      if(dipmodal === "modal is-active"){
        setDipmodal("modal")
      }
    };

    const handleDipIncrement=(event)=> {
      event.preventDefault()
    
  
         setDipCounterLetVar(dipCounterLetVar + 1);
                 console.log(dipCounterLetVar);
  
      };
  
      const handleDipDecrement = (event)=>{
          event.preventDefault();
  
          if(dipCounterLetVar >= 1){
  
          setDipCounterLetVar(dipCounterLetVar - 1);
          }}


    return(<>


<aside id="dipmodal" className={`${dipmodal}`} >

<div className="modal-background"></div>

     <div className="modal-content ">
     <div className="box is-mobile">
<div className="columns is-vcentered"  >

<DipComponent 
dipCounterprop={dipCounterLetVar}
dipName="(Normal) Cheese Dip (4.75 ea)"
// onClick = {handleDipIncrement()}
handleDipIncrementPropFunction = {handleDipIncrement}
handleDipDecrementProp ={handleDipDecrement}
/>



<DipComponent 
// dipCounterprop={""}
// dipName="(Normal) Guaca Mix (7.50 ea)"
// onClick = {handleDipIncrement()}
// handleDipIncrementPropFunction = {handleDipIncrement}
// handleDipDecrementProp ={handleDipDecrement}
/>





<DipComponent 
// dipCounterprop={""}
// dipName="Chorizo Dip (6.50 ea)"
// onClick = {handleDipIncrement()}
// handleDipIncrementPropFunction = {handleDipIncrement}
// handleDipDecrementProp ={handleDipDecrement}
/>


</div>

 </div>
     </div>
     <button onClick={showAboutModel} type="button" className="modal-close is-large" aria-label="close"> x</button>
</aside>


     

            
<button type="submit" className="button is-success is-small mb-1" onClick={showAboutModel} style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px" }}>Add Dips</button> 

  


    
  
    
    
    </>)


};

export default  React.memo(DipsModel)