import AuthContext from '../context/AuthContext';
import React, {useContext, useState} from 'react';
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import API from "../utils/API"

const ULog = () => {

  const pxhi = {
    fonte:{
      fontSize: "27px",
      background: "lightyellow"
    }
  };
  const navigate = useNavigate()
  const {setJwt} = useContext(AuthContext)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const formSubmit = (e) => {
      e.preventDefault();
    
        // debugger
    API.login(
        { userName: userName,
      password: password}
        ).then((response) => {
        console.log(response.data)
        setJwt(response.data.data) 
        setTimeout(() => {navigate("/ordens")
        alert("welcome, you are loged in")}, 1500);
         setUserName("")
         setPassword("")
        }).catch((err) => {
          console.log(err);
        });

    }
      
    return (
    <>
  
      <div>
        <br></br>
  <div className='columns is-mobile'>

<div className="column is-two-fifth"></div>

<div className= "column is-three-quarters-mobile" >
  <div className='box'>
  <label className="label has-text-centered" style={pxhi.fonte}>Log In/ Iniciar Sesión</label>
     <form onSubmit={formSubmit}>
         
     <label className="label has-text-centered">Nombre De Usario/ User Name</label>
  <input 
         onChange={(e) => setUserName(e.target.value)}
         name="userName"
         className="input" 
         value={userName}
         type="text"
          placeholder="email or username"
      />

  <label className="label has-text-centered">Contraseña/ Password</label>
      <input 
        onChange={(e) => setPassword(e.target.value)}
           name="password"
           className="input" 
           value={password}
         type="text" 
         placeholder="password"
      /> 
       <br></br>
       <br></br>
     <button className="button is-info"
      type="submit"
      >
      log In
      </button>

    </form>
    </div>
    </div>
  
  <div className="column is-two-fifth"></div>
  </div>
  </div>

    </>
    )
  }

  export default ULog;
  