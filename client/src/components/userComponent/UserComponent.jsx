// import { useNavigate } from "react-router-dom";
// import API from "../../utils/API";


const UserComponent =  (props) => {

const liestilo = {
  atras: {
    background: "lightyellow"
  }
 };
  // const navigate =  useNavigate();

//   function eliminar(id){
//     console.log(id)
//       API.deleteOrden(id).then((res) => {
//  console.log(res.data);
//         navigate("/");
//       }).catch((err) =>{ 
//         console.log(err)
//       });
//   };

  //   function editarOrden(id) {
  //   console.log(id);
  //   // navigate(`/orden/${id}`);
    
  // };

  // function pagarOrden(id) {
  //   console.log(id);
  //   navigate(`/payment/${id}`);
    
  // };

  // let aguasNsodas = props.canDrinkVirtual + props.aguasVirtual;
  // let linePrice = props.tacosVirtual + props.canDrinkVirtual + props.topingVirtual + props.aguasVirtual;
  // let tacosTofix = props.tacosVirtual;
  // let fixTopings = props.topingVirtual;
  // let disableVar = false;
  // if(props.pagado === true){disableVar = true};

    return (<>
        <div className="columns is-mobile mb-6 ">
  <div className="column is-1"></div>
  <div className="column is-narrow-mobile mb-6">
  <hr></hr>
  <div className="card is-flex-align-items  ">
<header is-family-monospace="true" style={liestilo.atras} className="card-header">
  <div  className="card-header-title is-family-monospace is-size-4">
    {/* change data */}
Nombre: {props.nombreDeOrden}

 </div>
</header>
<div className="card-content is-mobile ">
  <div className="table-container">
  


  </div>

    <br></br>

    {/* <label style={liestilo.atras} className="label">Tacos: <span>{tacosTofix?.toFixed(2)}</span> </label>
    <label style={liestilo.atras} className="label">Bebidas/drinks: $<span>{aguasNsodas?.toFixed(2)}</span> </label>
    <label style={liestilo.atras} className="label">Extra Porciones/Toppings: $<span>{fixTopings?.toFixed(2)}</span> </label>
  <label style={liestilo.atras} className="label">Precio/ Total: $<span>{linePrice?.toFixed(2)}</span> </label>
  <label style={liestilo.atras} className="label">Pagado/ Paid: {String(props.pagado)} </label> */}

    <time dateTime="2016-1-1">{props.timeCreated}</time>
 
</div>
<footer className="card-footer">
 {/* <div className="card-footer-item"> <button className="button is-danger is-light" onClick={()=> eliminar(props._id)}>cancelar</button></div>
  <div className="card-footer-item"> <button className="button is-success is-light" onClick={()=> editarOrden(props._id)}>editar</button></div> */}

  {/* <div className="card-footer-item"> <button className="button  is-info"  onClick={()=> pagarOrden(props._id)} disabled={disableVar}>pagar/pay</button></div> */}
</footer>
</div>
  </div>
  <div className="column is-1"></div>
  </div>

    </>);
  };
  
  export default UserComponent;





