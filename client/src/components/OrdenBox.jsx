import ToppingField from "./ToppingField";
import NameField from "./NameField";
import DropDownField from "./DropDownField";
import API from "../utils/API";
// import React, { } from "react";
import { Link } from "react-router-dom";
// import ComboDropdown from "./comboDropdown/ComboDropdown";
import { useState, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import alertContext from "../context/alertContext";
import AuthContext from "../context/AuthContext";
import { io } from "socket.io-client";
import ComboContainer from "../containers/ComboContainer";
import ComboContext from "../context/ComboContext";

const IS_PROD = process.env.NODE_ENV === "production";
const URL = IS_PROD ? "https://taco-stand.herokuapp.com/" : "http://localhost:3001";
const socket = io(URL);
// const socket= io.connect("https://taco-stand.herokuapp.com/");

const OrdenBox = () => {
  const user = useContext(AuthContext);

let combo = useContext(ComboContext);
let comboT=combo[0]

const [combo1, setCombo1]= useState([]);

const [orderData, setOrderData] = useState({

  nombreDeOrden: "" || user.userName,
  combo:combo1,
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
});
let ordenObj = {

  nombreDeOrden: orderData.nombreDeOrden|| "" || user.userName,
  combo:combo1,
  azada: orderData.azada||0,
  pollo:  orderData.pollo||0,
  barbacoa:  orderData.barbacoa||0,
  pastor: orderData.pastor||0,
  chorizo:  orderData.chorizo||0,
  cebolla:  orderData.cebolla||0,
  cilantro:  orderData.cilantro||0,
  pico:  orderData.pico||0,
  redSalsa:  orderData.redSalsa||0,
  greenSalsa:  orderData.greenSalsa||0,
  largeHorchata:  orderData.largeHorchata||0,
  smallHorchata:  orderData.smallHorchata||0,
  coca: orderData.coca||0,
  sprite: orderData.sprite||0,
  fanta:  orderData.fanta||0,
};


  useEffect(()=>{
  setCombo1(comboT);
  setOrderData([ordenObj])


  console.log(comboT)

//   console.log(combo1)
//   console.log(combo)

//  console.log(combo1)

 
//  console.log(ordenObj.combo)

//  console.log(ordenObj.nombreDeOrden)
console.log(orderData)

 },[combo])


  async function resetState() {setOrderData({
      nombreDeOrden: "",
      phoneNumber:"",
      tableNumber:"",
      combo: [
              {
        choicePrice:0,
        comboId:0,
        supreme: false,
        choice1:"",
        choice2:"",
        choice3:"",
        key:"",
     
      }

      ],

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
      allVerdurasPrice: 0,
    })};

  const [showModel, setshowModel] = useState("modal");
  const openModal = (e) => {
    e.preventDefault();

    if(orderData[0].nombreDeOrden==""){alert("must have name for order!")};
    if(orderData[0].nombreDeOrden !== "" && orderData.combo.length !== 0){ setOrderData(ordenObj);  setshowModel("modal is-active");};

    console.log(orderData);
  };
  const handleClose = () => { setshowModel("modal") };
  
  const navigate = useNavigate();
  const { setAlert } = useContext(alertContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    API.create(orderData).then((response) => {
      firstFunction();
      // console.log(response)
      setTimeout(() => { secondFunction() }, 2000);
      setAlert({ message: "You successfully placed order!", type: "is-success" });
      // console.log(response);   
      resetState()
      API.allOrdens().then((response) => {
        // console.log(response.data)
        socket.emit("rs", response.data);
      })
    }).catch((err) => { console.log(err) })
  };

  async function firstFunction() {
    handleClose();
    alert("thanks for your order/ Gracias por su orden!");
  };

  async function secondFunction() {navigate("/")};

  const cebollaIncrement = (event) => {
    event.preventDefault();
    setOrderData({ ...orderData, cebolla: orderData.cebolla + 1 })
  };

  const cebollaDecrement = (event) => {
    event.preventDefault()
    if (orderData.cebolla >= 1) {
      setOrderData({ ...orderData, cebolla: orderData.cebolla - 1 })
    }
  };

  const cilantroIncrement = (event) => {
    event.preventDefault();
    setOrderData({ ...orderData, cilantro: orderData.cilantro + 1 })
  };

  const cilantroDecrement = (event) => {
    event.preventDefault()
    if (orderData.cilantro >= 1) {
      setOrderData({ ...orderData, cilantro: orderData.cilantro - 1 })
    }
  };
  const picoIncrement = (event) => {
    event.preventDefault();
    setOrderData({ ...orderData, pico: orderData.pico + 1 })
  };

  const picoDecrement = (event) => {
    event.preventDefault()
    if (orderData.pico >= 1) {
      setOrderData({ ...orderData, pico: orderData.pico - 1 })
    }
  };

  const greenSalsaIncrement = (event) => {
    event.preventDefault();
    setOrderData({ ...orderData, greenSalsa: orderData.greenSalsa + 1 })
  };

  const greenSalsaDecrement = (event) => {
    event.preventDefault()
    if (orderData.greenSalsa >= 1) {
      setOrderData({ ...orderData, greenSalsa: orderData.greenSalsa - 1 })
    }
  };
  const redSalsaIncrement = (event) => {
    event.preventDefault();
    setOrderData({ ...orderData, redSalsa: orderData.redSalsa + 1 })
  };

  const redSalsaDecrement = (event) => {
    event.preventDefault();
    if (orderData.redSalsa >= 1) {
      setOrderData({ ...orderData, redSalsa: orderData.redSalsa - 1 })
    }
  };

  const NameHandleChange = event => {
    const { name, value } = event.target;
    setOrderData({ ...orderData, [name]: value })
  };

  const tacoNdrinksHandleChange = (event) => {
    const { name, value } = event.target;
    setOrderData({ ...orderData, [name]: parseInt(value) })
  };

  const phoneHandleChange = (event) => {
    const { name, value } = event.target;
    setOrderData({ ...orderData, [name]: parseInt(value) })
  };


  return (<>
    <main className="box is-mobile is-shadowless is-align-self-center">
      <section className="card">

        <article className="card-content">
          <aside className="m-3 content" >
            <div className="container mt-3">

              <div className="is-align-content-center columns mt-3">
                <NameField
                  nameOfInputField="Name:"
                  placeholder="Ashley"
                  name="nombreDeOrden"
                  value={orderData.nombreDeOrden}
                  onChange={NameHandleChange}
                />
                <NameField
                  nameOfInputField="Phone#"
                  placeholder="7063314752"
                  name="phoneNumber"
                  value={orderData.phoneNumber}
                  onChange={phoneHandleChange}
                />
                   <NameField
                  nameOfInputField={<> <strong>Table# </strong>( optional) </>}
                  placeholder="14"
                  name="nombreDeOrden"
                  value={orderData.nombreDeOrden}
                  onChange={NameHandleChange}
                />
              </div>
              
<ComboContainer />



              <figcaption>
                <h3 style={{ textAlign: "center", background: "lightyellow", marginTop: "20px" }} > <strong>Tacos</strong></h3>
              </figcaption>

              <div className="is-align-content-center columns mt-3">

                <DropDownField
                  tagg="Azada"
                  name="azada"
                  value={orderData.azada}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Pollo"
                  name="pollo"
                  value={orderData.pollo}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Barbacoa"
                  name="barbacoa"
                  value={orderData.barbacoa}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Pastor"
                  name="pastor"
                  value={orderData.pastor}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Chorizo"
                  name="chorizo"
                  value={orderData.chorizo}
                  onChange={tacoNdrinksHandleChange}
                />

              </div>
              <hr></hr>

              <figcaption>
                <h3 style={{ textAlign: "center", background: "lightyellow" }} > <strong>Bebidas</strong></h3>
              </figcaption>
              <div className="columns mt-3">

                <DropDownField
                  tagg="Horchata Grande"
                  name="largeHorchata"
                  value={orderData.largeHorchata}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Pequena Horchata"
                  name="smallHorchata"
                  value={orderData.smallHorchata}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Coca Cola"
                  name="coca"
                  value={orderData.coca}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Sprite"
                  name="sprite"
                  value={orderData.sprite}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Fanta"
                  name="fanta"
                  value={orderData.fanta}
                  onChange={tacoNdrinksHandleChange}
                />

              </div>
            </div>
            <hr></hr>
            <div className="container mt-3">
              <figcaption>
                <h3 style={{ textAlign: "center", background: "lightyellow" }} > <strong>Condimentos</strong></h3>
              </figcaption>

              <ToppingField
                subtitle="Cebolla"
                picture="../images/onions.png"
                name="cebolla"
                // value={orderData.cebolla}
                // topingCount={orderData.cebolla}
                sumar={cebollaIncrement}
                restar={cebollaDecrement}
              />

              <ToppingField
                subtitle="Cilantro"
                name="cilantro"
                picture="../images/cilantro.png"
                // topingCount={orderData.cilantro}
                // value={orderData.cilantro}
                sumar={cilantroIncrement}
                restar={cilantroDecrement}
              />

              <ToppingField
                subtitle="Pico"
                name="pico"
                picture="../images/pico.png"
                // topingCount={orderData.pico}
                // value={orderData.pico}
                sumar={picoIncrement}
                restar={picoDecrement}
              />

              <ToppingField
                subtitle="Green/Verde Salsa"
                name="greenSalsa"
                picture="../images/greenSalsa.png"
                // topingCount={orderData.greenSalsa}
                // value={orderData.greenSalsa}
                sumar={greenSalsaIncrement}
                restar={greenSalsaDecrement}
              />

              <ToppingField
                subtitle="Red/Roja Salsa"
                name="redSalsa"
                picture="../images/redSalsa.png"
                // topingCount={orderData.redSalsa}
                // value={orderData.greenSalsa}
                sumar={redSalsaIncrement}
                restar={redSalsaDecrement}
              />
            </div>

          </aside>
        </article>
        <aside id="modalll" className={`${showModel}`}>
          <div className="modal-background"></div>
          <div className="modal-content ">
            <div className="box is-mobile">

              <div style={{ fontSize: "30px", fontWeight: "bold" }}>Esta correcta /Is this correct?
                {orderData.nombreDeOrden !== 0 && (<div >{orderData.nombreDeOrden}</div>)}</div><hr></hr>


                {orderData.combo !== 0  && (orderData.combo?.map((ordermap) =>  <div key={ordermap.comboId} style={{ fontSize: "25px", textAlign: "left" }}>Combo#{ [  ordermap.comboId]}: {[ordermap.choice1]}, {[ordermap.choice2]},{[ordermap.supreme]}  <hr></hr> </div> ) )} 


              {orderData.azada !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Azada: {orderData.azada}</div>)}
              {orderData.pollo !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Pollo: {orderData.pollo}</div>)}
              {orderData.barbacoa !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}>Barbacoa: {orderData.barbacoa}</div>)}
              {orderData.pastor !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Pastor: {orderData.pastor}</div>)}
              {orderData.chorizo !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}>Chorizo: {orderData.chorizo}</div>)}

              {orderData.largeHorchata !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Horchata/Large Grande: {orderData.largeHorchata}</div>)}
              {orderData.smallHorchata !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Horchata PequeNa: {orderData.smallHorchata}</div>)}
              {orderData.coca !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Coca Cola: {orderData.coca}</div>)}
              {orderData.sprite !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Sprite: {orderData.sprite}</div>)}
              {orderData.fanta !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Fanta: {orderData.fanta}</div>)}

              {orderData.cebolla !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}>Cebolla: {orderData.cebolla}</div>)}
              {orderData.cilantro !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}>Cilantro: {orderData.cilantro}</div>)}
              {orderData.pico !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Pico De Gallo: {orderData.pico}</div>)}
              {orderData.redSalsa !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Salsa Roja: {orderData.redSalsa}</div>)}
              {orderData.greenSalsa !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Salsa Verde: {orderData.greenSalsa}</div>)}
              <hr></hr>
              <button onClick={handleClose} type="button" className="button is-medium is-dark" >Cancelar</button>
              <br></br>
              <br></br>
              <button style={{ fontSize: "25px" }} type="button" onClick={handleSubmit} className="button is-medium  is-primary is-light"><strong>Continuar</strong></button>
            </div>
          </div>
          <button onClick={handleClose} type="button" className="modal-close is-large" aria-label="close"></button>
        </aside>

        <footer className="card-footer">
          <div className="card-footer-item">
            <span>
              <button id="modalButton" onClick={openModal} className="button is-medium is-success is-light" data-target="modal-js-example">
                <strong>Entregar</strong>
              </button>
            </span>
          </div>
          <div className="card-footer-item">
            <span>
              Conparte en {""}
              <Link to="#">
                Facebook
              </Link>
            </span>
          </div>
        </footer>

      </section>
    </main>
   </>);
}
export default OrdenBox;