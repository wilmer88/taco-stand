// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AuthContext from "./context/AuthContext";
import StartPage from "./pages/StartPage";
import SignUp from "./pages/SignUp";
import OrdenLevel from "./components/OrdenLevel/OrdenLevel";
import ClientLine from "./pages/ClientLine";
import OrdenPage from "./pages/OrdenPage";
import Editar from "./pages/Editar";
import Login from "./pages/Login";
import MyOrders from "./pages/my orders/myOrders"
import { setAxiosDefaults } from "./utils/axiosDefaults";
import Footer from "./components/Footer";
// import TacoBlockContext from "./utils/TacoContext";
import Payment from "./pages/Payment/Payment";
import Alert from "./components/Alert/Alert";
import alertContext from "./context/alertContext";
import SearchOrderPage from "./pages/searchOrderPage/SearchOrderPage";
import AdminDash from "./pages/admin/AdminDash";
import AdminSignUp from "./pages/AdminSignUp/AdminSignup";
import Pp from "./components/Pp/Pp"

const App = () => {
  
  const [alert, setAlert] = useState({
    message:"",
    type:"",
  })

  const [jwt, setJwt] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (jwt) {
      setAxiosDefaults(jwt);
    }
  }, [jwt]);

  return (
    <>
      <Router>

        <AuthContext.Provider value={{ jwt, setJwt, userName, setUserName }}>
        <alertContext.Provider value ={{...alert, setAlert:setAlert}}> 
        <Alert/>

          <OrdenLevel />
          <Routes>
          <Route exact path="/myorders" element={<MyOrders />}></Route>

          <Route exact path="/adminDash" element={<AdminDash />}></Route>
          <Route exact path="/adminSignup" element={<AdminSignUp />}></Route>

          <Route exact path="/myorders/:userName" element={<MyOrders />}></Route>
            <Route exact path="/payment/:ordenId" element={<Payment />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/orden/:ordenId" element={<Editar />}></Route>
            <Route exact path="/ordens" element={<ClientLine />}></Route>
 <Route path="/orden" element={
 <Pp jwt ={jwt}>
 <OrdenPage />
 </Pp>
 }>
  
 </Route>
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
