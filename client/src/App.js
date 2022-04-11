import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import React, {useState} from "react";
// import UserContext from "./contex/ordenContex";
import OrdenPage from "./pages/OrdenPage";
function App() {
  return(
    <Router>
    <Routes> 
    <Route exact path="/" element={<OrdenPage/>}></Route>
    </Routes> 
    </Router>
  )


}

export default App;
