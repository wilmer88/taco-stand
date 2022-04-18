// import UserContext from '../userContext';
// import React, {useContext, useState} from 'react';

// import { Link } from "react-router-dom";
// import axios from "axios";
import OrdenLevel from "../components/OrdenLevel";
const pxhi = {
  fonte:{
    fontSize: "27px",
    background: "lightyellow"
  }
}
 function LogIn() {
//     const [userName, setUserName] = useState("");
//     const [password, setPassword] = useState("");
    // const user = useContext(UserContext);
  
    // const handleSubmit = (e) =>{
    //   e.preventDefault();
    //   const data = { token: 'ergerter',
    // userName: "chango"}
  
    // user.setUserName(data.userName);
    // user.setToken(data.token);
   
    // }
      
    // const handleUser = (e) =>{
    //   e.preventDefault();
    //   const {userName, password} = e.target;
    // setUserName([userName]:userName);
    // user.setToken(data.password);
   
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
      <input className="input" type="text" placeholder="email or username"/>
      <br></br>
      <br></br>
  
      <label className="label has-text-centered">Password</label>
      <input className="input" type="text" placeholder="password"/>
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
  