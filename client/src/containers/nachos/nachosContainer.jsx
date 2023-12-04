import { useEffect, useRef, useState } from "react";
import bulmaCollapsible from '@creativebulma/bulma-collapsible';
import NachoSelect from "../../components/NachoSelect/NachoSelect";

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

  const collapsiblesref = useRef(null);
  const [isopen, setIsopen] = useState("is-invisible");

  const toggleColapse = ()=>{
    if(isopen==="is-invisible"){
      setIsopen("")
      bulmaCollapsible.attach(".is-collapsible", {
        container: collapsiblesref.current });
    };
    if(isopen===""){
      setIsopen("is-invisible")
      bulmaCollapsible.attach(".is-collapsible", {
        container: collapsiblesref.current });
    };
  };

  useEffect(() => {
    bulmaCollapsible.attach(".is-collapsible", {
     container: collapsiblesref.current });
   }, [])

    return(<>


    <div  id={props.id } className="container" ref={collapsiblesref} >
<div className="card" style={{background: "lightyellow"}}>
  
    <header className="card-header" >

<h3  className="card-header-title is-4"  style={{justifyContent:"center"}}>
<strong>Nachos</strong>
</h3>
<div className="dropdown">
<div className="dropdown-trigger"> 
<button href="#collapsible-card" data-action="collapse" className={`button`} aria-label="more options" onClick={toggleColapse}>
  
  <span className="icon">
				<i className="fas fa-angle-up"  aria-hidden="false"></i>
			</span>
      </button>

</div>


</div>

 </header>

    
    <div id="collapsible-card" className={`is-collapsible ${isopen}`}>
        <div className="card-content">







<p><strong> Nachos:  </strong>Chicken, Beaf, Bean, Chicken And Bean, Chicken And Beef</p> 

<p>   <strong>Nachos Supreme: </strong>Served with beans lettuce, soure cream, tomatoes, and guacamole.</p>     


  <strong>Nachos Fajita: </strong>
  <p>Steak, Grilled Chicken, Shrimp, Mix or Tejano.</p>
  Cooked with bell peppers, onions, and tomatoes.







 <strong> <p>* add Supreme 2.50 </p>  </strong>
       <strong> <p > *add Pineapple 2.00</p>  </strong>
       <button type="submit" className="button is-success is-small" onClick={showAboutModel} style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px" }}>Add Nachos</button>

       </div>
    </div>
  </div>






  
  <aside id="navLevelmodal" className={`${navmodal}`} >
<div className="columns">
<div className="column is-full">
<div className="modal-background"></div>
     <div className="modal-content ">
     <div className="box is-mobile">
     <button onClick={showAboutModel} type="button" className="modal-close is-large" aria-label="close"> x</button>




     <div className="column mb-2">

   
      <NachoSelect
      subtitle1="(Half 8.25)"

      subtitle2="(Full 8.25)"
      topingCount="0"
      nachosName="Cheese Nachos" 

      
      />
      

   
       {/* <NachoSelect
      subtitle="(Full 9.75)"
      topingCount="0"
      nachosName="Cheese Nachos" 
      
      /> */}
      

        </div> 

        <hr></hr>

        <div className="column mb-2">
 

      <NachoSelect
      subtitle="(Half 8.25)"
      topingCount="0"
      
      />
      

       <NachoSelect
      subtitle="(Full 9.75)"
      topingCount="0"
      
      />
      

        </div> 

        <hr></hr>

        <div className="column mb-2">

      <NachoSelect
      subtitle="(Half 8.25)"
      topingCount="0"
      
      />
      

       <NachoSelect
      subtitle="(Full 9.75)"
      topingCount="0"
      
      />
      

        </div> 

        <hr></hr>


        <div className="column mb-2">
  
    
      <NachoSelect
      subtitle="(Half 8.25)"
      topingCount="0"
      
      />
      

       <NachoSelect
      subtitle="(Full 9.75)"
      topingCount="0"
      
      />
      

        </div> 

        <hr></hr>


        <div className="column mb-2">
      

      <NachoSelect
      subtitle="(Half 8.25)"
      topingCount="0"
      
      />
      

       <NachoSelect
      subtitle="(Full 9.75)"
      topingCount="0"
      
      />
      

        </div> 

        <hr></hr>


        <div className="column mb-2">
  

        <strong><p >Nachos Supreme:  </p></strong>
       <p>Choice of beef or Chincken. Served with beans lettuce, soure cream, tomatoes, and guacamole. (Half 5.50)(Full 7.50)</p>     
      <NachoSelect
      subtitle="(Half 8.25)"
      topingCount="0"
      
      />
      

       <NachoSelect
      subtitle="(Full 9.75)"
      topingCount="0"

      />
        </div> 


        <div className="column mb-2">
      <strong> <p>Steak  </p> </strong>
      <hr></hr>
      <NachoSelect
      subtitle="(Half 8.25)"
      topingCount="0"
      
      />
      

       <NachoSelect
      subtitle="(Full 9.75)"
      topingCount="0"
      
      />
      

        </div> 
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



  
  

