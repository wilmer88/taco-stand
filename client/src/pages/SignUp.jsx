import AuthContext from '../context/AuthContext';
import React, {useContext, useState } from "react";
import alertContext from '../context/alertContext';
import { useNavigate } from "react-router-dom";
import API from '../utils/API';

const SignUp = () => {
  const pxhi = {
    fonte:{
      fontSize: "27px",
      background: "lightyellow"
    }
  };

  const navigate = useNavigate()

  const {setJwt}  = useContext(AuthContext);
  const {setAlert} = useContext(alertContext);
  const user = useContext(AuthContext);

const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");

  function formSubmit (e){
    e.preventDefault();

    API.signup({
      userName: userName,
      password: password
    }).then((response) => {
    setAlert({message:"You successfully signed up!", type:"is-success"});

      console.log(response.data);
      setJwt(response.data.data);
      user.setUserName(response.data.userName);

      setTimeout(() => {navigate("/ordens")
      alert("welcome you are signd up")}, 1500);
       setUserName("")
       setPassword("")
      }).catch((err) => {
    setAlert({message:"Faild to sign up!", type:"is-danger"});
        console.log(err);
      });
  }

  return (<>
  <div className='columns is-mobile'>

<div className="column is-two-fifth"></div>

  
<br></br>

   

    <div className="mt-6 box">
    <h3 className="label has-text-centered" style={pxhi.fonte}>Signup/ Inscribirse</h3>

    <form onSubmit={formSubmit}>
    <h3 className="label has-text-centered">Correo Electronico, Telefono o Nombre/ Email, Phone# or User Name </h3>       
       
        <input 
        onChange={(e) => setUserName(e.target.value)}
        name="userName"
        className="input" 
        value={userName}
        type="text"
         placeholder="me@gmail.com/ 7063314343/ daddypop"/>
        <br></br>
        
        <h3 className="label has-text-centered">Crea Contraseña/ Create Password</h3>
    
        <input 
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          className="input" 
          value={password}
        type="text" 
        placeholder="Contraseña-Password"/>

        <br></br>
        <br></br>
        <button 
          type="submit"
          value="Submit"
        className="button is-info">
         Signup/ Inscribirte
        </button>
    
        </form>
    </div>
  
  <div className="column is-two-fifth"></div>
  </div>

  </>)
};

export default SignUp;