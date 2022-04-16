// import UserContext from '../userContext';
// import React, {useContext, useState} from 'react';
// import UserContext from '../userContext';
// import { Link } from "react-router-dom";

function SignUp() {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const user = useContext(UserContext);

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   const data = { token: 'ergerter',
  // userName: "chango"}

  // user.setUserName(data.userName);
  // user.setToken(data.token);
 
  // }

  return (
  <>





<div className='columns is-mobile'>
<div className="column is-two-fifth"></div>

<div className= "column is-three-quarters-mobile" >
<br></br>
    <br></br>
<div className="field is-mobile" >
  
  <div className="control is-expanded">
    <input className="input" type="text" placeholder="email or username"/>
    <br></br>
    <br></br>

    
    <input className="input" type="text" placeholder="password"/>
    <br></br>
    <br></br>
    <button className="button is-info">
     Sign Up
    </button>
  </div>

</div>



</div>

<div className="column is-two-fifth"></div>
</div>


  </>)
  

}

export default SignUp;
