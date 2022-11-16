import "./OrdenHero/hero.css";
import { Link } from "react-router-dom";

const estilo = {
 nombre: {
   background: "#e8eaf6",
 },

 cambio: {
   borderRadius: "50%"
 },
 altura: {

 }
}

const OrdenLevel = () => {
 
    return (

 
        <nav className="level  is-size-7 is-align-content-center" >
<div className="level-item has-text-centered" style={estilo.nombre}>
<Link to="/login">    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span><label className="label">  Iniciar Sesión</label></Link>
 </div>
        <div className="level-item has-text-centered is-hoverable " style={estilo.altura}>
       
      <Link to="/orden"> <label className="label">
            Ordenar
            </label><img id="santos" src={"/images/mi_santos.jpg" }alt="" style={{ height: "65px" } }/> </Link> 
        
        </div>
 
        <div className="level-item has-text-centered" style={estilo.nombre}>
        <Link to="/ordens"> <label className="label"> Lista De Espera </label></Link>
        </div>
      </nav>

      

      

    );
  
}

export default OrdenLevel;

