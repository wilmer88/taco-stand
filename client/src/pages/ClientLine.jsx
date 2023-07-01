import UserComponent from "../components/userComponent/UserComponent";
import React, {useContext,useEffect, useState, } from "react";
import alertContext from "../context/alertContext";
import API from "../utils/API";
import {io} from "socket.io-client";

const ClientLine = () => {
  const socket= io.connect("http://localhost:8800");
  const [orden, setAllOrdens] = useState([]);
  const {setAlert} = useContext(alertContext);
  // const[onlineOrdens,setOnlineOrdens] = useState([]);
  
  //  const frontendOrdens=()=>{
  //   )};
   
  // useEffect(()=>{
  //   socket.current.emit("", orden._id);
  //   socket.current.on("orden", (ordens)=>{
  //     setOnlineOrdens(ordens);
  //     console.log(onlineOrdens);
  //   })
  // }, [orden]);

useEffect(() => {


  API.allOrdens().then((response ) => {

    setAllOrdens(response.data)

    
      setAlert({message:"retrived all orders", type:"is-success"});


    socket.emit("resiveAllOrdens","wilmersockets")


    })
      .catch((err) =>{ 
        console.log(err)
        setAlert({message:"faild to to get waiting list/ usario debe iniciar sesion/ user must be signed in", type:"is-danger"})
      });
}, [setAlert]);



  return ( <>
<div className="container is-align-self-auto is-size-7 mt-6">
 {orden.length ? (orden.map( res =>(
              <UserComponent key= {res._id} {...res} />
            ))
            ): (<h1 style={{textAlign: "center" , fontSize: "22px", background: "lightyellow"}}>msg: Sign in to view this page/Inicie sesion para poder ver</h1>
            )}
        </div>

  </> )}

export default ClientLine;

