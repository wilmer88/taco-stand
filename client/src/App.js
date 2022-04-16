import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import React, {useState} from "react";
// import UserContext from "./contex/ordenContex";

import SignUp from "./pages/SignUp";
import OrdenLevel from "./components/OrdenLevel";
import FinishedOrden from "./pages/ClientLine";
import OrdenPage from "./pages/OrdenPage";
import Editar from "./pages/Editar";
// import FindPage from "./pages/FindPage";
function App() {
  return(
    <Router>
      <OrdenLevel/>
    <Routes> 
    <Route exact path="/" element={<OrdenPage/>}></Route>
    <Route  path="/signUp" element={<SignUp/>}></Route>
    <Route exact path="/ClientLine" element={<FinishedOrden/>}></Route>
    <Route exact path="/orden/:ordenId" element={<Editar/>}></Route>
    {/* <Route exact path="/findPage" element={<FindPage/>}></Route> */}
    </Routes> 
  
    </Router>
  )


}

export default App;
