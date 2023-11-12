// import React, { useState } from "react";
import React from "react";

const DipComponent = (props) => {
  console.count("i rerenderd in DipComponet");

    return(<>

<div className="column has-text-centered is-3">
    <div className="container">
    <div className="box" style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px", }} >

<div> <strong>{props.dipName}:</strong>  <mark style={{fontSize:"20px"}}><strong > {props.dipCounterprop}</strong></mark>  </div>
</div>
{/* <div>  ({props.dipSize})</div> */}
<aside className="">
{/* <div>{props.dipCounterprop} </div> */}

        <button className="button is-rounded is-light ml-3" onClick={props.handleDipIncrementPropFunction}><strong style={{fontSize:"26px"}}>+</strong></button>


<button className="button is-info is-rounded ml-3" onClick={props.handleDipDecrementProp} ><strong style={{fontSize:"19px"}}>-</strong></button>

 </aside>

    </div>
</div>

    </>)
};

export default DipComponent 

