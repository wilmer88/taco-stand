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
       <h3 className="label"><i className="icofont-login icofont-2x"></i>Iniciar Sesión/ Log In </h3>
        </Link>
        </div>

        <div className="level-item has-text-centered is-hoverable " style={estilo.altura}>

        <Link className="levelHover" to="/">   
        <h3 className="label"><i className="icofont-home "></i>Home/ Casa</h3>
        </Link>

        <Link className="levelHover" to="/orden"> <h3 className="label">
            Ordenar
         </h3><img id="santos" src={"/images/mezquitesLogo.png" }alt="" style={{ height: "65px" } }/>
         </Link> 

            <Link className="levelHover" to="/searcho">   
            <h3 className="label">Buscar/ Search <i className="icofont-search-job"></i></h3>
            </Link>
        
        </div>
 
        <div className="level-item has-text-centered" style={estilo.nombre}>
        <Link className="levelHover" to="/kitchen">
        <h3 className="label"><i className="icofont-list icofont-2x"></i>kitchen/ Waiting list </h3></Link>
        </div>

      </nav>);}

export default OrdenLevel;

