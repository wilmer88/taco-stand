// import UserContext from '../userContext';
// import React, {useContext, useState} from 'react';
// import UserContext from '../userContext';
// import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./startpage/startpage.css"
function StartPage() {
    // const [userName, setUserName] = useState("");
    // const [password, setPassword] = useState("");
    // const user = useContext(UserContext);
  
    // const handleSubmit = (e) =>{
    //   e.preventDefault();
    //   const data = { token: 'ergerter',
    // userName: "chango"}
  
    // user.setUserName(data.userName);
    // user.setToken(data.token);
   
    // }
    const liestilo = {
        atras: {
          background: `url(${process.env.PUBLIC_URL + '/tacos.jpg'})`
        },
        opaci: {
            opacity: "0.9"
        }
        
       }
  
    return (
    <>
  
  
  



  <div className="hero is-fullheight" style={liestilo.atras}>
  <div className='mt-6 columns is-mobile'>
  <div className="column is-two-fifth"> </div>

  
  <div className= "mt-6 column is-three-quarters-mobile"  >

  <br></br>
      <br></br>
  <div className="is-mobile" >

  <div className="mt-6 box" style={liestilo.opaci}>
  <h2> <label className="label has-text-centered">Que Quieres Hacer?</label></h2>
  <div className="ml-6  field">
  <br></br>
 <Link to="./ordenar"> <button className="button is-black is-outlined">Ordenar Tacos</button></Link> 

 <br></br>
 <br></br>

 <Link to="./logIn"><button className="button is-black is-outlined">Iniciar sesión</button></Link>
 <br></br>
 <br></br>
 <Link to="./signup"><button className="button is-black is-outlined">Sign Up</button></Link>

  
</div>

</div>
  
  
  </div>
  </div>

  <div className="column is-two-fifth"></div>
  </div>
  </div>
 
  
  
    </>)
    
  
  }
  
  export default StartPage;
