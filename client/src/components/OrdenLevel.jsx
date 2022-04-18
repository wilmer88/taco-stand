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
  
  <nav className="level">
<div className="level-item has-text-centered" style={estilo.nombre}>
  <Link to="/logIn"> Registrarse</Link>
 </div>
        <div className="level-item has-text-centered" style={estilo.altura}>
        Ordenar
        <Link to="/ordenar"><img id="santos" src="https://www.placecage.com/g/200/300"  alt="" style={{ height: "60px" } }/> </Link> 
        
        </div>
 
        <div className="level-item has-text-centered" style={estilo.nombre}>
        <Link to="/ClientLine"> Lista de espera</Link>
        </div>
      </nav>
      </div>
</div>


     
    );
  
}

export default OrdenLevel;

