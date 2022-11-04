import ToppingField from "./ToppingField";
import NameField from "./NameField";
import DropDownField from "./DropDownField";
import API from "../utils/API";
import React from "react";
import { Link} from "react-router-dom";
import {useState} from "react";
// import TopingsBlock from "./TopingsBlock";
// import TacoBlockContext from "../utils/TacoContext";
import { useNavigate } from "react-router-dom";

const OrdenBox = () => {
  const navigate = useNavigate()
  const [orderData, setOrderData] = useState({
    nombreDeOrden:"",
    azada:0,
    pollo:0,
    barbacoa: 0,
    pastor: 0,
    chorizo: 0,
    cebolla:0,
    cilantro:0,
    pico: 0,
    redSalsa: 0,
    greenSalsa: 0,
    largeHorchata: 0,
    smallHorchata: 0,
    coca: 0,
    sprite: 0,
    fanta: 0,
  });

  const cebollaIncrement = (event) =>{
    event.preventDefault();
    setOrderData({...orderData, cebolla: orderData.cebolla  + 1 })
    };

    const cebollaDecrement = (event) =>{
      event.preventDefault()
      if(orderData.cebolla >= 1){
        setOrderData({...orderData, cebolla: orderData.cebolla  - 1 })
      }
      };

      const cilantroIncrement = (event) =>{
        event.preventDefault();
        setOrderData({...orderData, cilantro: orderData.cilantro  + 1 })
        };
    
        const cilantroDecrement = (event) =>{
          event.preventDefault()
          if(orderData.cilantro >= 1){
            setOrderData({...orderData, cilantro: orderData.cilantro  - 1 })
          }
          };
          const picoIncrement = (event) =>{
            event.preventDefault();
            setOrderData({...orderData, pico: orderData.pico  + 1 })
            };
        
            const picoDecrement = (event) =>{
              event.preventDefault()
              if(orderData.pico >= 1){
                setOrderData({...orderData, pico: orderData.pico  - 1 })
              }
              };
        
              const greenSalsaIncrement = (event) =>{
                event.preventDefault();
                setOrderData({...orderData, greenSalsa: orderData.greenSalsa  + 1 })
                };
            
                const greenSalsaDecrement = (event) =>{
                  event.preventDefault()
                  if(orderData.greenSalsa >= 1){
                    setOrderData({...orderData, greenSalsa: orderData.greenSalsa  - 1 })
                  }
                  };
                  const redSalsaIncrement = (event) =>{
                    event.preventDefault();
                    setOrderData({...orderData, redSalsa: orderData.redSalsa  + 1 })
                    };
                
                    const redSalsaDecrement = (event) =>{
                      event.preventDefault()
                      if(orderData.redSalsa >= 1){
                        setOrderData({...orderData, redSalsa: orderData.redSalsa  - 1 })
                      }
                      };

  const  NameHandleChange = event => {
    const {name, value} = event.target;
    setOrderData({...orderData, [name]:value })
   };

   const  tacoNdrinksHandleChange = (event) => {
    const {name, value} = event.target;
    setOrderData({...orderData, [name]: parseInt(value) })
   };

   async function resetState ()  {
      setOrderData({
        nombreDeOrden:"",
        azada:0,
        pollo:0,
        barbacoa: 0,
        pastor: 0,
        chorizo: 0,
        cebolla:0,
        cilantro:0,
        pico: 0,
        redSalsa: 0,
        greenSalsa: 0,
        largeHorchata: 0,
        smallHorchata: 0,
        coca: 0,
        sprite: 0,
        fanta: 0,
        allVerdurasPrice: 0,

      })
    };

    async function firstFunction(){
      handleClose();
      alert("Gracias por su orden!");
      };

    async function secondFunction(){
      navigate("/")
      };

      const [showModel, setshowModel] = useState("modal");
      const openModal = (e)=>{e.preventDefault(); setshowModel("modal is-active")};
      const handleClose = ()=>{setshowModel("modal")}

  const handleSubmit= (e)=> {
    e.preventDefault();
API.saveOrden(orderData).then((response)=>{
  firstFunction()
  setTimeout(() => {secondFunction()}, 1500);
  resetState()

}).catch((err) =>{console.log(err)});};
                                                                                                                    
 return (<><form>
          <main className="box is-shadowless is-align-self-center">
          <section className="card">

                <article className="card-content">
                <aside className="m-3 content" >
                <div className="container mt-3">
                <figcaption>   
                <h5 style={{textAlign: "center", background: "lightyellow"}} > <strong>Tacos</strong></h5>
                </figcaption>

 <div className="is-align-content-center columns mt-3">
    <NameField
    name= "nombreDeOrden"
    value= {orderData.nombreDeOrden}
    onChange={NameHandleChange}
    />

    <DropDownField 
    tagg = "Azada"
    name = "azada"
    value= {orderData.azada}
    onChange= {tacoNdrinksHandleChange}
   
    />
  <DropDownField 
    tagg = "Pollo"
    name = "pollo"
    value= {orderData.pollo}
    onChange= {tacoNdrinksHandleChange}
    />
      <DropDownField 
    tagg = "Barbacoa"
    />
      <DropDownField 
    tagg = "Pastor"
    />
      <DropDownField 
    tagg = "Chorizo"
    />
</div>
<hr></hr>

    <figcaption>   
    <h5 style={{textAlign: "center", background: "lightyellow"}} > <strong>Bebidas</strong></h5>
    </figcaption>
    <div className="columns mt-3">

    <DropDownField 
    tagg = "Horchata Grande"
    name = "largeHorchata"
    value= {orderData.largeHorchata}
    onChange= {tacoNdrinksHandleChange}
   
    />
  <DropDownField 
   tagg= "Pequena Horchata"
    name = "smallHorchata"
    value= {orderData.smallHorchata}
    onChange= {tacoNdrinksHandleChange}
    />
      <DropDownField 
    tagg = "Coca Cola"
    name = "coca"
    value= {orderData.coca}
    onChange= {tacoNdrinksHandleChange}
    />
      <DropDownField 
    tagg = "Sprite"
    name = "sprite"
    value= {orderData.sprite}
    onChange= {tacoNdrinksHandleChange}
    />
      <DropDownField 
    tagg = "Fanta"
    name = "fanta"
    value= {orderData.fanta}
    onChange= {tacoNdrinksHandleChange}
    />
 
      </div>
  </div>
  <hr></hr>
<div className="container mt-3">
    <figcaption>   
    <h5 style={{textAlign: "center", background: "lightyellow"}} > <strong>Porciones Extras</strong></h5>
    </figcaption>

    <ToppingField
 subtitle= "Cebolla"
 picture = "../images/onions.png"
 name="cebolla"
 value={orderData.cebolla}
 topingCount = {orderData.cebolla}
 sumar= {cebollaIncrement}
 restar= {cebollaDecrement}
 /> 

 <ToppingField
 subtitle= "Cilantro"
 name="cilantro"
 picture = "../images/cilantro.png"
 topingCount = {orderData.cilantro}
 value={orderData.cilantro}
 sumar= {cilantroIncrement}
 restar= {cilantroDecrement}
 /> 
            
<ToppingField
 subtitle= "Pico"
 name="pico"
 picture = "../images/pico.png"
 topingCount = {orderData.pico}
 value={orderData.pico}
 sumar= {picoIncrement}
 restar= {picoDecrement}
 /> 

<ToppingField
 subtitle= "Green/Verde Salsa"
 name="greenSalsa"
 picture = "../images/greenSalsa.png"
 topingCount = {orderData.greenSalsa}
 value={orderData.greenSalsa}
 sumar= {greenSalsaIncrement}
 restar= {greenSalsaDecrement}
 /> 

<ToppingField
 subtitle= "Red/Roja Salsa"
 name="redSalsa"
 picture = "../images/redSalsa.png"
 topingCount = {orderData.redSalsa}
 value={orderData.greenSalsa}
 sumar= {redSalsaIncrement}
 restar= {redSalsaDecrement}
 /> 
  </div>   

            </aside>
            </article>
      <aside id="modalll" className={`${showModel}`}>
              <div className="modal-background"></div>
              <div className="modal-content ">
                <div className="box is-mobile">
                  <div style={{fontSize: "30px", fontWeight: "bold"}}>Esta Bien Su Orden?</div>
                  <div style={{fontSize: "35px"}}> {orderData.nombreDeOrden}</div>
                  <div style={{fontSize: "25px"}}> Azada: {orderData.azada}</div>
                  <div style={{fontSize: "25px"}}> Pollo: {orderData.pollo}</div>
                  <div style={{fontSize: "25px"}}>Barbacoa: {orderData.barbacoa}</div>
                  <div style={{fontSize: "25px"}}> Pastor: {orderData.pastor}</div>
                  <div style={{fontSize: "25px"}}>Chorizo: {orderData.chorizo}</div>
                  <div style={{fontSize: "25px"}}>Cebolla: {orderData.cebolla}</div>
                  <div style={{fontSize: "25px"}}> Cilantro: {orderData.cilantro}</div>
                  <div style={{fontSize: "25px"}}> Pico De Gallo: {orderData.pico}</div>
                  <div style={{fontSize: "25px"}}> Salsa Roja: {orderData.redSalsa}</div>
                  <div style={{fontSize: "25px"}}> Salsa Verde: {orderData.greenSalsa}</div>
                  <div style={{fontSize: "30px", fontWeight: "bold"}}>Bebidas</div>
            
                  <div style={{fontSize: "25px"}}> Horchata Grande: {orderData.largeHorchata}</div>
                  <div style={{fontSize: "25px"}}> Horchata PequeNa: {orderData.smallHorchata}</div>
                  <div style={{fontSize: "25px"}}> Coca Cola: {orderData.coca}</div>
                  <div style={{fontSize: "25px"}}> Sprite: {orderData.sprite}</div>
                  <div style={{fontSize: "25px"}}> Fanta: {orderData.fanta}</div>
                  <hr></hr>
                  <button onClick={handleClose} type="button "  className="button is-medium is-dark" >Cancelar</button>
                <br></br>
                <br></br>
                <button style={{fontSize: "25px"}} type="button " onClick={handleSubmit} className="button is-medium  is-primary is-light"><strong>Continuar</strong></button>
                </div>
              </div>
              <button onClick={handleClose}  type="button" className="modal-close is-large" aria-label="close"></button>
          </aside> 
         
          <footer className="card-footer">
                  <div className="card-footer-item">
                  <span>
                  <button  id="modalButton" onClick={openModal} className="button is-medium is-success is-light" data-target="modal-js-example">
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
 </form> </>);
  }
export default OrdenBox;

      