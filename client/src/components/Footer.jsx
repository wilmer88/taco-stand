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



  

    return (
     
  

<>
<div className="scrolling-wrapper" >


<nav className="navbar tabs is-centered  is-fixed-bottom  " aria-label="breadcrumbs" style={{marginTop: "10px"}}  >
  
  <ul className="mb-4 ">

    {linkState.map((item) =>(
      <li key={item.name}> <NavLink


       to={item.href}
       className={({isActive})=>{return "tabs is-centered navbar-item " + (isActive ? "navbar-item " : "navbar-item " ) }}
      >
        {item.name}
      </NavLink>
      </li>
      
    ))}
  </ul>
</nav>
</div>


</>






)
  }
  export default Footer;
