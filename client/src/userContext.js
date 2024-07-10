import React from "react";
const UserContext = React.createContext({
token: "",
userName:"",
roll:"",
setToken: () => {},
setUserName: ()=> {}

});

export default UserContext;