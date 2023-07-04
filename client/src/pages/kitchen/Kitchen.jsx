import React, {useContext,useEffect, useState, } from "react";
import alertContext from "../context/alertContext";
import API from "../utils/API";
import {io} from "socket.io-client";
import KitchenComponent from "../../components/kitchenComponent/KitchenComponent";
const IS_PROD = process.env.NODE_ENV === "production";
const URL = IS_PROD ? "https://taco-stand.herokuapp.com/" : "http://localhost:3001";
const socket = io(URL);
// const socket= io.connect("https://taco-stand.herokuapp.com/");

const Kitchen = () => {

  const {setAlert} = useContext(alertContext);
  const [orden, setAllOrdens] = useState([]);

    useEffect(() => {
    // console.log(arg);
 
     API.allOrdens().then((response ) => {
      setAllOrdens(response.data);
        setAlert({message:"retrived all orders", type:"is-success"});
        socket.disconnect();
 
      }).catch((err) =>{ 
          console.log(err)
          setAlert({message:"faild to to get waiting list/ usario debe iniciar sesion/ user must be signed in", type:"is-danger"})
        });
    }, [setAlert]);

useEffect(() => {
  socket.on("myOrders",(arg)=>{
console.log("new order list");
    // socket.disconnect();
 API.allOrdens().then((response ) => {
  setAllOrdens(response.data);
    setAlert({message:"client created order", type:"is-success"},);
    socket.disconnect();


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
              <KitchenComponent key= {res._id} {...res} />
            ))
            ): (<h1 style={{textAlign: "center" , fontSize: "22px", background: "lightyellow"}}>msg: Sign in to view this page/Inicie sesion para poder ver</h1>
            )}
        </div>

  </> )}

export default Kitchen;