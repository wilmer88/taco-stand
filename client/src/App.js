import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {useEffect, useState} from "react";
import AuthContext from "./context/AuthContext";
import StartPage from "./pages/StartPage";
import SignUp from "./pages/SignUp";
import OrdenLevel from "./components/OrdenLevel";
import FinishedOrden from "./pages/ClientLine";
import OrdenPage from "./pages/OrdenPage";
import Editar from "./pages/Editar";
import ULog from "./pages/ULog";
import { setAxiosDefaults } from "./utils/axiosDefaults";
import Footer from "./components/Footer";
function App(){

  const [jwt, setJwt] = useState("");

  useEffect(() => {

    if(jwt) {
      setAxiosDefaults(jwt)
    }
}, [jwt])

  return(
    <>
    <Router>
<AuthContext.Provider value= {{jwt, setJwt}}>   
<OrdenLevel/>
    <Routes> 
    <Route exact path="/signup" element={<SignUp/>}></Route>
    <Route exact path="/login" element={<ULog/>}></Route>
    <Route  exact path="/orden/:ordenId" element={<Editar/>}></Route>
      <Route exact path="/ordens" element={<FinishedOrden/>}></Route>
    <Route exact path="/orden" element={<OrdenPage/>}></Route>
    <Route exact path="/" element={<StartPage/>}></Route>
    </Routes> 
    <Footer/>
    </AuthContext.Provider>
    </Router>
    </>

  )

};

export default App;
