import{ useState}  from "react";
import React from "react";
import { Link } from "react-router-dom"
import "./dipContainer.css"
const DipsContainer = () => {

    // console.count("i rerenderd in dipsContainer");

    const [dipShow, setDipShow]= useState(0);
    const [navmodal, setNavmodal]= useState("modal");

 
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

    const showAboutModel= ()=>{
      if(navmodal === "modal"){
        setNavmodal("modal is-active")
      };
      if(navmodal === "modal is-active"){
        setNavmodal("modal")
      };
    };

    return (<>
<aside className={`${navmodal} is-mobile`} >

<div className="modal-background"></div>
     <div className="modal-content">
     <div className="box is-mobile">
     <button onClick={showAboutModel} type="button" className="modal-close is-large" aria-label="close"> x</button>
     <img
                    id="aboutImage"
                    src="./images/dipNachoAla.jpg"
                    alt="Los Mesquites About info 678 800-7036"
                    style={{ overflow: "hidden" }}
                  />

     <div className="column mb-2">
        </div> 
</div> 
 </div>
</aside>

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

<div  id="dipContainerButtons" className="is-justify-content-center">
<div className="field is-grouped">
  <Link to="/dips">
<button className="button is-success is-small mb-1" >Add/ Edit Dips</button>
</Link>
<button className="button is-info is-small ml-2 mb-2" onClick={showAboutModel}>Menu Image</button>


  </div>


</div>




  







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

</div>

</>}

</div>

<hr></hr>


</>)
};

export default DipsContainer;