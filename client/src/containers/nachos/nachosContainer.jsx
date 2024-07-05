import {useState } from "react";
import { Link } from "react-router-dom";

const NachosContainer=()=>{
  // console.count("i rerenderd in nachos containers");

  const [navmodal, setNavmodal]= useState("modal");
  const showAboutModel= ()=>{
    if(navmodal === "modal"){
      setNavmodal("modal is-active")
    }
    if(navmodal === "modal is-active"){
      setNavmodal("modal")
    }
  };

  const [isopen, setIsopen] = useState(0);

  const toggleColapse = ()=>{
    if(isopen===0){
      setIsopen(1)
    };
    if(isopen===1){
      setIsopen(0)
    };
  };

    return(<>
<div className="card mb-5" style={{background: "lightyellow"}}>
    <header className="card-header" >
<h3  className="card-header-title is-4"  style={{justifyContent:"center"}}>
Nachos
</h3>
<div className="dropdown-trigger"> 
<button onClick={toggleColapse}>
  <span className="icon">
				<i className="fas fa-angle-down"  aria-hidden="false"></i>
			</span>
      </button>
</div>
 </header>
        { isopen === 1 &&
            <div className="card-content">
            <p><strong> Nachos:  </strong>Chicken, Beaf, Bean, Chicken And Bean, Chicken And Beef</p>     
            <p><strong>Nachos Supreme: </strong>Served with beans lettuce, soure cream, tomatoes, and guacamole.</p>    
             <p><strong>Nachos Fajita: </strong> Steak, Grilled Chicken, Shrimp, Mix or Tejano. Cooked with bell peppers, onions, and tomatoes.</p>
          <p><strong> * add Supreme 2.50  </strong> </p> 
             <p> <strong>*add Pineapple 2.00 </strong></p> 
             <Link to="/nachos">
             <button className="button is-success is-small" >Add Nachos</button>
             </Link> 
          </div>} </div>

  <aside className={`${navmodal}`} >

<div className="modal-background"></div>
     <div className="modal-content">
     <div className="box is-mobile">
   
     <button onClick={showAboutModel} type="button" className="modal-close is-large" aria-label="close"> x</button>
     <div className="column mb-2">
  
<p >Nachos Supreme:  </p>
       <p>Choice of beef or Chincken. Served with beans lettuce, soure cream, tomatoes, and guacamole. (Half 5.50)(Full 7.50)</p>     
   
    
   
        </div> 
</div> 
 </div>
</aside></> );
};

export default NachosContainer;



  
  

