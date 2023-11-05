// import React, { useState } from "react";
import React from "react";

const DipComponent = (props) => {
  console.count("i rerenderd in DipComponet");

    return(<>

<div className="column has-text-centered is-3">
    <div className="container">
    <div className="box" style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px", }} >
    <div>{props.dipCounterprop}</div>
</div>
{/* <div>  ({props.dipSize})</div> */}
<div>  {props.dipName}</div>
        <button className="button is-rounded is-light ml-3" onClick={props.handleDipIncrementPropFunction}><strong style={{fontSize:"26px"}}>+</strong></button>
<button className="button is-info is-rounded ml-3" onClick={props.handleDipDecrementProp} ><strong style={{fontSize:"19px"}}>-</strong></button> 
    </div>
</div>

    </>)
};

export default DipComponent 

