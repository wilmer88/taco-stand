
// import React, {useState } from "react";
// import React, {useState} from "react";
// import userContext from "./contex/userContex";
import StartPage from "./pages/StartPage";
import SignUp from "./pages/SignUp";
// import OrdenLevel from "./components/OrdenLevel";
import FinishedOrden from "./pages/ClientLine";
import OrdenPage from "./pages/OrdenPage";
import Editar from "./pages/Editar";
import LogIn from "./pages/LogIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import FindPage from "./pages/FindPage";
function App() {
  // const [token, setToken] = useState("")
  return(
    // <userContext.provider
    // value={{token, setToken}}
    // >
    <Router>
      
    <Routes> 
    <Route exact path="/signup" element={<SignUp/>}></Route>
    <Route exact path="/ordenar" element={<OrdenPage/>}></Route>
    <Route exact path="/" element={<StartPage/>}></Route>

    <Route  path="/logIn" element={<LogIn/>}></Route>
    <Route exact path="/ClientLine" element={<FinishedOrden/>}></Route>
    <Route exact path="/orden/:ordenId" element={<Editar/>}></Route>
    {/* <Route exact path="/findPage" element={<FindPage/>}></Route> */}
    </Routes> 
  
    </Router>
    // </userContext.provider>
  )


}

export default App;
