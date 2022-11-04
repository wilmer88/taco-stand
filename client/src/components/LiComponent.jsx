import { useNavigate } from "react-router-dom";
import API from "../utils/API";

const LiComponent =  (props) => {

const liestilo = {
  atras: {
    background: "lightyellow"
  },
  letras: {
     font: {

     }
    }
 };
  const navigate = useNavigate()

  function eliminar(id){
    console.log(id)
      API.deleteOrden(id).then((res) => {
 console.log(res.data)
        navigate("/")
      }).catch((err) =>{ 
        console.log(err)
      });
  };

    function editarOrden(id) {
    console.log(id)
    navigate(`/orden/${id}`)
    
  }

  function pagarOrden(id) {
    console.log(id)
    navigate(`/payment/${id}`)
    
  }

  let aguasNsodas = props.canDrinkVirtual + props.aguasVirtual
  let linePrice = props.tacosVirtual + props.canDrinkVirtual + props.topingVirtual + props.aguasVirtual
  let tacosTofix = props.tacosVirtual
  let fixTopings = props.topingVirtual

    return (<>
        <div className="columns is-mobile ">
  <div className="column is-1"></div>
  <div className="column is-narrow-mobile">
  <hr></hr>
  <div className="card is-flex-align-items  ">
<header is-family-monospace="true" style={liestilo.atras} className="card-header">
  <div  className="card-header-title is-family-monospace is-size-4">
    {/* change data */}
Nombre: {props.nombreDeOrden}
 </div>
</header>
<div className="card-content is-mobile ">
  <div className="content is-mobile ">


  <div className="table-container">
  <table className="table">
   <tbody  >
   <tr >
 <th>Azada</th>
 <th>Pollo</th>
 <th>pastor</th>
 <th>barbacoa</th>
 <th>chorizo</th>
</tr>
</tbody>
<tbody>
<tr>
<td>{props.azada}</td>
 <td>{props.pollo}</td>
 <td>{props.pastor}</td>
 <td>{props.barbacoa}</td>
 <td>{props.chorizo}</td>
</tr>  
</tbody>
</table>
<table className="table">
   <tbody  >
   <tr >
   <th>G/Large <br></br>Horchata</th>
            <th>P/Small <br></br>Horchata</th>
            <th>Coca</th>
            <th>Sprite</th>
            <th>Fanta</th>
</tr>
</tbody>
<tbody>
<tr>
<td>{props.largeHorchata}</td>
 <td>{props.smallHorchata}</td>
 <td>{props.coca}</td>
 <td>{props.sprite}</td>
 <td>{props.fanta}</td>
</tr>  
</tbody>
</table>
<table className="table">
   <tbody  >
   <tr >
   <th>Extra <br></br>Cebolla</th>
            <th>Extra<br></br>Cilantro</th>
            <th>Extra<br></br>Pico</th>

            <th>Verde/Green<br></br>Salsa</th>

            <th>Roja/red<br></br>Salsa</th>

</tr>
</tbody>
<tbody>
<tr>
 <td>{props.cebolla}</td>
 <td>{props.cilantro}</td>
 <td>{props.pico}</td>
 <td>{props.greenSalsa}</td>
 <td>{props.redSalsa}</td>
</tr>  
</tbody>
</table>

  </div>
  



    <br></br>

 

    <label style={liestilo.atras} className="label">Tacos: <span>{tacosTofix?.toFixed(2)}</span> </label>
    <label style={liestilo.atras} className="label">Bebidas/drinks: <span>{aguasNsodas?.toFixed(2)}</span> </label>
    <label style={liestilo.atras} className="label">Extra Porciones/Toppings: <span>{fixTopings?.toFixed(2)}</span> </label>


  <label style={liestilo.atras} className="label">Precio/ Total: $<span>{linePrice}</span> </label>


    <time dateTime="2016-1-1">{props.tiempo}</time>
  </div>
</div>
<footer className="card-footer">
 <div className="card-footer-item"> <button className="button is-danger is-light" onClick={()=> eliminar(props._id)}>cancelar</button></div>
  <div className="card-footer-item"> <button className="button is-success is-light" onClick={()=> editarOrden(props._id)}>editar</button></div>
  <div className="card-footer-item"> <button className="button  is-info" onClick={()=> pagarOrden(props._id)}>pagar/pay</button></div>
</footer>
</div>
  </div>
  <div className="column is-1"></div>
  </div>



    </>)
  }
  
  export default LiComponent;





