import { Link } from "react-router-dom";
const Footer = ()=> {
  
    return (
      
    <>
      <hr></hr>
    <div className='columns is-mobile mb-0'>
    <div className="column is-one-fifth"></div>

<div className= "column is-mobile" >

<nav className="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/ordens">Find</Link></li>
    <li><Link to="/orden">Ordenar</Link></li>
    <li><Link to="/signup">Inscribirse-Sign up</Link></li>
    <li><Link to="/login">Iniciar Sesion-Log in</Link></li>

  </ul>
</nav>
</div>
<div className="column is-one-fifth"></div>
    </div>
    </> )
  }
  export default Footer;
  
