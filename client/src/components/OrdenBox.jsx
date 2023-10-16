import ToppingField from "./ToppingField";
import NameField from "./NameField";
import DropDownField from "./DropDownField";
import OrderModel from "./modal/OrderModal";
import { useState, useContext, useEffect} from "react";
// import alertContext from "../context/alertContext";
// import AuthContext from "../context/AuthContext";
// import { io } from "socket.io-client";
import ComboContainer from "../containers/ComboContainer";
import ComboContext from "../context/ComboContext";
import OrderContext from "../context/orderDataContext";
// const IS_PROD = process.env.NODE_ENV === "production";
// const URL = IS_PROD ? "https://taco-stand.herokuapp.com/" : "http://localhost:3001";
// const socket = io(URL);
// const socket= io.connect("https://taco-stand.herokuapp.com/");

const OrdenBox = () => {
  // const user = useContext(AuthContext);
  const orderContextLet = useContext(OrderContext);
  const {setOrderDataContext}= useContext(OrderContext);
let combo = useContext(ComboContext);
// console.log(orderContextLet);
const[ comboHolder, setComboHolder]= useState([])
// console.log(combo[0]);

const finalOrder= {
  nombreDeOrden:  orderContextLet.nombreDeOrden,
  phoneNumber:"",
  tableNumber:"",
  combo:comboHolder,
  azada:orderContextLet.azada,
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
};

const doOrder = (event)=> {
  // event.preventDefault();
  setComboHolder(combo[0]);
  setOrderDataContext(finalOrder);
// console.log("runing");

// console.log(orderContextLet);
// console.log(comboHolder);

};
// console.log(orderContextLet);


const NameHandleChange = event => {
  // event.preventDefault();
  doOrder()
// console.log(orderContextLet);

  const { name, value } = event.target;
  setOrderDataContext({ ...orderContextLet, [name]: value })
};

  const cebollaIncrement = (event) => {
    event.preventDefault();
    setOrderDataContext({ ...orderContextLet, cebolla: orderContextLet.cebolla + 1 })
  };

  const cebollaDecrement = (event) => {
    event.preventDefault()
    if (orderContextLet.cebolla >= 1) {
      setOrderDataContext({ ...orderContextLet, cebolla: orderContextLet.cebolla - 1 })
    }
  };

  const cilantroIncrement = (event) => {
    event.preventDefault();
    setOrderDataContext({ ...orderContextLet, cilantro: orderContextLet.cilantro + 1 })
  };

  const cilantroDecrement = (event) => {
    event.preventDefault()
    if (orderContextLet.cilantro >= 1) {
      setOrderDataContext({ ...orderContextLet, cilantro: orderContextLet.cilantro - 1 })
    }
  };
  const picoIncrement = (event) => {
    event.preventDefault();
    setOrderDataContext({ ...orderContextLet, pico: orderContextLet.pico + 1 })
  };

  const picoDecrement = (event) => {
    event.preventDefault()
    if (orderContextLet.pico >= 1) {
      setOrderDataContext({ ...orderContextLet, pico: orderContextLet.pico - 1 })
    }
  };

  const greenSalsaIncrement = (event) => {
    event.preventDefault();
    setOrderDataContext({ ...orderContextLet, greenSalsa: orderContextLet.greenSalsa + 1 })
  };

  const greenSalsaDecrement = (event) => {
    event.preventDefault()
    if (orderContextLet.greenSalsa >= 1) {
      setOrderDataContext({ ...orderContextLet, greenSalsa: orderContextLet.greenSalsa - 1 })
    }
  };
  const redSalsaIncrement = (event) => {
    event.preventDefault();
    setOrderDataContext({ ...orderContextLet, redSalsa: orderContextLet.redSalsa + 1 })
  };

  const redSalsaDecrement = (event) => {
    event.preventDefault();
    if (orderContextLet.redSalsa >= 1) {
      setOrderDataContext({ ...orderContextLet, redSalsa: orderContextLet.redSalsa - 1 })
    }
  };

  const tacoNdrinksHandleChange = (event) => {
    const { name, value } = event.target;
    setOrderDataContext({ ...orderContextLet, [name]: parseInt(value) })
  };

  const phoneHandleChange = (event) => {
    const { name, value } = event.target;
    setOrderDataContext({ ...orderContextLet, [name]: parseInt(value) })
  };

  const tableHandleChange = (event) => {
    const { name, value } = event.target;
    setOrderDataContext({ ...orderContextLet, [name]: parseInt(value) })
  };

  useEffect((e)=>{

    // console.log(comboT);
    doOrder()
    
  },[ combo[0]]);

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
                  value={orderContextLet.nombreDeOrden}
                  onChange={NameHandleChange}
                />
                <NameField
                  nameOfInputField="Phone#"
                  placeholder="7063314752"
                  name="phoneNumber"
                  value={orderContextLet.phoneNumber}
                  onChange={phoneHandleChange}
                />
                   <NameField
                  nameOfInputField={<> <strong>Table# </strong>( optional) </>}
                  placeholder="14"
                  name="tableNumber"
                  value={orderContextLet.tableNumber}
                  onChange={tableHandleChange}
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
                  value={orderContextLet.azada}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Pollo"
                  name="pollo"
                  value={orderContextLet.pollo}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Barbacoa"
                  name="barbacoa"
                  value={orderContextLet.barbacoa}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Pastor"
                  name="pastor"
                  value={orderContextLet.pastor}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Chorizo"
                  name="chorizo"
                  value={orderContextLet.chorizo}
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
                  value={orderContextLet.largeHorchata}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Pequena Horchata"
                  name="smallHorchata"
                  value={orderContextLet.smallHorchata}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Coca Cola"
                  name="coca"
                  value={orderContextLet.coca}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Sprite"
                  name="sprite"
                  value={orderContextLet.sprite}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Fanta"
                  name="fanta"
                  value={orderContextLet.fanta}
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
                value={orderContextLet.cebolla}
                topingCount={orderContextLet.cebolla}
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
                topingCount={orderContextLet.pico}
                value={orderContextLet.pico}
                sumar={picoIncrement}
                restar={picoDecrement}
              />

              <ToppingField
                subtitle="Green/Verde Salsa"
                name="greenSalsa"
                picture="../images/greenSalsa.png"
                topingCount={orderContextLet.greenSalsa}
                value={orderContextLet.greenSalsa}
                sumar={greenSalsaIncrement}
                restar={greenSalsaDecrement}
              />

              <ToppingField
                subtitle="Red/Roja Salsa"
                name="redSalsa"
                picture="../images/redSalsa.png"
                topingCount={orderContextLet.redSalsa}
                value={orderContextLet.greenSalsa}
                sumar={redSalsaIncrement}
                restar={redSalsaDecrement}
              />
            </div>

          </aside>
        </article>
        <OrderModel/>

      </section>
    </main>

   </>);}
export default OrdenBox;