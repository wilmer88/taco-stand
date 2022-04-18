const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const routes= require("./routes")

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
        useCreateIndex: true,
  useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const PORT = process.env.PORT || 3001;

// Accessing the path module
const path = require("path");

// Step 1:
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  app.use(routes);
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});