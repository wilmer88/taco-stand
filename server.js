const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require('body-parser')
const cors = require("cors");
const morgan = require('morgan')
const dotenv = require("dotenv"); 
const path = require("path");
 
const app = express();
dotenv.config();
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
// const AuthoController = require("./controllers/authController");
// const ordenControler = require("./controllers/OrdenControllers");
// const userController = require("./controllers/UserController");
// app.use(AuthoController);
// app.use(userController);
// app.use(ordenControler);