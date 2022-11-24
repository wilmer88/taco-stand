const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require('body-parser')
const cors = require("cors");
const morgan = require('morgan')
const dotenv = require("dotenv"); 
 dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.text())
app.use(morgan('dev'))
app.use(routes);
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/taco-stand" ,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    }).then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3001;
// const AuthoController = require("./controllers/authController");
// const ordenControler = require("./controllers/OrdenControllers");
// const userController = require("./controllers/UserController");
// app.use(AuthoController);
// app.use(userController);
// app.use(ordenControler);

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