import React, { useState } from "react";


const DipComponent = (props) => {


    return(<>

    
<div className="column has-text-centered is-3">
    <div className="container">
    <div className="box" style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px", }} >
    <div>{props.dipCounter}</div>
</div>
<div>  ({props.dipSize})</div>
<div>  {props.dipName}</div>
    <button className="button is-rounded is-light ml-3" onClick={ props.handleDipIncrementPropFunction}><strong style={{fontSize:"26px"}}>+</strong></button>
<button className="button is-info is-rounded ml-3" onClick={props.handleDipDecrement} ><strong style={{fontSize:"19px"}}>-</strong></button> 
    </div>
</div>
    
    
    </>)
};

export default DipComponent 

// export default <DipComponent dipAdder = {handleDipIncrement} dipSubtractor = {handleDipDecrement}/>