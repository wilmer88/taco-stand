import React from "react";
const AuthContext = React.createContext({
    userName: "",
    jwt: "",
    userRole: "",

    setUserName: ()=>{},
 setJwt: () =>{},
 setUserRole:()=>{},
})

export default AuthContext;