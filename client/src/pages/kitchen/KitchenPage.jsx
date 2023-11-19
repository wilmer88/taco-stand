import React, {useContext,useEffect, useState, } from "react";
import alertContext from "../../context/alertContext";
import API from "../utils/API";
import {io} from "socket.io-client";
// import KitchenComponent from "../../components/kitchenComponent/KitchenComponent";
import LiComponent from "../../components/AdminComponent";
const IS_PROD = process.env.NODE_ENV === "production";
const URL = IS_PROD ? "https://taco-stand.herokuapp.com/" : "http://localhost:3001";
const socket = io(URL);
// const socket= io.connect("https://taco-stand.herokuapp.com/");

const Kitchen = () => {
  console.count("i rerenderd in kitchen page");


  const {setAlert} = useContext(alertContext);
  const [orden, setAllOrdens] = useState([]);

    useEffect(() => {
    // console.log(arg);


 
     API.allOrdens().then((response ) => {
      console.log(response.data);

      console.log(response.data)
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
  console.log(response.data);

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
console.count("i rerenderd in kitchen");

  return ( <>
  <div className="columns">
    <div className="column">
    <div className="container is-align-self-auto is-size-7" >
 {orden.length ? (orden.map( res =>(
              <LiComponent key= {res._id} {...res}  />
            ))
            ): (<h1 style={{textAlign: "center" , fontSize: "22px", background: "lightyellow"}}>msg: No contentis available.</h1>
            )}
        </div>

    </div>
  </div>






  </> )}

export default React.memo(Kitchen);