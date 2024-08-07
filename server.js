const express = require("express");
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

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/tacos",
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

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    // origin: "http://localhost:3000" || "https://taco-stand.herokuapp.com/",
    origin: "http://localhost:3000" || "mongodb://127.0.0.1/tacos",

    methods: [ "GET", "POST"]
  }
});
    io.on("connection",(socket)=>{
      console.log(`socket io connected id: ${socket.id}`);
      // socket.on("myOrders", (arg)=>{
      //   socket.emit("mySocketOrders", arg);
      //   console.log(arg)
      // });

      socket.on("rs",(arg)=>{
        console.log("rs data bellow")
        console.log(arg)
        socket.broadcast.emit("mykitchenOrders", {message: "working"});
      });
      
      socket.on("mykitchenOrders", (arg)=> {
        console.log("myOrder socket data bellow")
        console.log(arg);
    
      })

      socket.on("disconnect",()=> {
        console.log(`user disconnected`,socket.id)
      });
});


server.listen(PORT, ()=>{
  console.log(`server running on port ${PORT}`)
});