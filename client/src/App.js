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
    <Route  path="/" element={<OrdenPage/>}></Route>
    <Route  path="/ClientLine" element={<FinishedOrden/>}></Route>
    <Route  path="/orden/:ordenId" element={<Editar/>}></Route>

    </Routes> 
    </Router>
  )


}

export default App;
