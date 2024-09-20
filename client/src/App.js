import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./context/AuthContext";
import StartPage from "./pages/StartPage";
// import SignUp from "./pages/SignUp";
import ClientSignUp from "./pages/clientSignUp/ClientSignUp";
import OrdenLevel from "./containers/navLever/OrdenLevel";
import Kitchen from "./pages/kitchen/KitchenPage";
import OrdenPage from "./pages/OrdenPage";
import NachosPage from "./pages/nochosPage/NachosPage";
import DipsPage from "./pages/dipsPageFolder/DipsPage";
import Editar from "./pages/Editar";
import Login from "./pages/Login";
import MyOrders from "./pages/my orders/myOrders";
import { setAxiosDefaults } from "./utils/axiosDefaults";
import Footer from "./components/Footer";
import ClientFooter from "./containers/clientFooter/ClientFooter";
import Payment from "./pages/Payment/Payment";
import alertContext from "./context/alertContext";
import SearchOrderPage from "./pages/searchOrderPage/SearchOrderPage";
import ComboContext from "./context/ComboContext";
import CheckOutPage from "./pages/checkoutpage/CheckoutPage";
import MenuPage from "./components/modal/MenuPage";
import BurritoPage from "./pages/burritoPage/BurritoPage";
import burritosContext from "./context/burritoContext";
import ComboPage from "./pages/comboPage/comboPage";
import OrderDataContext from "./context/orderDataContext";
import NotFoundPage from "./pages/notFound/notFound";
// import AllOrdersPage from "./pages/allOrders/AllOrdersPage";
// import AdminDash from "./pages/admin/AdminDash";
import AllOrdersPage from "./pages/allOrders/AllOrdersPage";
// import ProtectedRoute from "./components/protectedRoutes/protectedRoutes";

const App = () => {
  const userContextLogIn = useContext(AuthContext);
  const [OrderContextObj, setOrderDataContext] = useState({
    nombreDeOrden: "",
    phoneNumber: "",
    tableNumber: "",
    burritos: [],
    combo: [],
    dips: [],
    aLaCarte: [],
    nachos: [],
    azada: 0,
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
    cancelar: false,
    preparada: false,
    pagado: false,
  });

  const [burritosOrder, setBurritoContext] = useState([
    {
      burritoOrderId: 0,
      burritoOrderName: "",
      burritosPrice: "0",
      key: 1,
    },
  ]);

  const [combo, setCombo] = useState([]);

  const [alert, setAlert] = useState({
    message: "",
    type: "",
  });

  const [jwt, setJwt] = useState("");
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    if (jwt) {
      setAxiosDefaults(jwt);
    }
  }, [jwt, userContextLogIn]);

  return (
    <Router>
      <AuthContext.Provider
        value={{
          jwt,
          setJwt: setJwt,
          userName,
          setUserName: setUserName,
          userRole,
          setUserRole: setUserRole,
        }}
      >
        <alertContext.Provider value={{ ...alert, setAlert: setAlert }}>
          <ComboContext.Provider value={{ combo, setCombo: setCombo }}>
            <OrderDataContext.Provider value={{ OrderContextObj, setOrderDataContext }}>
              <burritosContext.Provider value={{ burritosOrder, setBurritoContext }}>
                <OrdenLevel />

                <Routes>


                  <Route path="/burritopage" element={<BurritoPage />} />
                  <Route path="/comboPage" element={<ComboPage />} />
                  <Route path="/nachos" element={<NachosPage />} />
                  <Route path="/dips" element={<DipsPage />} />
                  <Route path="/checkoutPage" element={<CheckOutPage />} />
                  <Route path="/menuPage" element={<MenuPage />} />
                  
                  <Route path="/myorders" element={<MyOrders />} />
                  <Route path="/kitchen" element={<Kitchen />} />
                  <Route path="/payment/:ordenId" element={<Payment />} />
                  <Route path="/signup" element={<ClientSignUp />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/orden/:ordenId" element={<Editar />} />
                  <Route path="/allOrders" element={<AllOrdersPage />} />

                  <Route path="/orden" exact element={

                  <OrdenPage />
                  
                    } />
                  <Route path="/searcho" element={<SearchOrderPage />} />
                  <Route exact path="/" element={<StartPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>

                {
                 userRole === "administrador" ?
                   <Footer />
                
                   :  <ClientFooter />
                 }

          



              </burritosContext.Provider>
            </OrderDataContext.Provider>
          </ComboContext.Provider>
        </alertContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
