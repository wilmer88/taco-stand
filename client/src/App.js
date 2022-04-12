import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import React, {useState} from "react";
// import UserContext from "./contex/ordenContex";
import OrdenLevel from "./components/OrdenLevel";
import FinishedOrden from "./pages/ClientLine";
import OrdenPage from "./pages/OrdenPage";
import Editar from "./pages/Editar";
function App() {
  return(
    <Router>
      <OrdenLevel/>
    <Routes> 
    <Route exact path="/" element={<OrdenPage/>}></Route>
    <Route exact path="/ClientLine" element={<FinishedOrden/>}></Route>
    <Route exact path="/orden/:ordenId" element={<Editar/>}></Route>

    </Routes> 
    </Router>
  )


}

export default App;
