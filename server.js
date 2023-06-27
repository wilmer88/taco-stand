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
app.use(express.json());
app.use(cors());
app.use(bodyParser.text())
app.use(morgan('dev'))
app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + './client/public'));

const PORT = process.env.PORT || 3001;


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
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: [ "GET", "POST"]

  }
});


let activeOrders = []

io.on("connection", (socket)=>{
  console.log("socket io connected to server");
  socket.on("connection", (socket)=>{
    console.log(`User Connected:${socket.id}`);
    socket.on("sendOrden",(data)=>{
      console.log(data);
    })
    // socket.emit("sendOrden",)
  })
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

  socket.on("disconnect", ()=>{
    activeOrders = activeOrders.filter((orden)=> orden.socketId !== socket.id);
    console.log("ordens disconnected", activeOrders)
    io.emit("allOrdens", activeOrders);

  })
})

server.listen(8800);

// const AuthoController = require("./controllers/authController");
// const ordenControler = require("./controllers/OrdenControllers");
// const userController = require("./controllers/UserController");
// app.use(AuthoController);
// app.use(userController);
// app.use(ordenControler);