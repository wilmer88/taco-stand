// import axios from "axios";
import {useNavigate} from "react-router-dom"


const liestilo = {
  atras: {
    background: "lightyellow"
  }
  
 }
  //  changed props to hooks
function LiComponent (props) {
  const navigate = useNavigate()

  //  function deleteOrder(id){
  //   console.log(id)
  //     axios.delete("/api/orden/" +  id).then((response) => {
  //      console.log(response.data)
  //       window.location.reload()
  //    })
  // };


  function editarOrden(id) {
    console.log(id)

      navigate(`/orden/${id}`)


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
  Nombre:  <span><strong>{props.nombreDeOrden}</strong>  </span> 
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
    <th>chorizo</th>
    <th>barbacoa</th>

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
   {/* <div className="card-footer-item"> <button className="button is-danger is-light" onClick={()=> deleteOrder(props._id)}>cancelar</button></div> */}
    <div className="card-footer-item"> <button className="button is-success is-light" onClick={()=> editarOrden(props._id)}>editar</button></div>

   
  </footer>
</div>


  </div>
  <div className="column is-3"></div>
</div>
    </>)
  }
  
  export default LiComponent;





