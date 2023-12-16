import React, { useState } from "react";


const MenuPage = (props) => {

    const [navmodal, setNavmodal]= useState("modal");

    const showAboutModel= ()=>{
      if(navmodal === "modal"){
        setNavmodal("modal is-active");
      }
      if(navmodal === "modal is-active"){
        setNavmodal("modal");
      }
  
    }



return (<>


<button  onClick={showAboutModel} type="button" className="button is-small">View Menu</button>










<aside id="navLevelmodal" className={`${navmodal}`} >
<div className="columns">
<div className="column is-full">
<div className="modal-background"></div>
     <div className="modal-content ">
    
     <button onClick={showAboutModel} type="button" className="modal-close is-large" aria-label="close"></button>
     <img  id="aboutImage" src={props.menuImage}alt="Los Mesquites About info 678 800-7036" style={{ overflow: "hidden" }} />

     </div>
</div>
</div>
</aside>
    </>)
};

export default MenuPage