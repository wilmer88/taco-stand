// import UserContext from '../userContext';
// import React, {useContext, useState} from 'react';
// import UserContext from '../userContext';
import { Link } from "react-router-dom";
function Footer() {
  
    return (
    <>
  
  

  <div className='columns is-mobile'>
<div className="column is-two-fifth"></div>

<div className= "column is-three-quarters-mobile" >
  
<nav className="breadcrumb is-fixed-bottom" aria-label="breadcrumbs">
  <ul>
    <li><Link to="#">Home</Link></li>
    <li><Link to="#">Documentation</Link></li>
    <li><Link to="#">Ordenar</Link></li>
  
  </ul>
</nav>



</div>

<div className="column is-two-fifth"></div>
</div>
  

  
    </>
    
    )
    
  
  }
  
  export default Footer;
  
