import AuthContext from '../context/AuthContext';
import React, {useContext, useState} from 'react';
import {  useNavigate } from "react-router-dom";
import API from "../utils/API"
import alertContext from '../context/alertContext';

const ULog = () => {

  const pxhi = {
    fonte:{
      fontSize: "27px",
      background: "lightyellow"
    }
  };
    const  vigate = useNavigate()

    const {setAlert} = useContext(alertContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const user = useContext(AuthContext);

      const formSubmit = (e) => {
        e.preventDefault();
        // debugger
         API.login(
        { userName: userName,
        password: password}
        )
        .then((response) => {
        console.log(response.data)

        user.setJwt(response.data.data) 
        user.setUserName(response.data.userName)
        setTimeout(() => {
          vigate("/orden")
        alert("welcome, you are loged in")}, 1500);
         setUserName("")
         setPassword("")
        }).catch((err) => {
          console.log(err);
          setAlert({message:"failed to login in",type:"is-danger"})
        });
    };
      
    return (<>
      <div>
        <br></br>
  <div className='columns is-mobile'>

<div className="column is-two-fifth"></div>

<div className= "column is-three-quarters-mobile mt-6" >
  <div className='box'>
  <h3 className="label has-text-centered" style={pxhi.fonte}>Log In/ Iniciar Sesión</h3>
     <form onSubmit={formSubmit}>
         
     <h3 className="label has-text-centered">Nombre De Usario/ User Name</h3>
  <input 
         onChange={(e) => setUserName(e.target.value)}
         name="userName"
         className="input" 
         value={userName}
         type="text"
          placeholder="email or username"
          autoComplete="nope"
      />

  <h3 className="label has-text-centered">Contraseña/ Password</h3>
      <input 
        onChange={(e) => setPassword(e.target.value)}
           name="password"
           className="input" 
           value={password}
         type="text" 
         placeholder="password"
         autoComplete="nope"
      /> 
       <br></br>
       <br></br>
       <button 
          type="submit"
          value="Submit"
          onClick={formSubmit}
        className="button is-info">
         Login
        </button>

    </form>
    </div>
    </div>
  
  <div className="column is-two-fifth"></div>
  </div>
  </div>

    </>);
  };
  export default ULog;