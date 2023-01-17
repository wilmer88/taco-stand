import { NavLink } from "react-router-dom";
import { React,useState } from "react";
// import { Tab } from "react-tabs";

// const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import "react-tabs/style/react-tabs.css";
const footerStyling= {
  fontweightTooSkiny: {
    fontWeight: "600"
  },
  // bottomMarginFooter: {
  //   marginBottom: "60px"

  // }
}

const Footer = () => {
//   const pxhi = {
//     fonte:{
// isActive:"background: blue"
//     }
//   };
//   const { index, setIndex } = useState(0);

//   const setEstado0 = () =>{setIndex(0)}
//   const setEstado1 = () =>{setIndex(1)}

 

  // const linkState= [
  //   { name: "Home/Inicio", href: "/", classe: `${index===0?'nav-item isActive':null}`, onklic: ()=>setIndex(0)},
  //   { name: "Waiting list/Fila", href: "/ordens", classe: ` ${index===1?'nav-item active':null}`, onklic: ()=>setIndex(1) },
  //   { name: "Order/Ordenar", href: "/orden", classe: ` ${index===2?'nav-item active':null}`, onklic: ()=>setIndex(2) },
  //   { name: "Search/Buscar", href: "/searcho", classe: ` ${index===3?'nav-item active':null}`, onklic: ()=>setIndex(3) },
  //   { name: "Incribirse-Signup", href: "/signup", classe: ` ${index===4?'nav-item active':null}`, onklic: ()=>setIndex(4) },
  //   { name: "Log-In/Iniciar-Sesion", href: "/login", classe:` ${index===5?'nav-item active':null}`, onklic: ()=>setIndex(5) },
  // ];
  const linkState= [
    { name: "Home/Inicio", href: "/", },
    { name: "Waiting list/Fila", href: "/ordens"},
    { name: "Order/Ordenar", href: "/orden"},
    { name: "Search/Buscar", href: "/searcho"},
    { name: "Incribirse-Signup", href: "/signup"},
    { name: "Log-In/Iniciar-Sesion", href: "/login"},
  ];




  return (<>
  {/* style={footerStyling.bottomMarginFooter} */}

      <div className="scrolling-wrapper" >
        <nav
          className="navbar is-mobile tabs is-centered  is-fixed-bottom  "
          aria-label="breadcrumbs"
        >
          <ul className="nav nav-tabs mb-4 ">
            {linkState.map((item) => (
              <li toggle="tab" className="nav-item" key={item.name} style={footerStyling.fontweightTooSkiny}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) => {
                    return "is-toggle " + !isActive
                      ? "navbar-item nav-link " 
                      : "nav-link nav-item active is-active tabs-boxed-link-hover-background-color ";
                  }}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Footer;
 {/* <div className="scrolling-wrapper">
        <nav
          className="Tabs is-centered  is-fixed-bottom  "
          aria-label="breadcrumbs"
        >

          <ul className="tabsList mb-4 " style={pxhi.fonte}>
            
    
          <li
             
              className={`${index===0?'tabHead ':null}`}
     
              onClick={()=>setEstado0}
                key={linkState.name}        
              >
               
                  home
              
              </li>

              <li
             
              className={`${index===1?'tabHead isActive':null}`}

     
              onClick={()=>setEstado1}
                key={linkState.name}        
              >
                <NavLink
                to={"/"} 
                
   
                >
                  LogIn
                </NavLink>
              </li>
          
          </ul>
          <div className="tabContant" hidden={index !== 0}></div>
          <div className="tabContant" hidden={index !== 1}></div>
          <div className="tabContant" hidden={index !== 2}></div>
          <div className="tabContant" hidden={index !== 4}></div>
          <div className="tabContant" hidden={index !== 5}></div>


         
        </nav>
      </div> */}
