import React from "react";
import { Link } from "react-router-dom";
import ToppingField from "../components/ToppingField";
import NameField from "../components/NameField";
import DropDownField from "../components/DropDownField";
import OrderModel from "../components/modal/OrderModal";
import DipsContainer from "../containers/dips/dipsContainer";
import NachosContainer from "../containers/nachos/nachosContainer";
import { useContext } from "react";
import ComboContainer from "../containers/comboContainer/ComboContainer";
import OrderContext from "../context/orderDataContext";
import BurritosContainer from "../containers/Burritos/BurritosContainer";
// import { interfaces } from "mocha";

const OrdenPage = () => {
  console.count("i rerenderd in ordenpage");
  // const user = useContext(AuthContext);
  const orderContext = useContext(OrderContext);

const NameHandleChange = event => {
  event.preventDefault();
  const { name, value } = event.target;
  orderContext.setOrderDataContext({ ...orderContext, [name]: value });
};

  const cebollaIncrement = (event) => {
    event.preventDefault();
    orderContext.setOrderDataContext({ ...orderContext, cebolla: orderContext.cebolla + 1 });
  };

  const cebollaDecrement = (event) => {
    event.preventDefault()
    if (orderContext.cebolla >= 1) {
      orderContext.setOrderDataContext({ ...orderContext, cebolla: orderContext.cebolla - 1 })
    }
  };

  const cilantroIncrement = (event) => {
    event.preventDefault();
    orderContext.setOrderDataContext({ ...orderContext, cilantro: orderContext.cilantro + 1 })
  };

  const cilantroDecrement = (event) => {
    event.preventDefault()
    if (orderContext.cilantro >= 1) {
      orderContext.setOrderDataContext({ ...orderContext, cilantro: orderContext.cilantro - 1 })
    }
  };
  const picoIncrement = (event) => {
    event.preventDefault();
    orderContext.setOrderDataContext({ ...orderContext, pico: orderContext.pico + 1 });

  };

  const picoDecrement = (event) => {
    event.preventDefault()
    if (orderContext.pico >= 1) {
      orderContext.setOrderDataContext({ ...orderContext, pico: orderContext.pico - 1 })
    }
  };

  const greenSalsaIncrement = (event) => {
    event.preventDefault();
    orderContext.setOrderDataContext({ ...orderContext, greenSalsa: orderContext.greenSalsa + 1 })
  };

  const greenSalsaDecrement = (event) => {
    event.preventDefault()
    if (orderContext.greenSalsa >= 1) {
      orderContext.setOrderDataContext({ ...orderContext, greenSalsa: orderContext.greenSalsa - 1 })
    }
  };
  const redSalsaIncrement = (event) => {
    event.preventDefault();
    orderContext.setOrderDataContext({ ...orderContext, redSalsa: orderContext.redSalsa + 1 })
  };

  const redSalsaDecrement = (event) => {
    event.preventDefault();
    if (orderContext.redSalsa >= 1) {
      orderContext.setOrderDataContext({ ...orderContext, redSalsa: orderContext.redSalsa - 1 })
    }
  };

  const tacoNdrinksHandleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const intValue= parseInt(value,10);
    if(!isNaN(intValue)) {
      orderContext.setOrderDataContext({ ...orderContext, [name]: intValue });

    }
  };

  const phoneHandleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const intValue= parseInt(value,10);
    if(!isNaN(intValue)) {
      orderContext.setOrderDataContext({ ...orderContext, [name]: intValue });

    }
  };

  const tableHandleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const intValue= parseInt(value,10);
    if(!isNaN(intValue)) {
      orderContext.setOrderDataContext({ ...orderContext, [name]: intValue });

    }
  };

    return (<>
 <footer className="footer" >
 <div className="content is-full has-text-centered">




 <main className="box is-mobile is-shadowless is-align-self-center ">

      <section className="card" >

        <article className="card-content">
          <aside className="m-3 content" >
            <div className="container">

              <div className="is-align-content-center columns mt-3">
                <NameField
                  nameOfInputField="Name:"
                  placeholder="Ashley"
                  name="nombreDeOrden"
                  value={orderContext.nombreDeOrden}
                  onChange={NameHandleChange}
                />
                <NameField
                  nameOfInputField="Phone#"
                  placeholder="7063314752"
                  name="phoneNumber"
                  value={orderContext.phoneNumber}
                  onChange={phoneHandleChange}
                />
                   <NameField
                  nameOfInputField={<> <strong>Table# </strong>( optional) </>}
                  placeholder="14"
                  name="tableNumber"
                  value={orderContext.tableNumber}
                  onChange={tableHandleChange}
                 
                />
              </div>   
              <div id="nachitos" >
              </div>
<BurritosContainer/>
<DipsContainer/>
<NachosContainer />
<ComboContainer/>

              <figcaption >
                <h3 id="tacos"  style={{ textAlign: "center", background: "lightyellow", marginTop: "20px" }} > <strong>Tacos</strong></h3>
              </figcaption>

              <div  className="is-align-content-center columns mt-3">

                <DropDownField
                  tagg="Azada"
                  name="azada"
                  value={orderContext.azada}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Pollo"
                  name="pollo"
                  value={orderContext.pollo}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Barbacoa"
                  name="barbacoa"
                  value={orderContext.barbacoa}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Pastor"
                  name="pastor"
                  value={orderContext.pastor}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Chorizo"
                  name="chorizo"
                  value={orderContext.chorizo}
                  onChange={tacoNdrinksHandleChange}
                />

              </div>
              <hr></hr>

              <figcaption>
                <h3 style={{ textAlign: "center", background: "lightyellow" }} > <strong>Bebidas</strong></h3>
              </figcaption>
              <section className="columns mt-3">

                <DropDownField
                  tagg="Horchata Grande"
                  name="largeHorchata"
                  value={orderContext.largeHorchata}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Pequena Horchata"
                  name="smallHorchata"
                  value={orderContext.smallHorchata}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Coca Cola"
                  name="coca"
                  value={orderContext.coca}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Sprite"
                  name="sprite"
                  value={orderContext.sprite}
                  onChange={tacoNdrinksHandleChange}
                />
                <DropDownField
                  tagg="Fanta"
                  name="fanta"
                  value={orderContext.fanta}
                  onChange={tacoNdrinksHandleChange}
                />

              </section>
            </div>
            <hr></hr>
            <div className="container mt-3" >
              <figcaption  >
                <h3 style={{ textAlign: "center", background: "lightyellow" }} > <strong>Condimentos</strong></h3>
              </figcaption>

              <ToppingField
                subtitle="Cebolla"
                picture="../images/onions_1.webp"
                name="cebolla"
                value={orderContext.cebolla}
                topingCount={orderContext.cebolla}
                sumar={cebollaIncrement}
                restar={cebollaDecrement}
              />

              <ToppingField
                subtitle="Cilantro"
                name="cilantro"
                picture="../images/cilantro.webp"
                topingCount={orderContext.cilantro}
                value={orderContext.cilantro}
                sumar={cilantroIncrement}
                restar={cilantroDecrement}
              />

              <ToppingField
                subtitle="Pico"
                name="pico"
                picture="../images/pico.webp"
                topingCount={orderContext.pico}
                value={orderContext.pico}
                sumar={picoIncrement}
                restar={picoDecrement}
              />

              <ToppingField
                subtitle="Green/Verde Salsa"
                name="greenSalsa"
                picture="../images/greenSalsa.webp"
                topingCount={orderContext.greenSalsa}
                value={orderContext.greenSalsa}
                sumar={greenSalsaIncrement}
                restar={greenSalsaDecrement}
              />

              <ToppingField
                subtitle="Red/Roja Salsa"
                name="redSalsa"
                picture={"../images/redSalsa.webp"}
                topingCount={orderContext.redSalsa}
                value={orderContext.greenSalsa}
                sumar={redSalsaIncrement}
                restar={redSalsaDecrement}
               
              />
            </div>

          </aside>
        </article>
        <OrderModel />

      </section>
    </main> </div>
          <div className="content has-text-centered">         
          {""}  <strong> Tacos Don Santos</strong> by{""}
           <Link to="https://facebook.com/">Santos Alonzo</Link>
           {""}. Code is  property of {""}
           <Link to="http://instagram.com">
          Wilmer Rivera
          </Link>
            . App features exclusively built for {""}
            <Link to="#">
          Tacos Don Santos
          </Link>
          <hr></hr>
         </div>
         </footer>
        </> );
};

export default React.memo(OrdenPage);