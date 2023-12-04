import React from "react";

const DipComponent =  (props) => {

  console.count("i rerenderd in DipComponet");

    return(<>

    <div className="container">
    <div className="box" style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px", }} >
    <p className="subtitle "><strong>{props.subtitle}</strong></p>


<div> <p><strong>{props.dipNameProp}:</strong>  </p>  <mark s><strong > {props.dipCounterprop}</strong></mark>  </div>
<aside>

<button className="button is-info is-rounded ml-3" onClick={ props.handleDipIncrementPropFunction} ><strong style={{fontSize:"19px"}}>+</strong></button>


        <button className="button is-rounded is-light ml-3" onClick={props.handleDipDecrementProp}><strong style={{fontSize:"26px"}}>-</strong></button>

 </aside>
</div>


    </div>

    </>)
};

export default  React.memo(DipComponent);


