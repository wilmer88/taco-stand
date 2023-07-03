const express = require("express");
// import express from "express";
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require('body-parser')
const cors = require("cors");
const morgan = require('morgan')
require("dotenv").config()
const path = require("path");
const app = express();
const http = require("http");
const {Server} = require("socket.io");
app.use(express.json());
app.use(cors());
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + './client/public'));

const PORT = process.env.PORT || 3001;

const port = process.env.PORT || 8800;


mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/tacos" ,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    }).then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

   const connection = mongoose.connection;
   connection.on("connected", ()=> {
    console.log("mongoose conected")
   });

   connection.on("error", (err)=> {
    console.log("mongoose conection error", err)
   });

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

// let activeOrders = [];

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: [ "GET", "POST"]
  }
});
    io.on("connection",(socket)=>{
      console.log(`socket io server connected id: ${socket.id}`);
      // socket.on("myOrders",(arg)=>{
      //   socket.emit("mySocketOrders", arg);
      //   console.log(arg)
      // });

      socket.on("rs",(arg)=>{
        console.log("rs data bellow")
        console.log(arg)
        socket.broadcast.emit("myOrders", {message: "working"});
      });
      
      // socket.on("myOrders", (arg)=> {
      //   console.log("myOrder socket data bellow")
      //   console.log(arg);
    
      // })

     

      socket.on("disconnect",()=> {
        console.log(`user disconnected`,socket.id)
      });
});
server.listen(port);

      // socket.join("join_room",(data)=>{
      //   socket.join(data);
      // });
      // socket.on("resiveAllOrdens", (arg)=> {
      // console.log(`this is your socket io data ${JSON.stringify(arg)}`);
      //   activeOrders.push(arg)
      // // console.log(`this is your socket io data ${JSON.stringify(arg)}`);
      // // console.log(`this is your socket io data ${arg._id}`);
      // for(let i = 0; i < activeOrders.length; i ++){
      //   // console.log(key +`this is your socket io data ${arg[key]}`);
      //   console.log(i+`your socket data:  ${JSON.stringify(arg[i])}`);
      // }
      //       });
    
        // socket.on("myOrders", ()=>{
        // });
        // console.log(arg);
        // console.log(`arg above`);
            // activeOrders.push(arg.data_id)
  // for(let i = 0; i < activeOrders.length; i ++){console.log(`socket orders: ${arg[]}`)}
            // socket.on('myOrders', (arg)=>{
            //   socket.emit("myOrders", arg)
            // });
  // socket.on("myOrders",()=> { 
  //   socket.emit('myOrders', activeOrders)
  // })
   
  //   // socket.emit("sendOrden",)
  // })
  // socket.on("create", (newOrdenId)=> {
  //   if(!activeOrders.some((orden)=> orden.id === newOrdenId))
  //   {
  //     activeOrders.push({
  //       ordenId: newOrdenId,
  //       socketId: socket.id
  //     })
  //   }
  //   console.log("connected ordens", activeOrders)
   
  //   io.emit("orden", activeOrders)
  // })





// const AuthoController = require("./controllers/authController");
// const ordenControler = require("./controllers/OrdenControllers");
// const userController = require("./controllers/UserController");
// app.use(AuthoController);
// app.use(userController);
// app.use(ordenControler);