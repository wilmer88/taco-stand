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
  const levelOrder = useContext(comboContext);
  const [levelComboCounter , setLevelCombo]= useState(0);
  // let levelComboCounter 


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

  return ( <nav className="level  is-size-7 is-align-content-center" >

        <div className="level-item has-text-centered" style={estilo.nombre}>
        <Link className="levelHover" to="/login">   
       <h3 className="label"style={estilo.altura}><i className="icofont-login icofont-2x"></i>Log In </h3>
        </Link>
        </div>

        <div className="level-item has-text-centered is-hoverable " >

        <Link className="levelHover" to="/">   
        <h3 className="label"  ><i className="icofont-home "></i>Home</h3>
        </Link>

        <Link className="levelHover" to="/orden"> <h3 className="label">
            Click Me to Order
         </h3><img id="santos" src={"/images/mezquitesLogo.png" }alt="" style={{ height: "65px" } }/>
         </Link> 

            <Link className="levelHover" to="/searcho">   
            <h3 className="label">Search  <i className="icofont-search-job"></i></h3>
            </Link>
        
        </div>
 
        <div className="level-item has-text-centered" style={estilo.nombre}>
        <Link className="levelHover" to="/kitchen">
        <h3 className="label"  style={estilo.altura}><i className="icofont-list icofont-2x"></i>Your Order {levelComboCounter} </h3></Link>
        </div>

      </nav>);}

export default OrdenLevel;

