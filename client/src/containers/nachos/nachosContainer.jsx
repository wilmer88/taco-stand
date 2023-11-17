import { useEffect, useRef, useState } from "react";
import bulmaCollapsible from '@creativebulma/bulma-collapsible';


const NachosContainer=(props)=>{
  console.count("i rerenderd in nachos");

  const collapsiblesref = useRef(null);
  const [isopen, setIsopen] = useState("is-invisible");

  const toggleColapse = ()=>{
    if(isopen==="is-invisible"){
      setIsopen("")
    };
    if(isopen===""){
      setIsopen("is-invisible")
    };
  }

  useEffect(() => {
    bulmaCollapsible.attach(".is-collapsible", {
     container: collapsiblesref.current });
   }, [])

    return(

<div  id={props.id } className="container" ref={collapsiblesref} style={{ padding:"10px"}}>
<div className="card" style={{background: "lightyellow", padding:"10px"}}>
  
    <header className="card-header" >

<h3  className="card-header-title is-4"  style={{justifyContent:"center"}}>
<strong>Nachos</strong>
</h3>
<a   href="#collapsible-card" data-action="collapse" className={`card-header-icon is-active  `} aria-label="more options" onClick={toggleColapse}>
  
  <span className="icon">
				<i className="fas fa-angle-down"  aria-hidden="false"></i>
			</span>
      </a>
 </header>

    
    <div id="collapsible-card" className={`is-collapsible ${isopen}`}>
        <div className="card-content">
      <div className="title is-5">
        Cheese Nachos:
        </div>
        <p className="subtitle is-6" >(Half 5.00)(Full 6.25)</p> 
       </div>
    </div>



  </div>


    {/* <button type="submit" className="button is-success is-small" style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px" }}>Add New Combo</button> */}

</div>

    
   )
};

export default NachosContainer;



  
  

