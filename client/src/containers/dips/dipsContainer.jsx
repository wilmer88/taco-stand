import { useState } from "react";
import DipComponent from "../../components/dipComponent/DipComponent";

const DipsContainer = () => {

    console.count("i rerenderd in dipsContainer");


    const [dipShow, setDipShow]= useState(0);
    const[dipCounterLetVar, setDipCounterLetVar]=useState(0);

    const openDipHandelerPropFunction= ()=>{
    setDipShow(1);

    };

    const closeDipContainer= ()=>{
        setDipShow(0);
    };

const handleDipIncrement=(event)=> {
    event.preventDefault()
        console.log("i work");

       setDipCounterLetVar(dipCounterLetVar + 1);
               console.log(dipCounterLetVar);

    };

    const handleDipDecrement = (event)=>{
        event.preventDefault();

        if(dipCounterLetVar >= 1){

        setDipCounterLetVar(dipCounterLetVar - 1);
        }}
    
    return (<>

        <figcaption style={{ textAlign: "center", background: "lightyellow" }}>
            <h3 style={{ marginBottom: "10px" }}> <strong>Dips</strong></h3>
            <div>      <h6 style={{ marginBottom: 0 }}>Mezquites Dip: </h6>   <p style={{ marginBottom: 0 }}> Beef or chicken with cheese dip and pico de gallo</p></div>
            <div>      <h6 style={{ marginBottom: 0 }}>Tejano Dip: </h6>   <p style={{ marginBottom: 0 }}> Steak, grilled chicken, shrimp and cheesedip</p></div>

         

        </figcaption>
                    <div className="container" >
                        <form style={{ alignContent: "center", marginLeft: "5px", marginBottom: "10px" }} >

           

                            {dipShow === 1 &&


<>
<section className="columns is-vcentered "  >

<DipComponent 
dipCounterprop={dipCounterLetVar}
dipName="(Normal) Cheese Dip (4.75 ea)"
// onClick = {handleDipIncrement()}
handleDipIncrementPropFunction = {handleDipIncrement}
handleDipDecrementProp ={handleDipDecrement}
/>


<DipComponent 
dipCounterprop={dipCounterLetVar}
dipName="(Large) Cheese Dip ($10.00 ea)"
// onClick = {handleDipIncrement()}
handleDipIncrementPropFunction = {handleDipIncrement}
handleDipDecrementProp ={handleDipDecrement}
/>


<DipComponent 
dipCounterprop={dipCounterLetVar}
dipName="(Normal) Gucamole Dip (4.75 ea)"
// onClick = {handleDipIncrement()}
handleDipIncrementPropFunction = {handleDipIncrement}
handleDipDecrementProp ={handleDipDecrement}
/>



<DipComponent 
dipCounterprop={dipCounterLetVar}
dipName="(large) Gucamole Dip (9.25 ea)"
// onClick = {handleDipIncrement()}
handleDipIncrementPropFunction = {handleDipIncrement}
handleDipDecrementProp ={handleDipDecrement}
/>

</section>



<section className="columns is-centered "  >

<DipComponent 
dipCounterprop={dipCounterLetVar}
dipName="(Normal) Guaca Mix (7.50 ea)"
// onClick = {handleDipIncrement()}
handleDipIncrementPropFunction = {handleDipIncrement}
handleDipDecrementProp ={handleDipDecrement}
/>

<DipComponent 
dipCounterprop={dipCounterLetVar}
dipName="(Large) Guaca Mix (11.75 ea)"
// onClick = {handleDipIncrement()}
handleDipIncrementPropFunction = {handleDipIncrement}
handleDipDecrementProp ={handleDipDecrement}
/>

<DipComponent 
dipCounterprop={dipCounterLetVar}
dipName="Sour Cream ($1.50 ea)"
// onClick = {handleDipIncrement()}
handleDipIncrementPropFunction = {handleDipIncrement}
handleDipDecrementProp ={handleDipDecrement}
/>



<DipComponent 
dipCounterprop={dipCounterLetVar}
dipName="Pico De Gallo (2.25 ea)"
// onClick = {handleDipIncrement()}
handleDipIncrementPropFunction = {handleDipIncrement}
handleDipDecrementProp ={handleDipDecrement}
/>





</section>



<section className="columns is-centered " >

<DipComponent 
dipCounterprop={dipCounterLetVar}
dipName="Chorizo Dip (6.50 ea)"
// onClick = {handleDipIncrement()}
handleDipIncrementPropFunction = {handleDipIncrement}
handleDipDecrementProp ={handleDipDecrement}
/>

<DipComponent 
dipCounterprop={dipCounterLetVar}
dipName="Bean Dip (5.25 ea)"
// onClick = {handleDipIncrement()}
handleDipIncrementPropFunction = {handleDipIncrement}
handleDipDecrementProp ={handleDipDecrement}
/>


<DipComponent 
dipCounterprop={dipCounterLetVar}
dipName="El Mezquites Dip (6.75 ea) "
// onClick = {handleDipIncrement()}
handleDipIncrementPropFunction = {handleDipIncrement}
handleDipDecrementProp ={handleDipDecrement}
/>



<DipComponent 
dipCounterprop={dipCounterLetVar}
dipName="Tejano Dip (8.25 ea)"
// onClick = {handleDipIncrement()}
handleDipIncrementPropFunction = {handleDipIncrement}
handleDipDecrementProp ={handleDipDecrement}
/>

</section>
   
   </>

   } 
    <div  style={{ textAlign: "center", background: "tan" }}>

<div className="checkbox">
    <input
        type="checkbox"
        onChange={()=>{openDipHandelerPropFunction()}  }
        checked={dipShow===1}

    />
    <strong>View Dips Option</strong>
</div>

<div className="checkbox">
<input type="checkbox" style={{ marginLeft: "50px" }}
    onChange={()=>closeDipContainer()}
    checked={dipShow===0}
/>
<strong>Minimize Dips options</strong>
</div>

</div>

</form>


 </div>
 <hr></hr>

        
    </>)
};

export default DipsContainer;