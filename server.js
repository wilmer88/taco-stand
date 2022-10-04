const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config();
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/taco-stand" ,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    }).then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));


app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3001;
// const AuthoController = require("./controllers/authController");
// const ordenControler = require("./controllers/OrdenControllers");
// const userController = require("./controllers/UserController");
// app.use(AuthoController);
// app.use(userController);
// app.use(ordenControler);
app.use(routes);

const path = require("path");


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});


