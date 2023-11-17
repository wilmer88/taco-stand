import "../../components/OrdenHero/hero.css";
import "./ordenLevel.css"
import { Link } from "react-router-dom";
import { useContext, useState,useEffect } from "react";
import comboContext from "../../context/ComboContext";

const estilo = {
 nombre: {
   background: "#e8eaf6",
   
  
 },

 cambio: {
   borderRadius: "50%"
 },


}

const OrdenLevel = () => { 
  const [navmodal, setNavmodal]= useState("modal");
  const levelOrder = useContext(comboContext);
  const [levelComboCounter , setLevelCombo]= useState(0);
  // let levelComboCounter 

  const showAboutModel= ()=>{
    if(navmodal === "modal"){
      setNavmodal("modal is-active")
    }
    if(navmodal === "modal is-active"){
      setNavmodal("modal")
    }

  }

  useEffect(()=>{
    if(levelOrder.combo[0].comboPrice === "0"){
      // console.log(levelOrder.combo.length);
      setLevelCombo(levelOrder.combo.length -1)
      // levelComboCounter = levelOrder.combo.length
    }
    if(levelOrder.combo[0].comboPrice !== "0"){
      console.log(levelOrder.combo.length);
      setLevelCombo(levelOrder.combo.length)
      // levelComboCounter = levelOrder.combo.length
    }

  }, [levelOrder, levelComboCounter])

  return ( 

      <nav className="navbar is-fixed-top is-justify-content-center"   >

<div className="column has-text-centered" style={estilo.nombre}>
<Link className="levelHover" onClick={showAboutModel} >   
<h3 className="label"><i className="icofont-login icofont-2x"></i>About </h3>
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

<div className="column has-text-centered" style={estilo.nombre}>
<Link className="levelHover" to="/kitchen">
<h3 className="label"><i className="icofont-list icofont-2x"></i>Your Order {levelComboCounter} </h3></Link>
</div>
<aside id="navLevelmodal" className={`${navmodal}`} >
<div className="columns">
<div className="column is-full">
<div className="modal-background"></div>
     <div className="modal-content ">
     <div className="box is-mobile">
     <button onClick={showAboutModel} type="button" className="modal-close is-large" aria-label="close"></button>
     <img  id="aboutImage" src="./images/aboutLosMezquites.webp"alt="Los Mesquites About info 678 800-7036" style={{ overflow: "hidden" }} />
 </div>
     </div>
</div>
</div>

</aside>

</nav>  

      )
    }

export default OrdenLevel;