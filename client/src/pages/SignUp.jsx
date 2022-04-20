import AuthContext from '../context/AuthContext';
import Footer from "../components/Footer";
import React, {useContext, useState } from "react";
import axios from 'axios';
import OrdenLevel from "../components/OrdenLevel";
// import { useNavigate } from "react-router-dom";
const pxhi = {
  fonte:{
    fontSize: "27px",
    background: "lightyellow"
  }
};
const SignUp = () => {
  const {setJwt}  = useContext(AuthContext)
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");

  // const navigate = useNavigate()
  function formSubmit (e){
    e.preventDefault();
    if(userName.trim() && password.trim()){
    axios.post({
      userName:userName,
      password: password
    }).then((response) => {
      console.log(response.data);
      setJwt(response.data.data)
      setUserName("")
      setPassword("")
      // navigate(`/ClientLine`)
      }).catch((err) => {
        console.log(err);
      });
    } 

  }

  return (

  <>
  
<OrdenLevel/>
  
  <div>
  <div className='columns is-mobile'>

<div className="column is-two-fifth"></div>

<div className= "column is-three-quarters-mobile" >
  
<br></br>

<div className="field is-mobile" >
   

    <div className="mt-6 box">
    <label className="label has-text-centered" style={pxhi.fonte}>Sign Up</label>

    <hr></hr>
        <br></br>
    <form onSubmit={formSubmit}>
    <label className="label has-text-centered">e-mail/User Name</label>
        <div className="field is-mobile" >
       
      <div className="control is-expanded">
       
        <input 
        onChange={(e) => setUserName(e.target.value)}
        name="userName"
        className="input" 
        value={userName}
        type="text"
         placeholder="email or username"/>
        <br></br>
        <br></br>
    
        <label className="label has-text-centered">Password</label>
        <input 
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          className="input" 
          value={password}
        type="text" 
        placeholder="password"/>

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

      <Footer/>

  </>)


};

export default SignUp;
