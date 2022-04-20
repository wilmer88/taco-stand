import React, {useEffect, useState} from "react";
import AuthContext from "./context/AuthContext";
import StartPage from "./pages/StartPage";
import SignUp from "./pages/SignUp";
// import OrdenLevel from "./components/OrdenLevel";
import FinishedOrden from "./pages/ClientLine";
import OrdenPage from "./pages/OrdenPage";
import Editar from "./pages/Editar";
import LogIn from "./pages/LogIn";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { setAxiosDefaults } from "./utils/axiosDefaults";
import FindPage from "./pages/FindPage";
function App() {
  const [jwt, setJwt] = useState("");

  useEffect(() => {

          if(jwt) {
            setAxiosDefaults(jwt)
          }
  }, [jwt])

  return(
  
<AuthContext.Provider value= {{jwt, setJwt}}> 
<Router>
        
    <Routes> 
    <Route exact path="/orden/:ordenId" element={<Editar/>}></Route>
    <Route  path="/login" element={<LogIn/>}></Route>
    <Route exact path="/signup" element={<SignUp/>}></Route>
    <Route exact path="/ordenar" element={<OrdenPage/>}></Route>
    <Route exact path="/ClientLine" element={<FinishedOrden/>}></Route>
    <Route exact path="/" element={<StartPage/>}></Route>
    <Route exact path="/findPage" element={<FindPage/>}></Route>
    </Routes> 
   
    </Router>
    </AuthContext.Provider>


   
 
  )


}

export default App;
