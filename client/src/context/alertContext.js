import React from "react"
const alertContext = React.createContext({
    message:"",
    type: "",
    setAlert: () => {},
});

export default  alertContext;