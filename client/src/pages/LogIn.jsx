// import UserContext from '../userContext';
// import React, {useContext, useState} from 'react';
// import userContex from '../contex/userContex';
import OrdenLevel from "../components/OrdenLevel";
// import { Link } from "react-router-dom";
// import axios from "axios";

const pxhi = {
  fonte:{
    fontSize: "27px",
    background: "lightyellow"
  }
}
 function LogIn() {
    // const [userName, setUserName] = useState("");
    // const [password, setPassword] = useState("");
    // const user = useContext(userContex);
    
    
    // const handleChange = (e) =>{
    //   e.preventDefault();
    //   const {name, value} = e.target;
    // // setUserName(userName: name, value);
    // // user.setToken(data.password);
   
    // }
  
    // const handleSubmit = (e) =>{
    //   e.preventDefault();

  
    // user.setUserName(data.userName);
    // user.setPassword(data.token);
   
    // }
      
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
    <form onSubmit={() =>{}}>
    <label className="label has-text-centered">e-mail/User Name</label>
  <div className="control is-expanded">
      <input 
        //  onChange={handleInputChange}
         name="userName"
         className="input" 
        //  value={formObj.userName}
         type="text"
          placeholder="email or username"
      />
      <br></br>
      <br></br>
  
      <label className="label has-text-centered">Password</label>
      <input 
          //  onChange={handleInputChange}
           name="password"
           className="input" 
          //  value={formObj.password}
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
    </>)
  }
  
  export default LogIn;
  