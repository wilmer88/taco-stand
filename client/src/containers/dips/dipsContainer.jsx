import { useContext, useState } from "react";

// import alertContext from "../../context/alertContext";
// import Alert from "../../components/Alert/Alert";
import DipComponent from "../../components/dipComponent/DipComponent";

const DipsContainer = (props) => {

    const [dipShow, setDipShow]= useState("false");
const openDipHandelerPropFunction= ()=>{
    console.log("working");
    setDipShow("true");
}

  
    const [dipCounter, setDipCounter]= useState(0);

    const handleDipIncrement = (event) => {
       setDipCounter( dipCounter + 1);
       
    };

    const handleDipDecrement = (event)=>{
        event.preventDefault();
        if(dipCounter <= 0){
            dipCounter --
        }
    };

 

    return (<>

        <figcaption style={{ textAlign: "center", background: "lightyellow" }}>
            <h3 style={{ marginBottom: "10px" }}> <strong>Dips</strong></h3>
        </figcaption>



                    <div className="container" >
                        <form style={{ alignContent: "center", marginLeft: "5px", marginBottom: "10px" }} >

                            <div className="control" style={{ textAlign: "center", background: "tan" }}>

                                <label className="checkbox">
                                    <div className="dips">
                                        <input
                                            type="checkbox"
                                            name={"normalCheeseDip"}
                                            onClick={()=>openDipHandelerPropFunction()  }
                                      

                                        />
                                        <strong>ADD DIPS</strong>

                                    </div>

                                </label>
                                <label className="checkbox">
                                    <input type="checkbox" style={{ marginLeft: "50px" }}
                                        name={"closeDips"}
                          
                                    />
                                    <strong>REMOVE ALL DIPS </strong>
                                </label>


                            </div>






                            {       

dipShow === "true" &&


<>


<section className="columns is-vcentered "  >
<div className="column has-text-centered is-3">
    <div className="container">
    <div className="box" style={{ width:"90%" ,alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px", }} >
    <div>  </div>

    <div> ($4.75 ea): <mark>0</mark></div>
</div>
<div>  (Normal)</div>
<div>  Cheese Dip</div>
    <button className="button is-rounded is-light ml-3" ><strong style={{fontSize:"26px"}}>+</strong></button>
<button className="button is-info is-rounded ml-3" ><strong style={{fontSize:"19px"}}>-</strong></button> 
    </div>
</div>



<div className="column has-text-centered is-3">
    <div className="container">
    <div className="box" style={{  alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px", }} >
    <div>  (Normal)</div>
<div> Guacamole Dip</div>
    <div> ($4.75 ea)</div>
</div>

    <button className="button is-rounded is-light ml-3 mr-3" ><strong style={{fontSize:"26px"}}>+</strong></button>
      {/* <mark>   <strong style={{fontSize:"20px"}}>0</strong> </mark>      */}
      <mark>  0 </mark>     

<button className="button is-info is-rounded ml-3" ><strong style={{fontSize:"19px"}}>-</strong></button> 
    </div>
</div>



<div className="column has-text-centered is-3">
    <div className="container">
    <div className="box" style={{  alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px", }} >
     <mark>0</mark>
</div>
<div>  </div>
<div > (Normal) Guaca Mix ($4.75 ea)</div>
    <button className="button is-rounded is-light ml-3" ><strong style={{fontSize:"26px"}}>+</strong></button>
    
<button className="button is-info is-rounded ml-3" ><strong style={{fontSize:"19px"}}>-</strong></button> 
    </div>
</div>



<div className="column has-text-centered is-3">
    <div className="container">
    <div className="box" style={{  alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px", }} >
    <div>  (Normal)</div>
<div>Sour Cream</div>
<div>  <mark>0</mark>:($4.75 ea)</div> 
</div>
    <button className="button is-rounded is-light ml-3" ><strong style={{fontSize:"26px"}}>+</strong></button>
<button className="button is-info is-rounded ml-3" ><strong style={{fontSize:"19px"}}>-</strong></button> 
    </div>
</div>



</section>
<section className="columns is-centered "  >
<div className="column has-text-centered is-3">
    <div className="container">
    <div className="box" style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px", }} >
    <div>0</div>
</div>
<div>  (Large $8.75 ea)</div>
<div>  Cheese Dip</div>
    <button className="button is-rounded is-light ml-3" ><strong style={{fontSize:"26px"}}>+</strong></button>
<button className="button is-info is-rounded ml-3" ><strong style={{fontSize:"19px"}}>-</strong></button> 
    </div>
</div>



<div className="column has-text-centered is-3">
    <div className="container">
    <div className="box" style={{  alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px", }} >
    <div>  (large)</div>
<div>  Guacamole Dip</div>
<mark>0</mark>
</div>

<div>  ($11.75 ea)</div>

    <button className="button is-rounded is-light ml-3" ><strong style={{fontSize:"26px"}}>+</strong></button>
<button className="button is-info is-rounded ml-3" ><strong style={{fontSize:"19px"}}>-</strong></button> 
    </div>
</div>



<div className="column has-text-centered is-3">
    <div className="container">
    <div className="box" style={{  alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px", }} >
    <div>  ($11.75 ea)</div>

    <div>      <mark>  0 </mark>     
</div>
</div>
<div>  (large)</div>
<div> Guaca Mix</div>
    <button className="button is-rounded is-light ml-3" ><strong style={{fontSize:"26px"}}>+</strong></button>
<button className="button is-info is-rounded ml-3" ><strong style={{fontSize:"19px"}}>-</strong></button> 
    </div>
</div>



<div className="column has-text-centered is-3">
    <div className="container">
    <div className="box" style={{  alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px", }} >
    <div>    <mark>  0 </mark>        
</div>
    $8.75 ea
</div>
<div>  (Normal)</div>
<div>Pico De Gallo</div>
    <button className="button is-rounded is-light ml-3" ><strong style={{fontSize:"26px"}}>+</strong></button>
<button className="button is-info is-rounded ml-3" ><strong style={{fontSize:"19px"}}>-</strong></button> 
    </div>
</div>

</section>







<section className="columns is-centered " >

<DipComponent/>

<div className="column has-text-centered is-3">
    <div className="container">
    <div className="box" style={{  alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px", }} >
    
</div>
<div>  (large)</div>
<div>  Cheese Dip</div>
    <button className="button is-rounded is-light ml-3" ><strong style={{fontSize:"26px"}}>+</strong></button>
<button className="button is-info is-rounded ml-3" ><strong style={{fontSize:"19px"}}>-</strong></button> 
    </div>
</div>
</section>
                        

     </>
             } 
                        </form>
                        <hr></hr>
                    </div>
        
    </>)
};

export default DipsContainer;


{/* <div className="box"  style={{alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px", }} >
<div>0</div>
</div>
<div>  (large)</div>
<div>  Cheese Dip</div>
<button className="button is-rounded is-light ml-3" ><strong style={{fontSize:"26px"}}>+</strong></button>
<button className="button is-info is-rounded ml-3" ><strong style={{fontSize:"19px"}}>-</strong></button> 




    <div className="box" style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px", }} >
    <div>0</div>
   </div>
<div>  (large)</div>
<div>  Cheese Dip</div>
    <button className="button is-rounded is-light ml-3" ><strong style={{fontSize:"26px"}}>+</strong></button>
<button className="button is-info is-rounded ml-3" ><strong style={{fontSize:"19px"}}>-</strong></button> 
  

    
<div className="box" style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px", }} >
<div>0</div>
</div>
<div>(large)</div>
<div>  Cheese Dip</div>
<button className="button is-rounded is-light ml-3" ><strong style={{fontSize:"26px"}}>+</strong></button>
<button className="button is-info is-rounded ml-3" ><strong style={{fontSize:"19px"}}>-</strong></button>  */}