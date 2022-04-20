const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
require("dotenv").config();


const cors = require("cors");

const app = express();
app.use(cors());

//import your models
// require("./models/quote");

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/taco-stand" ,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  //       useCreateIndex: true,
  // useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const PORT = process.env.PORT || 3001;
const AuthoController = require("./controllers/authController");
const ordenControler = require("./controllers/OrdenControllers");
const userController = require("./controllers/UserController");
app.use(AuthoController);
app.use(userController);
app.use(ordenControler)
// Accessing the path module
const path = require("path");

// Step 1:
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

// MONGODB_URI
// mongodb+srv://wilmerbaby:alfredo4269@cluster1.bdhv6.mongodb.net/taco-stand?retryWrites=true&w=majority