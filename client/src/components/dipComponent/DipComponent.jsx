import React from "react";

const DipComponent =  (props) => {

  console.count("i rerenderd in DipComponet");

    return(<><div className="box" >

    <div className="subtitle ">{props.subtitle}
<div>{props.dipNameProp}:   <mark> {props.dipCounterprop}</mark>  </div>
</div>

<button className="button is-info is-rounded ml-3" onClick={ props.handleDipIncrementPropFunction}>+</button>
        <button className="button is-rounded is-light ml-3" onClick={props.handleDipDecrementProp}>-</button>


        </div></>)
};

export default  DipComponent;


