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
  
<nav className="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><Link to="#">Bulma</Link></li>
    <li><Link to="#">Documentation</Link></li>
    <li><Link to="#">Components</Link></li>
  
  </ul>
</nav>



</div>

<div className="column is-two-fifth"></div>
</div>
  

  
    </>
    
    )
    
  
  }
  
  export default Footer;
  
