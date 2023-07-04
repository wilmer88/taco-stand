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
const PORT1 = process.env.PORT || 8800;



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
  app.use(express.static(path.join(__dirname,"client","build")));
  }

  app.use(express.static(path.join(__dirname,"client","build")));

app.get("*", function (request, response) {
  response.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// let activeOrders = [];
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000" || "https://taco-stand.herokuapp.com/ ",
    methods: [ "GET", "POST"]
  }
});
    io.on("connection",(socket)=>{
      console.log(`socket io connected id: ${socket.id}`);
      socket.on("rs",(arg)=>{
        socket.emit("rs", arg);
      });
      socket.on("myOrders",(arg)=>{
        socket.emit("myOrders", arg);
        console.log(arg)
      });
      socket.on("disconnect",()=> {
        console.log(`user disconnected`,socket.id)
      });
});
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
server.listen(PORT1);



