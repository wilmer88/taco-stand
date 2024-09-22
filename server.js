require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const morgan = require('morgan');
const winston = require('winston');
const path = require("path");
const app = express();
const http = require("http");
const {Server} = require("socket.io");

// Logger setup
const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
      new winston.transports.Console({
          format: winston.format.simple(),
      }),
      new winston.transports.File({ filename: 'error.log', level: 'error' })
  ]
});

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'public')));
app.use(routes);

// Static files for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname,"client","build")));
  app.get("*", function (request, response) {
    response.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
  };

// Error handling middleware should be the last piece of middleware
  app.use((err, req, res, next) => {
    // Log the error using Winston
    logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  
    // Send a generic message in production or the full error in development
    res.status(err.status || 500);
    res.send(process.env.NODE_ENV === 'production' ? 'Something went wrong!' : err.stack);
  });

  // Socket.io configuration
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "https://taco-stand.herokuapp.com"],
    // origin: "http://localhost:3000" || "mongodb://127.0.0.1/tacos",
    methods: ["GET", "POST"]
  }
});

    io.on("connection",(socket)=>{
      console.log(`socket io connected id: ${socket.id}`);

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

const PORT = process.env.PORT || 3001;

mongoose.set("strictQuery", false);

mongoose.connect( process.env.MONGODB_URI ||  "mongodb://127.0.0.1/tacos", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() =>{
      console.log("MongoDB has been connected");
    }).catch((err) => {
      console.error(`Error connecting to MongoDB: ${err.message}`);
    });

   const connection = mongoose.connection;
   connection.on("connected", ()=> {
    console.log("mongoose conected")
   });

   connection.on("error", (err)=> {
    console.log("mongoose conection error", err)
   });

server.listen(PORT, ()=>{
  console.log(`server running on port ${PORT}`)
});

// Clean shutdown function
function gracefulShutdown() {
  console.log('Received kill signal, shutting down gracefully.');
  server.close(() => {
    console.log('Closed out remaining connections.');
    mongoose.connection.close(false, () => {
      console.log('MongoDB connection closed.');
      process.exit(0);
    });
  });

  // If the server hasn't finished in 10 seconds, forcefully shut down
  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);
}

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);