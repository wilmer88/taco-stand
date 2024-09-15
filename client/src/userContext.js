import React from "react";
const UserContext = React.createContext({
token: "",
userName:"",
userRole:"",
setToken: () => {},
setUserName: ()=> {},
setUserRolle: ()=> {}
});

export default UserContext;