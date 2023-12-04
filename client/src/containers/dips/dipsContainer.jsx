import{ useState}  from "react";
import DipsModel from "../../components/modal/DipsModal";

import React from "react";

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
   
event.preventDefault()
  
        if(dipShow===1){
          closeDipContainer()  
        }
       else {
        
     openDipHandelerPropFunction()

       }


     
          
      

    }
    
    return (<>
       <hr></hr>
                 <div className="container" >

                        <form style={{ alignContent: "center", marginLeft: "5px", marginBottom: "10px" }} >
                     
                        <div className="card" style={{background: "lightyellow"}}>
                        <header className="card-header" >
                     

                       
            <h3  className="card-header-title is-4" style={{ marginBottom: "10px",justifyContent:"center" }}> <strong>Dips</strong></h3>



<div className="dropdown">
<div className="dropdown-trigger"> 
<button href="#collapsible-card" data-action="collapse" className={`button`} aria-label="more options"  onClick={ toggleColapseDips}  >
  
  <span className="icon">
				<i className="fas fa-angle-up"  aria-hidden="false"></i>
			</span>
      </button>
</div>
</div>
x




                        </header>
                        {dipShow === 1 && <>
<div className="mt-2"><h6 style={{ marginBottom: 0 }}>Mezquites Dip: </h6>   <p style={{ marginBottom: 0 }}> Beef or chicken with cheese dip and pico de gallo</p></div>
 
 <div><h6 style={{ marginBottom: 0 }}>Tejano Dip: </h6>   <p style={{ marginBottom: 0 }}> Steak, grilled chicken, shrimp and cheesedip</p></div>

<DipsModel/>
</>}
                        
                       
                            


                        



                        </div>
                        




    <div className="container" style={{ textAlign: "center", background: "tan" }}>
<div className="checkbox">
    <input
        type="checkbox"
        onChange={()=>{openDipHandelerPropFunction()}  }
        checked={dipShow===1}
        name="checked"
    />

    <strong>View Dips</strong>
</div>

<div className="checkbox">
<input type="checkbox" style={{ marginLeft: "50px" }}
    onChange={()=>closeDipContainer()}
    checked={dipShow===0}
    name="unchecked"
/>
<strong>Minimize Dips</strong>
</div>
</div>

</form>


 </div>
 <hr></hr>

        
    </>)
};

export default DipsContainer;