import React from "react";
const UserContext = React.createContext({
token: "",
userName:"",
setToken: () => {},
setUserName: ()=> {}

});

export default UserContext;