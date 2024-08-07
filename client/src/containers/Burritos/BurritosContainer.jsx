import React, {useState } from "react";
import { Link } from "react-router-dom";
import MenuPage from "../../components/modal/MenuPage";


const BurritosContainer =()=>{
  // console.count("i rerenderd in burrito container");


    // const [navmodal, setNavmodal]= useState("modal");

    
    // const showAboutModel= ()=>{
    //   if(navmodal === "modal"){
    //     setNavmodal("modal is-active")
    //   }
    //   if(navmodal === "modal is-active"){
    //     setNavmodal("modal")
    //   }
    // };
  
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
                <button  className="button is-success is-small">View All/ Order Burritos</button>
                 </Link>
    <MenuPage menuImage={"./images/dipsNachosLaCarta.jpg"} />
            
            </div>  

            
            
            
            } 
            
            
            </div>
  
</> );
  };

export default BurritosContainer