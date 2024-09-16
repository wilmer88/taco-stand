import { useState, useContext, useEffect} from "react";
import API from "../../utils/API";
import alertContext from "../../context/alertContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import OrderDataContext from "../../context/orderDataContext";
import {io} from "socket.io-client";

const IS_PROD = process.env.NODE_ENV === "production";
const URL = IS_PROD ? "https://taco-stand.herokuapp.com/" : "http://localhost:3001";
const socket = io(URL);

const CheckOutPage = ()=>{
 
  
    const {OrderContextObj, setOrderDataContext} = useContext(OrderDataContext);
    const { setAlert } = useContext(alertContext);
    const navigate = useNavigate();
    const burrototal = OrderContextObj.burritos.reduce((daTotal,aBurrito) => 
      daTotal + (aBurrito.price || 0),0
    );
    const dipTotal=  OrderContextObj.dips.reduce((added_dips,adipOrder)=>
      added_dips + (adipOrder.price || 0),0
    );
    const comboTotal = OrderContextObj.combo[0]?.price || 0;
    const allTotal= burrototal + dipTotal + comboTotal

    const [finalOrderHolder, setFinalOrder]= useState({
        nombreDeOrden: OrderContextObj.nombreDeOrden,
        phoneNumber:OrderContextObj.phoneNumber,
        tableNumber:"",
        burritos:[],
        combo:[],
        dips:OrderContextObj.dips,
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
      });

      // async function firstFunction(){alert("thanks for your order/ Gracias por su orden!");};

        async function secondFunction(){navigate("/"); };

  const handleCheckoutSubmit = (e) => {

    if(OrderContextObj.nombreDeOrden && OrderContextObj.phoneNumber !==""){

      API.create(finalOrderHolder).then((response) => {
        setOrderDataContext({
          nombreDeOrden: "",
          phoneNumber:"",
          tableNumber:"",
          burritos:[],
          combo:[],
          dips:OrderContextObj.dips,
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
        });     
        setFinalOrder({
          nombreDeOrden: "",
          phoneNumber:"",
          tableNumber:"",
          burritos:[],
          combo:[],
          dips:OrderContextObj.dips,
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
        });
  
        setAlert({ message: "You successfully placed order!", type: "is-success" });
  
        API.allOrdens().then((response)=>{
          // console.log(response.data)
          socket.emit("rs", response.data);
        })
        secondFunction();
      })

      .catch((err) => { console.log(err) });   
    } else{

      alert("name and phone number must be included with orders");
      navigate("/orden")

    }
  };

 
  useEffect(()=>{

  },[OrderContextObj])

  

    return(
        <aside id="checkout">
          {/* <div></div> */}
          <div className="container">
            <div className="box is-mobile">
            <div style={{ fontSize: "30px", fontWeight: "bold" }}>

                {OrderContextObj.nombreDeOrden !=="" && (<div >{OrderContextObj.nombreDeOrden }'s Order</div>)}

                </div>

                <hr></hr>

                {OrderContextObj.combo?.length > 0  ?  ( 
                  OrderContextObj.combo?.map((comboParam, index) =>(
            <div key={index } style={{ fontSize: "25px", textAlign: "left" }}>
              combo#{comboParam.comboId }: {comboParam.choice1}, {comboParam.choice2 || 0}
            </div>))) : <div></div>}
    
              {OrderContextObj.dips.length > 0  ?( OrderContextObj.dips.map((dipOrder)=>{let thedipOrder =dipOrder
              return(<div className="container" style={{ fontSize: "18px", textAlign: "left" }} key={dipOrder.id}> <ul>  {thedipOrder.size} {thedipOrder.dipname}: ${thedipOrder.price}ea  QTY:{thedipOrder.quantity} </ul>
               <Link to="/dips">
               <button  type="button"  className="button is-small  is-dark is-light"><strong>Edit Dips</strong></button>
               </Link>
                            </div>)
              })): <div ></div>}

             {OrderContextObj.burritos.length > 0  ?( OrderContextObj.burritos.map((dipOrder)=>{let thedipOrder =dipOrder
              return(<div className="container" style={{ fontSize: "18px", textAlign: "left" }} key={thedipOrder.burritosOrderId}> <ul>{thedipOrder.burritosOrderName}: ea  </ul>
               <Link to="/burritopage">
               <button  type="button"  className="button is-small  is-dark is-light"><strong>Edit Burritos</strong></button>
               </Link>
                            </div>)
              })): <div ></div>}
              
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
             
             { allTotal !== 0 && <div style={{ fontSize: "18px", textAlign: "left" }}> Total: ${allTotal?.toFixed(2)}</div> }
             { allTotal === 0 && <div style={{ fontSize: "18px", textAlign: "left" }}> Food Bag empty</div> }


 
              {/* <button onClick={handleClose} type="button" className="button is-medium is-dark" >Update Order</button> */}
              <br></br>
              <br></br>
             {allTotal !== 0 && <button style={{ fontSize: "18px" }} type="button" onClick={handleCheckoutSubmit} className="button is-medium  is-primary is-light"><strong>Place Order</strong></button>}
            </div>
          </div>
          {/* <button onClick={handleClose} type="button" className="modal-close is-large" aria-label="close"></button> */}
        </aside>

        

        // <OrderModel/>


    )
}

export default CheckOutPage