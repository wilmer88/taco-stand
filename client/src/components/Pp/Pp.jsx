import alertContext from "../../context/alertContext";
import React, {useContext } from "react";
import { Navigate } from "react-router-dom";


const Pp = ({ jwt, children }) => {
  
  
const {setAlert} = useContext(alertContext);
    if (!jwt) {
        setAlert({message:"Must be signed in or signed-up to order/ Necesario inscrirse o iniciar sesion para pode ordenar!"})

      return <Navigate to="/" replace />;
    }
  
    return children;
  };

  export default Pp;