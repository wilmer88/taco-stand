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
  const {setJwt}  = useContext(AuthContext);
  const {setAlert} = useContext(alertContext);
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const user = useContext(AuthContext);


  const navigate = useNavigate()

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
  <div>
  <div className='columns is-mobile'>

<div className="column is-two-fifth"></div>

<div className= "column is-three-quarters-mobile" >
  
<br></br>

<div className="field is-mobile" >
   

    <div className="mt-6 box">
    <h3 className="label has-text-centered" style={pxhi.fonte}>Sign-Up/Inscribirse</h3>

    <hr></hr>
        <br></br>
    <form onSubmit={formSubmit}>
    <h3 className="label has-text-centered">Correo Electronico/Email Adress</h3>
        <div className="field is-mobile" >
       
      <div className="control is-expanded">
       
        <input 
        onChange={(e) => setUserName(e.target.value)}
        name="userName"
        className="input" 
        value={userName}
        type="text"
         placeholder="email"/>
        <br></br>
        <br></br>
        <h3 className="label has-text-centered">Crea Contraseña/Create Password</h3>
    
        {/* <h3 className="label has-text-centered"></h3> */}
        <input 
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          className="input" 
          value={password}
        type="text" 
        placeholder="Contraseña-password"/>

        <br></br>
        <br></br>
        <button 
          type="submit"
          value="Submit"
        className="button is-info">
         Sign Up
        </button>
      </div>
    
    </div>
        </form>
    </div>
    </div>
  </div>
  
  <div className="column is-two-fifth"></div>
  </div>
  </div>
  <br></br>
  <br></br>

  </>)
};

export default SignUp;