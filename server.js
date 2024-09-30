require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const morgan = require('morgan');
const winston = require('winston');
const path = require("path");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

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
app.use(cors({
  origin: ['http://localhost:3000', 'https://taco-stand.herokuapp.com'],
  methods: ['GET', 'POST'],
}));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'public')));
app.use(routes);

// Static files for production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  // Serve index.html for all unmatched routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  res.status(err.status || 500);
  res.send(process.env.NODE_ENV === 'production' ? 'Something went wrong!' : err.stack);
});

// Socket.io configuration
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.NODE_ENV === 'production' 
      ? "https://taco-stand.herokuapp.com"  // Production URL
      : "http://localhost:3000",  // Development URL
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log(`Socket.io connected: ${socket.id}`);

  socket.on("rs", (arg) => {
    console.log("rs data:", arg);
    socket.broadcast.emit("mykitchenOrders", { message: "working" });
  });

  socket.on("mykitchenOrders", (arg) => {
    console.log("myOrder socket data:", arg);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 3001;

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/tacos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error(`Error connecting to MongoDB: ${err.message}`);
});

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("Mongoose connected");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error:", err);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Clean shutdown function
function gracefulShutdown() {
  console.log('Received kill signal, shutting down gracefully.');
  server.close(() =>
