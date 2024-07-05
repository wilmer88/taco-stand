import { Link } from "react-router-dom";
import MenuPage from "../components/modal/MenuPage";
import React, { useContext, useState } from "react";

const StartPage = ()=> {

  // console.count("i rerenderd in start page");

    const liestilo = {

        opaci: {
          backgroundColor: "rgba(255, 255, 255, .9)",
          color: "white"
        },
        fonte:{
          fontSize: "27px"
        },
        starterPadding:{
          padding:"15px"
        }
        };

        const [navmodal, setNavmodal]= useState("modal");


        const showAboutModel= ()=>{
          if(navmodal === "modal"){
            setNavmodal("modal is-active");
          }
          if(navmodal === "modal is-active"){
            setNavmodal("modal");
          }};
  
    return (<>
  <div className='columns is-mobile'style={liestilo.starterPadding}>
  <div className="column is-two-fifth"> </div>
  <div className= "mt-4 column is-full-mobile"  >
  <div className="container">
  {/* <div className="box"  > */}

  <h2 className="label has-text-centered" style={liestilo.fonte}>What Do You Want To DO?</h2>
  <div className="ml-3  field">
  <br></br>
 <Link to="./orden"> <button className="button is-black is-outlined">Order Now</button></Link> 
 <br></br>
 <br></br>
 <Link to="./kitchen"><button className="button is-black is-outlined">Cancel Order</button></Link>
 <br></br>
 <br></br>
 {/* <Link to="./ordens"><button className="button is-black is-outlined">See Orders</button></Link> */}
 <br></br>
 <br></br>
 <Link to="./login"><button className="button is-black is-outlined"> Iniciar Sesion/Log In</button></Link>
 <br></br>
 <br></br>
 <Link to="./signup"><button className="button is-black is-outlined">Inscribirse/Sign Up</button></Link>
 <br></br>
 <br></br>
 <Link className="levelHover" onClick={showAboutModel} > <button className="button is-black is-outlined"> Contact</button></Link> 
</div>
{/* </div> */}
</div>

  </div>

  <div className="column is-two-fifth"></div>
  </div>
  <aside id="navLevelmodal" className={`${navmodal}`} >
<div className="columns">
<div className="column is-full">
<div className="modal-background"></div>
     <div className="modal-content ">
    
     <button onClick={showAboutModel} type="button" className="modal-close is-large" aria-label="close"></button>
     <img  id="aboutImage" src="./images/aboutLosMezquites.webp"alt="Los Mesquites About info 678 800-7036" style={{ overflow: "hidden" }} />
     </div>
</div>
</div>
</aside>

   </>)
  }
  
  export default StartPage;
