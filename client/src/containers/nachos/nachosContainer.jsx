import { useEffect, useRef, useState } from "react";
import bulmacollapsible from '@creativebulma/bulma-collapsible';

const NachosContainer=()=>{
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
    bulmacollapsible.attach(".is-collapsible", {
     container: collapsiblesref.current });
   }, [])

    return(

<div className="container" ref={collapsiblesref}  id="accordion_first" style={{ padding:"10px"}}>
<div  className="card" style={{background: "lightyellow", padding:"10px"}}>
  
    <header className="card-header" >

<h3 className="card-header-title is-4"  style={{justifyContent:"center"}}>
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
      <p className="title is-5">
        Cheese Dip:
        </p>
        <p className="subtitle is-6" >(Half 5.00)(Full 6.25)</p> 

         
     
       </div>
    </div>



  </div>


    {/* <button type="submit" className="button is-success is-small" style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px" }}>Add New Combo</button> */}

</div>

    
   )
};

export default NachosContainer;



   {/* 
   <p className="title is-4" style={{ marginBottom: 0 }}>Beans Nachos:  </p> 
    <p className="subtitle is-5" >(Half 5.00)(Full 6.25)</p> 
   <p className="title is-4" style={{ marginBottom: 0 }}>Beaf Nachos:  </p>
     <p className="subtitle is-5">(Half 5.50)(Full 7.50)</p>
      <p className="title is-4" style={{ marginBottom: 0 }}>Chicken Nachos:  </p> 
       <p className="subtitle is-5" >(Half 5.50)(Full 7.50)</p>
          <p className="title is-4" style={{ marginBottom: 0 }}>Chicken And Bean Nachos:  </p>
           <p className="subtitle is-5" >(Half 5.50)(Full 7.50)</p>
           <p className="title is-4" style={{ marginBottom: 0 }}>Chicken And Beef Nachos:  </p>
           <p className="subtitle is-5" >(Half 5.00)(Full 6.25)</p>
     <p className="title is-4" style={{ marginBottom: 0 }}>Nachos Supreme:  </p>
      <p className="subtitle is-5">Choice of beef or Chincken. Served with beans lettuce, soure cream, tomatoes, and guacamole. (Half 5.50)(Full 7.50)</p>
  


          <p className="title is-4" style={{ marginBottom: 0 }}>Nachos Fajita:   </p>
      <p className="subtitle is-5" >Cooked with bell peppers, onions, and tomatoes</p>
      <p className="title is-4" style={{ marginBottom: 0 }}>Steak  </p>
      <p className="subtitle is-5" >(Half 8.25)(Full 9.75)</p>
      <p className="title is-4"  style={{ marginBottom: 0 }}>Grilled Chicken  </p>
      <p className="subtitle is-5" >(Half 7.75)(Full 9.25)</p>
      <p className="title is-4" style={{ marginBottom: 0 }}>Shrimp  </p>
      <p className="subtitle is-5">(Half 8.75)(Full 11.25)</p>
      <p className="title is-4" style={{ marginBottom: 0 }}>Mix  </p>
      <p className="subtitle is-5">(Half 8.50)(Full 10.75)</p>
      <p className="title is-4" style={{ marginBottom: 0 }}>Tejano </p>
      <p className="subtitle is-5">(Half 8.75)(Full 11.25)</p>
      <p className="title is-4" style={{ marginBottom: 0 }}>* add Supreme 2.50  *add Pineapple 2.00</p> */}


