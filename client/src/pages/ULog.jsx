import AuthContext from '../context/AuthContext';
import React, {useContext, useState} from 'react';
import OrdenLevel from "../components/OrdenLevel";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

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

    const formSubmit = (e, userName, password) => {
      e.preventDefault();
      if(userName.trim() && password.trim()){
        // debugger
    axios.post("/api/login",
        { userName: userName,
      password: password}
        ).then((response) => {
        console.log(response)
        setJwt(response.data.data) 
        setTimeout(() => {navigate("/orden")
        alert("welcome")}, 2000);
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
      <div>
        <br></br>
  <div className='columns is-mobile'>

<div className="column is-two-fifth"></div>

<div className= "column is-three-quarters-mobile" >
  <div className='box'>
  <label className="label has-text-centered" style={pxhi.fonte}>Log In</label>
     <form onSubmit={formSubmit}>
         
     <label className="label has-text-centered">e-mail/User Name</label>
  <input 
         onChange={(e) => setUserName(e.target.value)}
         name="userName"
         className="input" 
         value={userName}
         type="text"
          placeholder="email or username"
      />

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

    </form>
    </div>
    </div>
  
  <div className="column is-two-fifth"></div>
  </div>
  </div>

  <hr></hr>


    <Footer/> 
    </>
    )
  }

  export default ULog;
  