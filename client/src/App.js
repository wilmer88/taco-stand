import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AuthContext from "./context/AuthContext";
import StartPage from "./pages/StartPage";
import SignUp from "./pages/SignUp";
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
import Payment from "./pages/Payment/Payment";
import alertContext from "./context/alertContext";
import SearchOrderPage from "./pages/searchOrderPage/SearchOrderPage";
import UnpreparedOrders from "./pages/unpreparedOrders/UnpreparedOrders";
import ComboContext from "./context/ComboContext";
import DipContext from "./context/DipContext";
import CheckOutPage from "./pages/checkoutpage/CheckoutPage";
import MenuPage from "./components/modal/MenuPage";
import BurritoPage from "./pages/burritoPage/BurritoPage";
import burritosContext from "./context/burritoContext";
import ComboPage from "./pages/comboPage/comboPage";
import OrderDataContext from "./context/orderDataContext";
const App = () => {
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

  const [dipsArr, setDips] = useState([          
  ]);

  const [alert, setAlert] = useState({
    message: "",
    type: "",
  });

  const [jwt, setJwt] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (jwt) {
      setAxiosDefaults(jwt);
    }
  }, [jwt]);

  return (
    <Router>
      <AuthContext.Provider value={{ jwt, setJwt, userName, setUserName }}>
        <alertContext.Provider value={{ ...alert, setAlert: setAlert }}>
          <ComboContext.Provider value={{ combo, setCombo: setCombo }}>
            <OrderDataContext.Provider
              value={{ OrderContextObj, setOrderDataContext }}
            >
              <DipContext.Provider value={{ dipsArr, setDips }}>
                <burritosContext.Provider
                  value={{ burritosOrder, setBurritoContext }}
                >
                  <OrdenLevel />

                  <Routes>
                    <Route path="/burritopage" element={<BurritoPage />} />
                    <Route path="/comboPage" element={<ComboPage />} />
                    <Route path="/nachos" element={<NachosPage />} />
                    <Route path="/dips" element={<DipsPage />} />
                    <Route path="/checkoutPage" element={<CheckOutPage />} />
                    <Route path="/menuPage" element={<MenuPage />} />
                    <Route path="/kitchen" element={<Kitchen />} />
                    <Route path="/myorders" element={<MyOrders />} />
                    <Route path="/unprepared" element={<UnpreparedOrders />} />
                    <Route path="/payment/:ordenId" element={<Payment />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/orden/:ordenId" element={<Editar />} />
                    <Route path="/orden" exact element={<OrdenPage />} />
                    <Route path="/searcho" element={<SearchOrderPage />} />
                    <Route exact path="/" element={<StartPage />} />
                  </Routes>

                  {jwt !== "" ? <Footer /> : null}
                </burritosContext.Provider>
              </DipContext.Provider>
            </OrderDataContext.Provider>
          </ComboContext.Provider>
        </alertContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
