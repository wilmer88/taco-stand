// import {useState} from "react"
import { Link, NavLink} from "react-router-dom";
const Footer = ()=> {
  const linkState=  [
    {name:"home", href:"/"},
    {name:"find", href:"/ordens"},
    {name:"ordenar", href:"/orden"},
    {name:"Incribirse-Signup", href:"/signup"},
  ] 
    return (<>
      <hr></hr>
    <div className='columns is-mobile  '>
    <div className="column is-one-fifth"></div>

<div className= "column is-mobile" >

<nav className="tabs navbar is-fixed-bottom is-justify-content-center mt-0" aria-label="breadcrumbs" >
  <ul>
    {linkState.map((item) =>(
      <li key={item.name}> <NavLink

      key={item.name}
       to={item.href}
       className={({isActive})=>{return " is-centered navbar-item " + (!isActive ? "navbar-item " : "navbar-item " ) }}
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
