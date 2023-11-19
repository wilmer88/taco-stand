import { useEffect, useRef, useState } from "react";
import bulmaCollapsible from '@creativebulma/bulma-collapsible';
import ComboDropdown from "../../components/comboDropdown/ComboDropdown";

const NachosContainer=(props)=>{


  console.count("i rerenderd in nachos");
  const [navmodal, setNavmodal]= useState("modal");
  const showAboutModel= ()=>{
    if(navmodal === "modal"){
      setNavmodal("modal is-active")
    }
    if(navmodal === "modal is-active"){
      setNavmodal("modal")
    }

  };

  const nachosOptions = [

  ];

  const collapsiblesref = useRef(null);
  const [isopen, setIsopen] = useState("is-invisible");

  const toggleColapse = ()=>{
    if(isopen==="is-invisible"){
      setIsopen("")
    };
    if(isopen===""){
      setIsopen("is-invisible")
    };
  };

  useEffect(() => {
    bulmaCollapsible.attach(".is-collapsible", {
     container: collapsiblesref.current });
   }, [])

    return(<>

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

        <strong><p >Nachos Supreme:  </p></strong>
       <p>Choice of beef or Chincken. Served with beans lettuce, soure cream, tomatoes, and guacamole. (Half 5.50)(Full 7.50)</p>
       
       <strong>    <p>Nachos Fajita:   </p> </strong>
    
       <p>Cooked with bell peppers, onions, and tomatoes</p>

       <strong>  <p>Chicken And Bean Nachos:  </p> </strong>
     
       <p>(Half 5.50)(Full 7.50)</p>

       <strong> </strong>
            <p className="title " >Chicken And Beef Nachos:  </p>
            <p className="subtitle" >(Half 5.00)(Full 6.25)</p>

            <strong> </strong>
        <p className="title" >Beans Nachos:  </p> 
     <p className="subtitle" >(Half 5.00)(Full 6.25)</p> 

     <strong> </strong>
    <p className="title " >Beaf Nachos:  </p>
      <p className="subtitle">(Half 5.50)(Full 7.50)</p>

      <strong> </strong>
       <p className="title" >Chicken Nachos:  </p> 
        <p className="subtitle" >(Half 5.50)(Full 7.50)</p>


  


      <p className="title " >Steak  </p>
      <p className="subtitle " >(Half 8.25)(Full 9.75)</p>
       <p className="title ">Grilled Chicken  </p>
       <p className="subtitle " >(Half 7.75)(Full 9.25)</p>
       <p className="title ">Shrimp  </p>
       <p className="subtitle">(Half 8.75)(Full 11.25)</p>
     <p className="title">Mix  </p>
     <p className="subtitle">(Half 8.50)(Full 10.75)</p>
       <p className="title">Tejano </p>
       <p className="subtitle">(Half 8.75)(Full 11.25)</p>
      <p className="title " >* add Supreme 2.50 </p> 
      <p className="title " > *add Pineapple 2.00</p> 


      <button type="submit" className="button is-success is-small" onClick={showAboutModel} style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px" }}>Add New Combo</button>
   


       </div>
    </div>

  </div>
  <aside id="navLevelmodal" className={`${navmodal}`} >
<div className="columns">
<div className="column is-full">
<div className="modal-background"></div>
     <div className="modal-content ">
     <div className="box is-mobile">
     <button onClick={showAboutModel} type="button" className="modal-close is-large" aria-label="close"></button>
     <ComboDropdown/>
     <button type="submit" className="button is-success is-small" style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px" }}>Add New Combo</button>


 </div>
     </div>
</div>
</div>
</aside>



</div>  

<hr></hr>

  </> );
};

export default NachosContainer;



  
  

