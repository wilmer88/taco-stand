import { NavLink} from "react-router-dom";
const Footer = ()=> {

    const linkState=  [
      {name:"Home/Inicio", href:"/"},
      {name:"Waiting list/Fila", href:"/ordens"},
      {name:"Order/Ordenar", href:"/orden"},
      {name:"Search/Buscar", href:"/searcho"},
      {name:"Incribirse-Signup", href:"/signup"},
      {name:"Log-In/Iniciar-Sesion", href:"/login"}
    ] 
    return (<>
<div className="scrolling-wrapper" >

<nav className="navbar is-mobile tabs is-centered  is-fixed-bottom  " aria-label="breadcrumbs"   >
  
  <ul className="mb-4 ">

    {linkState.map((item) =>(
      <li key={item.name}> <NavLink
     
       to={item.href}
       className={({isActive})=>{return "tabs is-centered navbar-item " + (isActive? "is-active " : "is-active "  ) }}
      >
        {item.name}
      </NavLink>
      </li>
      
    ))}
  </ul>
</nav>
</div>


</>)
  }
  export default Footer;
