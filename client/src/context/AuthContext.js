import React from "react";
const AuthContext = React.createContext({
    userName: "",
    jwt: "",
    roll: "",

    setUserName: ()=>{},
 setJwt: () =>{},
 setRoll:()=>{}
})

export default AuthContext;