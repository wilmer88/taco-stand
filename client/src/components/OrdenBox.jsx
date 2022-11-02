import ToppingField from "./ToppingField";
import NameField from "./NameField";
import DropDownField from "./DropDownField";
import API from "../utils/API";
import React from "react";
import { Link} from "react-router-dom";
import {useState} from "react";
// import TopingsBlock from "./TopingsBlock";
// import TacoBlockContext from "../utils/TacoContext";
// import { useNavigate } from "react-router-dom";
const OrdenBox = () => {

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

  const  NameHandleChange = event => {
    const {name, value} = event.target;
    setOrderData({...orderData, [name]:value })
   };

   const  tacoHandleChange = (event) => {
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
      handleClose()
    
      };

    async function secondFunction(){
      alert("Gracias por su orden!")
      // window.location.reload(false)
      };

      const [showModel, setshowModel] = useState("modal");
      const openModal = (e)=>{e.preventDefault(); setshowModel("modal is-active")};
      const handleClose = (e)=>{e.preventDefault(); setshowModel("modal")}

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
    onChange= {tacoHandleChange}
   
    />
  <DropDownField 
    tagg = "Pollo"
    name = "pollo"
    value= {orderData.pollo}
    onChange= {tacoHandleChange}
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
    onChange= {tacoHandleChange}
   
    />
  <DropDownField 
   tagg= "Pequena Horchata"
    name = "smallHorchata"
    value= {orderData.smallHorchata}
    onChange= {tacoHandleChange}
    />
      <DropDownField 
    tagg = "Coca Cola"
    />
      <DropDownField 
    tagg = "Sprite"
    />
      <DropDownField 
    tagg = "Fanta"
    />
 
      </div>
  </div>
  <hr></hr>
<div className="container mt-3">
    <figcaption>   
    <h5 style={{textAlign: "center", background: "lightyellow"}} > <strong>Porciones Extras</strong></h5>
    </figcaption>

    <ToppingField
 topingName = "Cebolla"
 subtitle= "Cebolla"
 picture = "../images/onions.png"
 name="cebolla"
 value={orderData.cebolla}
 topingCount = {orderData.cebolla}
 sumar= {cebollaIncrement}
 restar= {cebollaDecrement}
 /> 

 <ToppingField
 topingName = "Cilantro"
 subtitle= "Cilantro"
 picture = "../images/cilantro.png"
 topingCount = {orderData.cilantro}
 value={orderData.cilantro}
 sumar= {cilantroIncrement}
 restar= {cilantroDecrement}
 /> 
            
{/* <ToppingField
 topingName = "Cebolla"
 picture = "../images/onions.png"
 topingCount = {orderData.cebolla}
 sumar= {cebollaIncrement}
 restar= {cebollaDecrement}
 />  */}

{/* <ToppingField
 topingName = "Cilantro"
 picture = "../images/cilantro.png"
 topingCount = {orderData.cilantro}
 sumar= {cilantroIncrement}
 restar={cilantroDecrement}
 />  */}
  </div>   

            </aside>
            </article>
      <aside id="modalll" className={`${showModel}`}>
              <div className="modal-background"></div>
              <div className="modal-content ">
                <div className="box is-mobile">
                  <div style={{fontSize: "35px", fontWeight: "bold"}}>Esta Bien Su Orden?</div>
                  <div style={{fontSize: "25px"}}> Nombre: {orderData.nombreDeOrden}</div>
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
                  <div style={{fontSize: "25px"}}> Horchata Grande: {orderData.largeHorchata}</div>
                  <div style={{fontSize: "25px"}}> Horchata PequeNa: {orderData.smallHorchata}</div>
                  <div style={{fontSize: "25px"}}> Coca Cola: {orderData.coca}</div>
                  <div style={{fontSize: "25px"}}> Sprite: {orderData.sprite}</div>
                  <div style={{fontSize: "25px"}}> Fanta: {orderData.fanta}</div>

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

      