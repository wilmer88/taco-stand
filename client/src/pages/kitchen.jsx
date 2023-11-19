// import UserComponent from "../components/userComponent/UserComponent";
import onUpdateHook from "../components/hooks/onUpdateHook";
import React, {useContext,useEffect, useState, } from "react";
import alertContext from "../context/alertContext";
import API from "../utils/API";
import {io} from "socket.io-client";
// import LiComponent from "../components/AdminComponent";
// import KitchenComponent from "../components/kitchenComponent/KitchenComponent";
import UserComponent from "../components/userComponent/UserComponent";
const IS_PROD = process.env.NODE_ENV === "production";
const URL = IS_PROD ? "https://taco-stand.herokuapp.com/" : "http://localhost:3001";
const socket = io(URL);
// const socket= io.connect("https://taco-stand.herokuapp.com/");

const Kitchen = () => {
  console.count("i rerenderd in kitchen");


  const {setAlert} = useContext(alertContext);
  const [kitchenOrders, setAllOrdens] = useState([]);

  onUpdateHook(() => {
    // console.log(arg);
        // socket.disconnect();
     API.kitchenOrders().then((response ) => {
      // console.log(response.data);
      // setAllOrdens(response.data);
        // setAlert({message:"retrived all orders", type:"is-success"});
 
      }).catch((err) =>{ 
          console.log(err)
          // setAlert({message:"faild to to get waiting list/ usario debe iniciar sesion/ user must be signed in", type:"is-danger"})
        });
    }, []);

onUpdateHook(() => {
  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  socket.on("mykitchenOrders",(arg)=>{
console.log("new order list");
    // socket.disconnect();
 API.kitchenOrders().then((response ) => {
  console.log(response.data);

  setAllOrdens(response.data);
    // setAlert({message:"client created order", type:"is-success"},);
    // return socket.disconnect();

  }).catch((err) =>{ 
      console.log(err)
      // setAlert({message:"faild to to get waiting list/ usario debe iniciar sesion/ user must be signed in", type:"is-danger"})
    });
    // return socket.disconnect();

      });
}, []);

  return ( <>
<div className="container is-align-self-auto is-size-7 mt-6">
 {kitchenOrders.length ? (kitchenOrders.map( res =>(
              <UserComponent key= {res._id} {...res} />
            ))
            ): (<h1 style={{textAlign: "center" , fontSize: "22px", background: "lightyellow"}}>msg: No Content Available</h1>
            )}
        </div>

  </> )}

export default React.memo(Kitchen) ;