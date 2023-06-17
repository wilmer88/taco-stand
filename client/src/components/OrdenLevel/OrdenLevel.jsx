import "../OrdenHero/hero.css";
import "./ordenLevel.css"
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

const OrdenLevel = () => { return ( <nav className="level  is-size-7 is-align-content-center" >

        <div className="level-item has-text-centered" style={estilo.nombre}>
        <Link className="levelHover" to="/login">   
        <label className="label"><i className="icofont-login icofont-2x"></i>Iniciar Sesión/Log In</label>
        </Link>
        </div>

        <div className="level-item has-text-centered is-hoverable " style={estilo.altura}>

        <Link className="levelHover" to="/">   
        <label className="label"><i className="icofont-home "></i>Home/ Casa</label>
        </Link>

        <Link className="levelHover" to="/orden"> <label className="label">
            Ordenar
         </label><img id="santos" src={"/images/mi_santos.jpg" }alt="" style={{ height: "65px" } }/>
         </Link> 

            <Link className="levelHover" to="/searcho">   
            <label className="label">Buscar/ Search <i className="icofont-search-job"></i></label>
            </Link>
        
        </div>
 
        <div className="level-item has-text-centered" style={estilo.nombre}>
        <Link className="levelHover" to="/ordens">
        <label className="label"><i className="icofont-list icofont-2x"></i>Lista De Espera/Waiting list </label></Link>
        </div>

      </nav>);}

export default OrdenLevel;

