import AuthContext from '../context/AuthContext';
import React, {useContext, useState} from 'react';
import API from "../utils/API";

import OrdenLevel from "../components/OrdenLevel";
// import { Link } from "react-router-dom";
// import axios from "axios";
import Footer from "../components/Footer";
const pxhi = {
  fonte:{
    fontSize: "27px",
    background: "lightyellow"
  }
}
 function LogIn() {
  const {setJwt} = useContext(AuthContext)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    function formSubmit (e){
      e.preventDefault();
      if(userName.trim() && password.trim()){
      API.logUser({
        userName: userName,
        password: password
      }).then((response) => {
        console.log(response.data);
        setJwt(response.data.data)
        // navigate(`/ClientLine`)
         setUserName("")
         setPassword("")
  
      
        }).catch((err) => {
          console.log(err);
        });
  
  
      } 
  
    }
      
    return (
    <>
  <OrdenLevel/>
  
  <div className='columns is-mobile'>
   

  <div className="column is-two-fifth"></div>
  
  <div className= "column is-three-quarters-mobile" >

  <br></br>
      <br></br>
  <div className="field is-mobile" >
    
  <div className="mt-6 box" >
  <label className="label has-text-centered" style={pxhi.fonte}>Log In</label>
  <hr></hr>
        <br></br>
    <form onSubmit={formSubmit}>
    <label className="label has-text-centered">e-mail/User Name</label>
  <div className="control is-expanded">
      <input 
         onChange={(e) => setUserName(e.target.value)}
         name="userName"
         className="input" 
         value={userName}
         type="text"
          placeholder="email or username"
      />
      <br></br>
      <br></br>
  
      <label className="label has-text-centered">Password</label>
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

    </div>

    </form>

</div>
  </div>
  </div>
  
  <div className="column is-two-fifth"></div>
  </div>
      <br></br>
      <hr></hr>
        <Footer/>
    </>)
  }
  
  export default LogIn;
  