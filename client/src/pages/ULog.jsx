import AuthContext from '../context/AuthContext';
import React, {useContext, useState} from 'react';


// import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const ULog = () => {
  // const pxhi = {
  //   fonte:{
  //     fontSize: "27px",
      
  //   }
  // }
  const navigate = useNavigate()
  const {setJwt} = useContext(AuthContext)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    function formSubmit (e){
      e.preventDefault();
      if(userName.trim() && password.trim()){
        // debugger
    axios.post("http://localhost:3001/api/login",
        { userName: userName,
      password: password}
        ).then((response) => {
        
        setJwt(response.data.data) 
        setTimeout(() => {navigate(`/ordenar`)
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

     <button className="button is-info"
      type="submit"
      >
      log In
      </button>

    </form>


    </>
    )
  }

  export default ULog;
  