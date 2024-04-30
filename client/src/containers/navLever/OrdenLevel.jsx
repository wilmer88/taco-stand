import "../../components/OrdenHero/hero.css";
import "./ordenLevel.css"
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import comboContext from "../../context/ComboContext";
import dipContext from "../../context/DipContext";
import Alert from "../../components/Alert/Alert";
import OnUpdateHook from "../../components/hooks/onUpdateHook";
import orderlevelOrderDataContext from "../../context/orderDataContext";


const estilo = {
 nombre: {
   background: "#e8eaf6",
 },

 cambio: {
   borderRadius: "50%"
 },

 pad: {
  padding: "60px",
 }

}

const OrdenLevel = () => { 
  // console count if for seend how many times a component rerenders
  console.count("i rerenderd in navbar");
  const [levelCounter, setLevelCounter]= useState(0);
  const levelComboOrder = useContext(comboContext);
  const levelOrderDataContext = useContext(orderlevelOrderDataContext);
  const dips= useContext(dipContext);
  const [navmodal, setNavmodal]= useState("modal");

  const showAboutModel= ()=>{
    if(navmodal === "modal"){
      setNavmodal("modal is-active");
    }
    if(navmodal === "modal is-active"){
      setNavmodal("modal");
    }};

  OnUpdateHook(()=>{
    console.log("im from ordenlevel", levelOrderDataContext);

    let combolengthFrunt = levelComboOrder.combo.length

    if(levelComboOrder.combo[0].comboPrice === "0"){
      combolengthFrunt = combolengthFrunt - 1
    };
      // console.log(dips.cheeseDipRegular);
      setLevelCounter(levelOrderDataContext.length);

  }, [levelComboOrder.combo,dips])

  return ( <>
  
    <section className="section" style={estilo.pad}>
      <nav className="navbar is-fixed-top is-justify-content-center" role="navigation"   >

<div className="column has-text-centered" >
<Link className="levelHover" onClick={showAboutModel}  >   
<h3 className="label" style={estilo.nombre}><i className="icofont-login icofont-2x"></i>About </h3>
</Link>
</div>

<div className="level-item is-hoverable " >
<Link className="levelHover" to="/">   
<h3 className="label"  ><i className="icofont-home "></i>Home</h3>
</Link>

<Link className="levelHover" to="/orden"> <h3 className="label">
 </h3><img   src={"/images/mezquitesLogo.webp" }alt="" style={{ height: "65px", width:"120px" }}/>
 </Link> 

    <Link className="levelHover" to="/searcho">   
    <h3 className="label">Search  <i className="icofont-search-job"></i></h3>
    </Link>

</div>

<div className="column has-text-centered" >
<Link className="levelHover" to="/checkoutPage">
<h3 className="label" style={estilo.nombre}><i className="icofont-list icofont-2x"></i>Your Order: {levelCounter} </h3></Link>
</div>

</nav> 

    </section>
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

<div className="container mt-3"> 
<Alert/>
</div>


    
     </> )
    }

export default  React.memo(OrdenLevel);