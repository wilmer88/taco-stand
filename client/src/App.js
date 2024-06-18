import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AuthContext from "./context/AuthContext";
import StartPage from "./pages/StartPage";
import SignUp from "./pages/SignUp";
import OrdenLevel from "./containers/navLever/OrdenLevel";
import Kitchen  from "./pages/kitchen";
import OrdenPage from "./pages/OrdenPage";
import NachosPage from "./pages/nochosPage/NachosPage";
import DipsPage from "./pages/dipsPageFolder/DipsPage";
// import AllOrdersPage from "./pages/allOrders/AllOrdersPage";
import Editar from "./pages/Editar";
import Login from "./pages/Login";
import MyOrders from "./pages/my orders/myOrders"
import { setAxiosDefaults } from "./utils/axiosDefaults";
import Footer from "./components/Footer";
import Payment from "./pages/Payment/Payment";
import alertContext from "./context/alertContext";
import SearchOrderPage from "./pages/searchOrderPage/SearchOrderPage";
// import AdminDash from "./pages/admin/AdminDash";
// import AdminSignUp from "./pages/AdminSignUp/AdminSignup";
import UnpreparedOrders from "./pages/unpreparedOrders/UnpreparedOrders";
import ComboContext from "./context/ComboContext";
import AppOrderContext from "./context/orderDataContext";
import DipContext from "./context/DipContext";
import CheckOutPage from "./pages/checkoutpage/CheckoutPage";
import MenuPage from "./components/modal/MenuPage";
import BurritoPage from "./pages/burritoPage/BurritoPage";
import burritosContext from "./context/burritoContext";
import ComboPage from "./pages/comboPage/comboPage";

const App = () => {
  console.count("i rerenderd in App.js");

  const [orderDataContext, setOrderDataContext]= useState({
      orderDataContextArray: [
   {
     nombreDeOrden: "",
    phoneNumber:"",
    tableNumber:"",
    burritos:[],
    combo:[],
    dips:[],
    aLaCarte:[],
    nachos:[],
    azada:0,
    pollo: 0,
    barbacoa: 0,
    pastor: 0,
    chorizo: 0,
    cebolla: 0,
    cilantro: 0,
    pico: 0,
    redSalsa: 0,
    greenSalsa: 0,
    largeHorchata: 0,
    smallHorchata: 0,
    coca: 0,
    sprite: 0,
    fanta: 0,
    cancelar:false,
    preparada: false,
    pagado:false,
  },
  ]
});

  const [burritosOrder, setBurritoContext] = useState([
    {
    burritoOrderId: 0,
    burritoOrderName: "",
    burritosPrice: "0",
    key: 1,
  }
])

   const [combo, setCombo]= useState([]);

  const [dipsArr, setDips] = useState([]);


  const [alert, setAlert] = useState({
    message:"",
    type:"",
  });

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
        <ComboContext.Provider value={{combo,setCombo:setCombo}}>
          <AppOrderContext.Provider value={{...orderDataContext, setOrderDataContext:setOrderDataContext}}>
            <DipContext.Provider value={{dipsArr, setDips}}>
            <burritosContext.Provider value={{...burritosOrder, setBurritoContext:setBurritoContext}}>
          < OrdenLevel/>
          <Routes>
          <Route exact path="/burritopage" element={<BurritoPage />}></Route>
          <Route path="/comboPage" element={<ComboPage />}></Route>
          <Route path="/nachos" element={<NachosPage />}></Route>
          <Route path="/dips" element={<DipsPage />}></Route>
          <Route path="/checkoutPage" element={<CheckOutPage />}></Route>
          <Route path="/menuPage" element={<MenuPage />}></Route>
          <Route path="/kitchen" element={<Kitchen />}></Route>
          <Route path="/myorders" element={<MyOrders />}></Route>
          <Route path="/unprepared" element={<UnpreparedOrders />}></Route>
          {/* <Route exact path="/allOrders" element={<AllOrdersPage />}></Route> */}
          {/* <Route exact path="/adminDash" element={<AdminDash />}></Route> */}
          {/* <Route exact path="/adminSignup" element={<AdminSignUp />}></Route> */}
          {/* <Route exact path="/myorders/:userName" element={<MyOrders />}></Route> */}
            <Route path="/payment/:ordenId" element={<Payment />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/orden/:ordenId" element={<Editar />}></Route>
            <Route path="/orden" exact element={<OrdenPage />}></Route>
            <Route path="/searcho" element={<SearchOrderPage />}></Route>
            <Route exact path="/" element={<StartPage />}></Route>

          </Routes>
          {jwt !== "" ? (
             <Footer />): null }

</burritosContext.Provider>
</DipContext.Provider>
</AppOrderContext.Provider>
</ComboContext.Provider>
</alertContext.Provider>
</AuthContext.Provider>
      </Router>
    </>
  );
}

export default App;
