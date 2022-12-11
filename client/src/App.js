// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
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
// import Footer from "./components/footer/Footer";
import TacoBlockContext from "./utils/TacoContext";
import Payment from "./pages/Payment/Payment";
import Alert from "./components/Alert/Alert";
import alertContext from "./context/alertContext";
import SearchOrderPage from "./pages/searchOrderPage/SearchOrderPage";

const App = () => {
  
  const [alert, setAlert] = useState({
    message:"",
    type:"",
  })

  const [jwt, setJwt] = useState("");

  useEffect(() => {
    if (jwt) {
      setAxiosDefaults(jwt);
    }
  }, [jwt]);

  return (
    <>
      <Router>

        <AuthContext.Provider value={{ jwt, setJwt }}>
        <alertContext.Provider value ={{...alert, setAlert:setAlert}}> 
        <Alert/>

          <OrdenLevel />
          <Routes>
            <Route exact path="/payment/:ordenId" element={<Payment />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route exact path="/login" element={<ULog />}></Route>
            <Route exact path="/orden/:ordenId" element={<Editar />}></Route>
            <Route exact path="/ordens" element={<FinishedOrden />}></Route>
            <Route exact path="/orden" element={<TacoBlockContext.Provider value={TacoBlockContext}>{" "}<OrdenPage />{" "}</TacoBlockContext.Provider>}></Route>
            <Route exact path="/searcho" element={<SearchOrderPage />}></Route>
            <Route exact path="/" element={<StartPage />}></Route>
          </Routes>
          <Footer />
        </alertContext.Provider>

        </AuthContext.Provider>
      </Router>
    </>
  );
}

export default App;
