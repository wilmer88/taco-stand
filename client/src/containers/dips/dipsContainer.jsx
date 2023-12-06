import{ useState}  from "react";
import React from "react";
import NachoSelect from "../../components/NachoSelect/NachoSelect";

const DipsContainer = () => {
    console.count("i rerenderd in dipsContainer");

    const [dipShow, setDipShow]= useState(0);
 

  
    const openDipHandelerPropFunction=  ()=>{
    setDipShow(1);
    };

    const closeDipContainer= ()=>{
        setDipShow(0);
    };

    const toggleColapseDips = (event)=>{
        event.preventDefault();
        if(dipShow===1){
          closeDipContainer()  
        }
       else {
     openDipHandelerPropFunction()
       }
    };

    const [navmodal, setNavmodal]= useState("modal");
    const showAboutModel= ()=>{
      if(navmodal === "modal"){
        setNavmodal("modal is-active")
      }
      if(navmodal === "modal is-active"){
        setNavmodal("modal")
      }
    };

 
    return (<>

    <div className="card" style={{background: "lightyellow"}}>
<header className="card-header" >

<h3  className="card-header-title is-4" style={{justifyContent:"center" }}> Dips</h3>
<div className="dropdown-trigger"> 
<button onClick={ toggleColapseDips}  >
<span className="icon">
      <i className="fas fa-angle-down"  aria-hidden="false"> </i>
    </span>
    </button>
</div>
 </header>

 {dipShow === 1 && <>
 <div> <p className="is-size-6 has-text-weight-medium"> Mezquites Dip: </p>Beef or chicken with cheese dip and pico de gallo</div>

 <div> <p className="is-size-6 has-text-weight-medium"> Tejano Dip: </p>Steak, grilled chicken, shrimp and cheesedip</div>

<button className="button is-success is-small" onClick={showAboutModel}>Add Nachos</button>

<div className="container" style={{ background: "tan" }}>
<div className="checkbox p-4">
<input type="checkbox"
      onChange={()=>{openDipHandelerPropFunction()}  }
      checked={dipShow===1}
      name="checked"/>
  View Dips
</div>

<div className="checkbox p-4">
<input type="checkbox" 
  onChange={()=>closeDipContainer()}
  checked={dipShow===0}
  name="unchecked"
/>
Minimize Dips
</div>
</div></>}


</div>


<hr></hr>
<aside className={`${navmodal} is-mobile`} >

<div className="modal-background"></div>
     <div className="modal-content">
     <div className="box is-mobile">
     <button onClick={showAboutModel} type="button" className="modal-close is-large" aria-label="close"> x</button>
     <div className="column mb-2">

<NachoSelect/>

   


        </div> 
</div> 
 </div>
</aside>


</>)
};

export default DipsContainer;