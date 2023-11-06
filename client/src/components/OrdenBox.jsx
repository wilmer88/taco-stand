import ToppingField from "./ToppingField";
import NameField from "./NameField";
import DropDownField from "./DropDownField";
import OrderModel from "./modal/OrderModal";
import DipsContainer from "../containers/dips/dipsContainer";
import {useContext} from "react";
// import { useState, useContext, useEffect} from "react";

import ComboContainer from "../containers/comboContainer/ComboContainer";
import OrderContext from "../context/orderDataContext";


const OrdenBox = () => {
  console.count("i rerenderd in ordenBox");
  // const user = useContext(AuthContext);
  const {setOrderDataContext}= useContext(OrderContext);
  const orderContextLet = useContext(OrderContext);
// console.log(orderContextLet);
// console.log(combo[0]);

const NameHandleChange = event => {
  event.preventDefault();
  const { name, value } = event.target;
  setOrderDataContext({ ...orderContextLet, [name]: value });
};

  const cebollaIncrement = (event) => {
    event.preventDefault();
    setOrderDataContext({ ...orderContextLet, cebolla: orderContextLet.cebolla + 1 });
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
    setOrderDataContext({ ...orderContextLet, pico: orderContextLet.pico + 1 });

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

  // useEffect(()=>{

  //   setOrderDataContext(boxOrder);

  //   // console.log(comboT);
  //   // console.log(orderContextLet);

  //   // doOrder()
    
  // },[boxOrder]);

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
              <DipsContainer/>
<ComboContainer/>
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
                picture="../images/redSalsa.webp"
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