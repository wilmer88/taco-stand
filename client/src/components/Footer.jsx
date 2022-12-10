import { NavLink} from "react-router-dom";
import {useState} from "react";

const Footer = ()=> {


  // const[toggleState,setToggleState] = useState(1)
    const [linkState]= useState([
            {name:"Home/Inicio", href:"/"},
      {name:"Waiting list/Fila", href:"/ordens"},
      {name:"Order/Ordenar", href:"/orden"},
      {name:"Search/Buscar", href:"/searcho"},
      {name:"Incribirse-Signup", href:"/signup"},
      {name:"Log-In/Iniciar-Sesion", href:"/login"}
          
      // {name:"Home/Inicio", href:"/", liclass: "is-active tablinks", id:"home"},
      // {name:"Waiting list/Fila", href:"/ordens", liclass: "tablinks",  id:"fila"},
      // {name:"Order/Ordenar", href:"/orden",  liclass: "tablinks",  id:"ordenar"},
      // {name:"Search/Buscar", href:"/searcho",  liclass: "",  id:"buscar"},
      // {name:"Incribirse-Signup", href:"/signup",  liclass: "",  id:"inscribir"},
      // {name:"Log-In/Iniciar-Sesion", href:"/login",  liclass: "",  id:"ineiciar"}
    
      //  {name:"Home/Inicio", href:"/", liclass: "is-active tablinks", id:"home", clikk: (event)=>toggleTab(event) },
      // {name:"Waiting list/Fila", href:"/ordens", liclass: "tablinks",  id:"fila", clikk: (event)=>toggleTab(event)  },
      // {name:"Order/Ordenar", href:"/orden",  liclass: "tablinks",  id:"ordenar", clikk: (event)=>toggleTab(event)  },
      // {name:"Search/Buscar", href:"/searcho",  liclass: "",  id:"buscar", clikk: (event)=>toggleTab(event) },
      // {name:"Incribirse-Signup", href:"/signup",  liclass: "",  id:"inscribir", clikk: (event)=>toggleTab(event) },
      // {name:"Log-In/Iniciar-Sesion", href:"/login",  liclass: "",  id:"ineiciar", clikk: (event)=>toggleTab(event) }
    ] );
    // let toggleTab = (event,litab) =>{
      
    //   for(let i = 0; i < linkState.length; i++){
    //   setLinkState( NavLink[i].className = NavLink.className.replace(" is-active",""))
        
    //   }

    // }


    return (<>
<div className="scrolling-wrapper" >


<nav className="navbar is-mobile tabs is-centered  is-fixed-bottom  " aria-label="breadcrumbs"   >
  
  <ul className="mb-4 ">

   
       
  {linkState.map((item) =>(
       
       <li key={item.name}> 
      <NavLink
       to={item.href}
       className={({isActive})=>{return  "is-toggle " + !isActive ? "navbar-item  " : "is-active tabs-boxed-link-hover-background-color "}}
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
