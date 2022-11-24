// import {useState} from "react"
import { NavLink} from "react-router-dom";
const Footer = ()=> {
  const linkState=  [
    {name:"Home/Inicio", href:"/"},
    {name:"Waiting list/Fila", href:"/ordens"},
    {name:"Order/Ordenar", href:"/orden"},
    {name:"Incribirse-Signup", href:"/signup"},
    {name:"Log-In/Iniciar-Sesion", href:"/login"}
  ] 
    return (<>
      <hr></hr>
    <div className='columns is-mobile  '>
    <div className="column is-one-fifth"></div>

<div className= "column is-mobile" >

<nav className="navbar tabs is-centered  is-fixed-bottom is-justify-content-center mb-1" aria-label="breadcrumbs" >
  <ul>
    {linkState.map((item) =>(
      <li key={item.name}> <NavLink

      key={item.name}
       to={item.href}
       className={({isActive})=>{return "tabs is-centered navbar-item " + (!isActive ? "navbar-item " : "navbar-item " ) }}
      >
        {item.name}
      </NavLink>
      </li>
  
      
    ))}
  </ul>
</nav>
</div>
<div className="column is-one-fifth"></div>
    </div>
    </> )
  }
  export default Footer;
