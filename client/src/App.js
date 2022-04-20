import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {useEffect, useState} from "react";
import AuthContext from "./context/AuthContext";
import StartPage from "./pages/StartPage";
import SignUp from "./pages/SignUp";
// import OrdenLevel from "./components/OrdenLevel";
import FinishedOrden from "./pages/ClientLine";
import OrdenPage from "./pages/OrdenPage";
import Editar from "./pages/Editar";
import ULog from "./pages/ULog";
// import FindPage from "./pages/FindPage";
import { setAxiosDefaults } from "./utils/axiosDefaults";
function App() {

  const [jwt, setJwt] = useState("");

  useEffect(() => {

    if(jwt) {
      setAxiosDefaults(jwt)
    }
}, [jwt])

  return(
  <div>

<Router>
<AuthContext.Provider value= {{jwt, setJwt}}>   
    <Routes> 
      <Route  path="/ClientLine" element={<FinishedOrden/>}></Route>
    <Route  path="/orden/:ordenId" element={<Editar/>}></Route>
    {/* <Route  path="/findPage" element={<FindPage/>}></Route> */}
    <Route exact path="/ordenar" element={<OrdenPage/>}></Route>
    <Route  path="/signup" element={<SignUp/>}></Route>
    <Route exact path="/login" element={<ULog/>}></Route>
    <Route exact path="/" element={<StartPage/>}></Route>
    </Routes> 
     

    </AuthContext.Provider>
    </Router>
  
 
  </div>

  )


}

export default App;
