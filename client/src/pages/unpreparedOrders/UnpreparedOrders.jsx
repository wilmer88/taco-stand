// import UserComponent from "../components/userComponent/UserComponent";
import React, {useContext,useEffect, useState, } from "react";
import alertContext from "../../context/alertContext";
import API from "../../utils/API";
import {io} from "socket.io-client";
import LiComponent from "../../components/AdminComponent";
const IS_PROD = process.env.NODE_ENV === "production";
const URL = IS_PROD ? "https://taco-stand.herokuapp.com/" : "http://localhost:3001";
const socket = io(URL);
// const socket= io.connect("https://taco-stand.herokuapp.com/");

const UnpreparedOrders = () => {

  const {setAlert} = useContext(alertContext);
  const [orden, setAllOrdens] = useState([]);

  useEffect(() => {
    // console.log(arg);
        // socket.disconnect();
     API.apiUnprepared({preparada:false}).then((response ) => {
      setAllOrdens(response.data);
        setAlert({message:"retrived all orders", type:"is-success"});
 
      }).catch((err) =>{ 
          console.log(err)
          setAlert({message:"faild to to get waiting list/ usario debe iniciar sesion/ user must be signed in", type:"is-danger"})
        });
    }, [setAlert]);

useEffect(() => {
  socket.on("myOrders",(arg)=>{
console.log("new order list");
    // socket.disconnect();
 API.apiUnprepared({preparada:false}).then((response ) => {
  setAllOrdens(response.data);
    setAlert({message:"client created order", type:"is-success"},);
    // return socket.disconnect();

  }).catch((err) =>{ 
      console.log(err)
      setAlert({message:"faild to to get waiting list/ usario debe iniciar sesion/ user must be signed in", type:"is-danger"})
    });
    // return socket.disconnect();

      });
}, [setAlert]);

  return ( <>
<div className="container is-align-self-auto is-size-7 mt-6">
 {orden.length ? (orden.map( res =>(
              <LiComponent key= {res._id} {...res} />
            ))
            ): (<h1 style={{textAlign: "center" , fontSize: "22px", background: "lightyellow"}}>msg: Sign in to view this page/Inicie sesion para poder ver</h1>
            )}
        </div>

  </> )}

export default UnpreparedOrders;