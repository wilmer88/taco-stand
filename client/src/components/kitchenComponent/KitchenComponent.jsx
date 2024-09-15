import {  useNavigate } from "react-router-dom";
import API from "../../utils/API";


const KitchenComponent =  (props) => {
  console.count("i rerenderd in kitchenComponent");


const liestilo = {
  atras: {
    background: "lightyellow"
  }
 };
  const navigate =  useNavigate();

  function eliminar(id){
    console.log(id)
      API.deleteOrden(id).then((res) => {
 console.log(res.data);
        navigate("/");
      }).catch((err) =>{ 
        console.log(err)
      });
  };

    function editarOrden(id) {
    console.log(id);
    navigate(`/orden/${id}`);
    
  };

  function pagarOrden(id) {
    console.log(id);
    navigate(`/payment/${id}`);
    
  };

  let aguasNsodas = props.canDrinkVirtual + props.aguasVirtual;
  let linePrice = props.tacosVirtual + props.canDrinkVirtual + props.topingVirtual + props.aguasVirtual;
  let tacosTofix = props.tacosVirtual;
  let fixTopings = props.topingVirtual;
  let disableVar = false;
  if(props.pagado === true){disableVar = true};

    return (<>
    
        <div className="columns is-mobile mb-6 ">
  <div className="column is-1"></div>
  <div className="column is-narrow-mobile mb-6">
  <hr></hr>
  <div className="card is-flex-align-items  ">
<header is-family-monospace="true" style={liestilo.atras} className="card-header">
  <div  className="card-header-title is-family-monospace is-size-4">
    {/* change data */}
name: {props.nombreDeOrden}
 </div>
</header>
<div className="card-content is-mobile ">
  <div className="table-container">
  <table className="table" >
   <tbody >
   <tr >
   {/* {props.combos !== 0 && (<th >Combos</th>)} */}

    {props.azada !== 0 && (<th >Azada</th>)}
    {props.pollo !== 0 && (<th>Pollo</th>)}
    {props.barbacoa !== 0 && (<th>Barbacoa</th>)}
    {props.pastor !== 0 && (<th>Pastor</th>)}
    {props.chorizo !== 0 && (<th>Chorizo</th>)}
</tr>
</tbody>
<tbody  >
<tr  >
{/* {props.combo !== 0 && (props.combo.combo.map((kitchencomboOrder)=>(<td>{kitchencomboOrder}</td>)))} */}

{props.azada !== 0 && (<td>{props.azada}</td>)}
{props.pollo !== 0 && (<td>{props.pollo}</td>)}
{props.barbacoa !== 0 && (<td>{props.barbacoa}</td>)}
{props.pastor !== 0 && (<td>{props.pastor}</td>)}
{props.chorizo !== 0 && (<td>{props.chorizo}</td>)}

</tr>  
</tbody>
</table>
<table className="table">
   <tbody  >
   <tr >
   {props.largeHorchata !== 0 && (<th>G/Large <br></br>Horchata</th>)}
   {props.smallHorchata !== 0 && (<th>P/Small <br></br>Horchata</th>)}
   {props.coca !== 0 && ( <th>Coca</th>)}
   {props.sprite !== 0 && (<th>Sprite</th>)}
   {props.fanta !== 0 && (<th>Fanta</th>)}
            
</tr>
</tbody>
<tbody>
<tr>
{props.largeHorchata !== 0 && (<td>{props.largeHorchata}</td>)}
{props.smallHorchata !== 0 && (<td>{props.smallHorchata}</td>)}
{props.coca !== 0 && (<td>{props.coca}</td>)}
{props.sprite !== 0 && (<td>{props.sprite}</td>)}
{props.fanta !== 0 && (<td>{props.fanta}</td>)}

</tr>  
</tbody>
</table>
<table className="table">
   <tbody  >
   <tr >
   {props.cebolla !== 0 && (<th>Extra <br></br>Cebolla</th>)}
   {props.cilantro !== 0 && (<th>Extra<br></br>Cilantro</th>)}
   {props.pico !== 0 && (<th>Extra<br></br>Pico</th>)}
   {props.greenSalsa !== 0 && ( <th>Verde/Green<br></br>Salsa</th>)}
   {props.redSalsa !== 0 && (<th>Roja/red<br></br>Salsa</th>)}
</tr>
</tbody>
<tbody>
<tr>
{props.cebolla !== 0 && (<td>{props.cebolla}</td>)}
{props.cilantro !== 0 && (<td>{props.cilantro}</td>)}
{props.pico !== 0 && (<td>{props.pico}</td>)}
{props.greenSalsa !== 0 && (<td>{props.greenSalsa}</td>)}
{props.redSalsa !== 0 && (<td>{props.redSalsa}</td>)}
</tr>  
</tbody>
</table>

  </div>

    <br></br>
      <form id="liOrder">
    <div htmlFor="liOrder" style={liestilo.atras} className="label" >Tacos: <span>{tacosTofix?.toFixed(2)}</span> </div>
    <div htmlFor="liOrder" style={liestilo.atras} className="label">Bebidas/drinks: $<span>{aguasNsodas?.toFixed(2)}</span> </div>
    <div htmlFor="liOrder" style={liestilo.atras} className="label">Extra Porciones/Toppings: $<span>{fixTopings?.toFixed(2)}</span> </div>
  <div htmlFor="liOrder" style={liestilo.atras} className="label">Precio/ Total: $<span>{linePrice?.toFixed(2)}</span> </div>
  <div htmlFor="liOrder" style={liestilo.atras} className="label">Pagado/ Paid: {String(props.pagado)} </div>
  </form>
    <time dateTime="2016-1-1">{props.timeCreated}</time>
 
</div>
<footer className="card-footer">
 <div className="card-footer-item"> <button className="button is-danger is-light" onClick={()=> eliminar(props._id)}>cancelar</button></div>
  <div className="card-footer-item"> <button className="button is-success is-light" onClick={()=> editarOrden(props._id)}>editar</button></div>

  <div className="card-footer-item"> <button className="button  is-info"  onClick={()=> pagarOrden(props._id)} disabled={disableVar}>pagar/pay</button></div>
</footer>
</div>
  </div>
  <div className="column is-1"></div>
  </div>


    </>);
  };
  
  export default KitchenComponent;



