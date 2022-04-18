// import UserContext from '../userContext';
// import React, {useContext, useState} from 'react';
// import UserContext from '../userContext';
// import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import React, {useState } from "react";
import API from "../utils/API";
import OrdenLevel from "../components/OrdenLevel";
import { useNavigate } from "react-router-dom";
const pxhi = {
  fonte:{
    fontSize: "27px",
    background: "lightyellow"
  }
}
const SignUp = () => {

  const navigate = useNavigate()
  const [formObj, setformObj] = useState(
{    
    userName: "",
    password: ""
}

  );
  
  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setformObj({...formObj, [name]: value})
  };

  function formSubmit (e){
    e.preventDefault();
    if(formObj.userName && formObj.password){
    API.saveUser({
      userName: formObj.userName,
      password: formObj.password
    }).then((response) => {
      navigate(`/ClientLine`)
        console.log(response.data)
        setformObj({
   userName:"",
   password:""
        })
    
      }).catch((err) => {
        console.log(err);
      });


    } 

  }
  // const user = useContext(UserContext);

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   const data = { token: 'ergerter',
  // userName: "chango"}

  // // user.setUserName(data.userName);
  // // user.setToken(data.token);
 
  // }


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
        onChange={handleInputChange}
        name="userName"
        className="input" 
        value={formObj.userName}
        type="text"
         placeholder="email or username"/>
        <br></br>
        <br></br>
    
        <label className="label has-text-centered">Password</label>
        <input 
          onChange={handleInputChange}
          name="password"
          className="input" 
          value={formObj.password}
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
