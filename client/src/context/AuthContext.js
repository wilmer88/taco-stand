import React from "react";
const AuthContext = React.createContext({
    userName: "",
    jwt: "",
    setUserName: ()=>{},
 setJwt: () =>{}
})

export default AuthContext;