import React, {useContext, useEffect} from "react";
import alertContext from "../../context/alertContext";
import OnUpdateHook from "../hooks/onUpdateHook";

const Alert = () => {
  const {message, type, setAlert} = useContext(alertContext);
  OnUpdateHook(()=>{
    if(message.length){
      setTimeout(()=>{
        setAlert({ message:"", type:"" })
      }, 9500)
    }

  },[message, setAlert])
  console.count("i rerenderd in Alert component");


  return (
    <>
      {message  && (
  
          <div className="container has-text-centered" style={{paddingTop:"5%"}}>
          <div className={`notification ${type || "is-info "} is-light`}>
          <button className="delete" onClick={()=>{setAlert({message:"", type:""})} }></button>
          {message} 
          </div>
        </div>
 
    
      )}
    </>
  );
};

export default React.memo(Alert);