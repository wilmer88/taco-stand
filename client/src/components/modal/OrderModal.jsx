import { useState} from "react";
import API from "../../utils/API";
import { useContext, useEffect } from "react";
import alertContext from "../../context/alertContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import OrderContext from "../../context/orderDataContext";
import ComboContext from "../../context/ComboContext";
import {io} from "socket.io-client";
const IS_PROD = process.env.NODE_ENV === "production";
const URL = IS_PROD ? "https://taco-stand.herokuapp.com/" : "http://localhost:3001";
const socket = io(URL);

const OrderModel = ()=>{

  const orderDataLet= useContext( OrderContext);
  const combo = useContext(ComboContext);
  const [combomodal, setCombomoadal]= useState([])
    const [showModel, setshowModel] = useState("modal");
    const navigate = useNavigate();
    const { setAlert } = useContext(alertContext);


    const finalOrderHolder= {
      nombreDeOrden: orderDataLet.nombreDeOrden,
      phoneNumber:"",
      tableNumber:"",
      combo:combomodal,
      azada: orderDataLet.azada,
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
    // console.log(finalOrderHolder);
    // console.log(combo.combo);
    // console.log(finalOrderHolder.combo);





  async function secondFunction() {navigate("/")};
  
  const openModal = () => {
    setCombomoadal(combo.combo)
    // console.log(finalOrderHolder.combo);
  



     setshowModel("modal is-active");
    // setCombo1(comboT);
    // setOrderData(ordenObj);   
    // console.log(ordenObj);
    // console.log(orderHolder);
    // if(orderData.nombreDeOrden===""|| orderData.combo.comboPrice !== 0 || orderData[0].combo.choice1 !== ""){alert("must fill required fields")};
    // if( combo.choice1 !== ""){ setOrderData(ordenObj);  setshowModel("modal is-active");};
    // console.log(finalOrder);
  };

  const handleClose = () => { setshowModel("modal") };

  async function firstFunction(e) {
    console.log(finalOrderHolder)
    handleClose();
    alert("thanks for your order/ Gracias por su orden!");
  };

  // console.log(orderDataLet)
  const handleSubmit = (e) => {
    

    API.create(finalOrderHolder).then((response) => {
      socket.emit("rs", response.data);
      firstFunction();
      console.log(response);
      setTimeout(() => { secondFunction() }, 2000);
      setAlert({ message: "You successfully placed order!", type: "is-success" });
      // console.log(response);   
      // resetState()
      // API.allOrdens().then((response) => {
      //   // console.log(response.data)
      //   // socket.emit("rs", response.data);
      // });
    })
    .catch((err) => { console.log(err) })
  };

  // async function resetState() {setOrderDataContext({
  //   nombreDeOrden: "",
  //   phoneNumber:"",
  //   tableNumber:"",
  //   combo: [
  //           {
  //     choicePrice:0,
  //     comboId:0,
  //     supreme: false,
  //     choice1:"",
  //     choice2:"",
  //     choice3:"",
  //     key:"",
  //   }

  //   ],

  //   azada: 0,
  //   pollo: 0,
  //   barbacoa: 0,
  //   pastor: 0,
  //   chorizo: 0,
  //   cebolla: 0,
  //   cilantro: 0,
  //   pico: 0,
  //   redSalsa: 0,
  //   greenSalsa: 0,
  //   largeHorchata: 0,
  //   smallHorchata: 0,
  //   coca: 0,
  //   sprite: 0,
  //   fanta: 0,
  //   allVerdurasPrice: 0,
  // })};
  // console.log(finalOrderHolder);
  // console.log(combo);

  // useEffect(()=>{

  //   // setComboHolder((prev)=> prev + combo[0]);
  //   // console.log(comboHolder);
  //   // // comboHolder.map(comboMap=> setComboHolder(comboMap));
  //   // // setComboHolder(combo[0].value);
  //   // // setLastFinalOrder(finalOrder);
  //   // // console.log(comboHolder);
  //   // console.log(combo);
  //   // console.log(orderDataLet);
  //   // console.log(finalOrder)
    
  // },[combo,orderDataLet]);
  // console.log(combo.combo.length);
    // console.log(finalOrderHolder.combo);

    return(<>
  

<aside id="modalll" className={`${showModel}`}>
          <div className="modal-background"></div>
          <div className="modal-content ">
            <div className="box is-mobile">

              <div style={{ fontSize: "30px", fontWeight: "bold" }}>Is this correct?
                {orderDataLet.nombreDeOrden !== 0 && (<div >{orderDataLet.nombreDeOrden}</div>)}
                </div><hr></hr>
                 {combo.combo[0].comboPrice !== "0" ?   ( combo.combo.map((comboParam )=>(<div key={comboParam.comboId } style={{ fontSize: "25px", textAlign: "left" }}>combo#{comboParam.comboId }: {comboParam.choice1}, {comboParam.choice2}, {comboParam.choice3}</div>))     ):
                  <div >no Combos</div>  
                  //  {if(combpPrice.value !== "0"){}}
                   }
              {orderDataLet.azada !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Azada: {orderDataLet.azada}</div>)}
              {/* {orderData.pollo !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Pollo: {orderData.pollo}</div>)} */}
              {/* {orderData.barbacoa !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}>Barbacoa: {orderData.barbacoa}</div>)} */}
              {/* {orderData.pastor !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Pastor: {orderData.pastor}</div>)} */}
              {/* {orderData.chorizo !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}>Chorizo: {orderData.chorizo}</div>)} */}

              {/* {orderData.largeHorchata !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Horchata/Large Grande: {orderData.largeHorchata}</div>)} */}
              {/* {orderData.smallHorchata !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Horchata PequeNa: {orderData.smallHorchata}</div>)} */}
              {/* {orderData.coca !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Coca Cola: {orderData.coca}</div>)} */}
              {/* {orderData.sprite !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Sprite: {orderData.sprite}</div>)} */}
              {/* {orderData.fanta !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Fanta: {orderData.fanta}</div>)} */}

              {/* {orderData.cebolla !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}>Cebolla: {orderData.cebolla}</div>)} */}
              {/* {orderData.cilantro !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}>Cilantro: {orderData.cilantro}</div>)} */}
              {/* {orderData.pico !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Pico De Gallo: {orderData.pico}</div>)} */}
              {/* {orderData.redSalsa !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Salsa Roja: {orderData.redSalsa}</div>)} */}
              {/* {orderData.greenSalsa !== 0 && (<div style={{ fontSize: "25px", textAlign: "left" }}> Salsa Verde: {orderData.greenSalsa}</div>)} */}
              <hr></hr>
              <button onClick={handleClose} type="button" className="button is-medium is-dark" >Update Order</button>
              <br></br>
              <br></br>
              <button style={{ fontSize: "25px" }} type="button" onClick={handleSubmit} className="button is-medium  is-primary is-light"><strong>Place Order</strong></button>
            </div>
          </div>
          <button onClick={handleClose} type="button" className="modal-close is-large" aria-label="close"></button>
        </aside>

        <footer className="card-footer">
          <div className="card-footer-item">
            <span>
              <button id="modalButton" onClick={openModal} className="button is-medium is-success is-light" data-target="modal-js-example">
                <strong>Checkout</strong>
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
    
    
    </>)


};

export default OrderModel;