import React, {useContext, useEffect} from "react";
import alertContext from "../../context/alertContext";

const Alert = () => {
  const {message, type, setAlert} = useContext(alertContext);
  useEffect(()=>{
    if(message.length){
      setTimeout(()=>{
        setAlert({ message:"", type:"" })
      }, 2700)
    }

  },[message,setAlert])

  return (
    <>
      {message  && (
        <div className="container">
          <div className={`notification ${type || "is-info "} is-light`}>
          <button className="delete" onClick={()=>{setAlert({message:"", type:""})} }></button>
          {message} 
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;