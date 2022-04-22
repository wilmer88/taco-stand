import "./OrdenHero/hero.css"

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
<div className="columns is-mobile is-12">
  <div className="column is-12">  

  <nav  className="level">
<div className="level-item has-text-centered" style={estilo.nombre}>
<Link to="/login"><label className="label">  Iniciar Sesión</label></Link>
 </div>
        <div className="level-item has-text-centered is-hoverable" style={estilo.altura}>
        <label className="label">
            Ordenar
            </label>
      <Link to="/orden"><img id="santos" src={"/images/mi_santos.jpg" }alt="" style={{ height: "65px" } }/> </Link> 
        
        </div>
 
        <div className="level-item has-text-centered" style={estilo.nombre}>
        <Link to="/ordens"> <label className="label"> Lista De Espera </label></Link>
        </div>
      </nav>
      </div>
</div>
    );
  
}

export default OrdenLevel;

