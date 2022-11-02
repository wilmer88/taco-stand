// import axios from "axios";
import { useNavigate } from "react-router-dom";
import API from "../utils/API"
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

    return (<>
    <div className="columns is-mobile">
  <div className="column is-1"></div>
  <div className="column is-narrow-mobile">

  <hr></hr>
    <div className="card">
  <header is-family-monospace="true" style={liestilo.atras} className="card-header">
    <div  className="card-header-title is-family-monospace is-size-4">
      {/* change data */}
  Nombre: {props.nombreDeOrden}
   </div>
  
  </header>
  <div className="card-content">
    <div className="content">
    <table>
      <tbody>
      <tr>
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

      <br></br>
      <label style={liestilo.atras} className="label">Tacos: <span>{props.total}</span> </label>
    <label style={liestilo.atras} className="label">Precio Total:$<span>{props.precio}.00</span> </label>

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
  <div className="column is-3"></div>
</div>
    </>)
  }
  
  export default LiComponent;





