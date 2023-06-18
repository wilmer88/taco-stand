import { NavLink } from "react-router-dom";
import { React, useContext } from "react";
import AuthContext from '../context/AuthContext';
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
 const user = useContext(AuthContext);
 let userparam = user.userName;
 console.log(userparam)
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
    { name: "My orders", href: "/myorders/"+ userparam},

    { name: "Waiting list/Fila", href: "/ordens"},
    { name: "Order/Ordenar", href: "/orden"},
    { name: "Search/Buscar", href: "/searcho"},
    { name: "Log-In/Iniciar-Sesion", href: "/login"},
    { name: "Sign-up/Incribirse", href: "/signup"},

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
