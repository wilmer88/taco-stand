import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MenuPage from "../../components/modal/MenuPage";






const BurritosContainer =()=>{


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
  Burritos
  
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

                <p><strong> LUIS BURRITO:  </strong> 11.23</p>     
              <p><strong>BURRITO SUPREMO: </strong>6.00</p>    
              
               <p><strong>BURRITO MI TIERRA: </strong> 11.25</p>
              
               <p><strong>BURRITO DE BARBACOA: </strong>9.75</p>

                <p><strong>BURRITO FRITO: </strong>11.00</p>

                <p><strong>BURRITO FAJITA: </strong></p>
  

  <p><strong>BURRITO ROLLOS: </strong></p>
                
                <Link  to="/burritopage">
                <button  className="button is-success is-small">View Burritos</button>
    
    </Link>
    <MenuPage
            menuImage={"./images/dipsNachosLaCarta.jpg"}
            />
            
     

            </div>  

            
            
            
            } 
            
            
            </div>
  
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

export default BurritosContainer