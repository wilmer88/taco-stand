import { NavLink } from "react-router-dom";
import { React, useContext } from "react";
import AuthContext from '../../context/AuthContext';
// import { Tab } from "react-tabs";

// const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import "react-tabs/style/react-tabs.css";
const footerStyling= {
  fontweightTooSkiny: {
    fontWeight: "600",

  },
  footerpadding:{
    padding: "25px"
  }

}

const ClientFooter = () => {
 const user = useContext(AuthContext);
 
 let userparam = user.userName;


  const linkState= [
    { name: "Home/Inicio", href: "/", },
    { name: "My Order(s)", href: "/myorders/"+ userparam},
    { name: "Order Now", href: "/orden"},
    { name: "Search", href: "/searcho"},
    

  ];

  return (<>


      <div className="scrolling-wrapper" style={footerStyling.footerpadding} >
        <nav
          className="navbar is-mobile tabs is-centered  is-fixed-bottom mt-6 "
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


    </>);
};
export default ClientFooter;