import React, {useContext, useEffect} from "react";
import alertContext from "../../context/alertContext";
// import OnUpdateHook from "../hooks/onUpdateHook";

const Alert = () => {
  const {message, type, setAlert} = useContext(alertContext);
  useEffect(()=>{
    if(message.length){
      setTimeout(()=>{
        setAlert({ message:"", type:"" })
      }, 8500)
    }

  },[message,setAlert])
  // console.count("i rerenderd in Alert component");


  return (
    <>
      {message  && (
        <div className="mt-6">
            
            <div className="container has-text-centered " style={{paddingTop:"5%"}}>
          <div className={`notification ${type || "is-info "} is-light`}>
          <button className="delete" onClick={()=>{setAlert({message:"", type:""})} }></button>
          {message} 
          </div>
        </div>

        </div>

 
    
      )}
    </>
  );
};

export default (Alert);