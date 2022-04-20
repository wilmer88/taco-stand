import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import API from "../utils/API";
import OrdenLevel from "../components/OrdenLevel";
import Footer from "../components/Footer";
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,]

const liestilo = {
  atras: {
    background: "lightyellow"
  },
  letras: {
    font: {

    }
  }
}
const Editar = () => {
  const { ordenId } = useParams();
  const navigate = useNavigate()
  const [formObj, setFormObj] = useState({
    nombreDeOrden:"",
    azada: 0,
    pollo: 0,
    pastor: 0,
    barbacoa: 0,
    chorizo: 0,
    total: 0,
    precio: 0,
  })
  useEffect(() => {
    API.getOrden(ordenId).then((response) => {
      
       setFormObj(response.data)
     
     })
   }, [ordenId])



  function handleChangeI(e) {
    const { name, value } = e.target;

    setFormObj({ ...formObj, [name]: value })

  };

  function handleSubmit(e) {
    e.preventDefault(e);
    setTimeout(() => {  formObj.total = parseInt(formObj.azada) +  parseInt(formObj.pollo) + parseInt(formObj.pastor) + parseInt(formObj.chorizo) + parseInt(formObj.barbacoa);
      formObj.precio = parseInt(formObj.total) * 3;}, 1000);

 
  setTimeout(() => { API.putOrden(ordenId, {
    nombreDeOrden: formObj.nombreDeOrden,
    azada: formObj.azada,
    pollo: formObj.pollo,
    barbacoa: formObj.barbacoa,
    pastor: formObj.pastor,
    chorizo: formObj.chorizo,
    total: formObj.total,
    precio: formObj.precio,
  }).then((response) => {
    console.log(response.data)
    alert("su orden a sido guardada");
    //debugger
    navigate("/")
 
    setFormObj({
      nombreDeOrden: "",
      azada: "",
      pollo: "",
      barbacoa: "",
      pastor: "",
      chorizo: "",
    })

  })
    .catch((err) => {
      console.log(err)
    })}, 500);
  
   
  };

  return (

    <>

  <div className='mt-6 columns is-mobile'>
  <div className="column is-one-fifth"> </div>

  

  



  <hr></hr>
  <form onSubmit={handleSubmit}>

    <div className="card">
      <header is-family-monospace="true" style={liestilo.atras} className="card-header">
        <p className="card-header-title is-family-monospace is-size-4">
          {/* change data */}
          Nombre:  <span><strong>{formObj.nombreDeOrden}</strong>  </span>
        </p>

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
                <td>
                  <div className="mr-6  select is-small">
                    <select
                      name="azada"
                      value={formObj.azada}
                      onChange={handleChangeI}
                    >
                      {numeros.map((nume) => (
                        <option key={nume.toString()} value={nume}>
                          {nume}
                        </option>
                      ))}
                    </select>
                  </div>
                </td>

                <td>
                  <div className="mr-6  select is-small">
                    <select
                      name="pollo"
                      value={formObj.pollo}
                      onChange={handleChangeI}
                    >
                      {numeros.map((nume) => (
                        <option key={nume.toString()} value={nume}>
                          {nume}
                        </option>
                      ))}
                    </select>
                  </div></td>
                <td> <div className="mr-6  select is-small">
                  <select
                    name="pastor"
                    value={formObj.pastor}
                    onChange={handleChangeI}
                  >
                    {numeros.map((nume) => (
                      <option key={nume.toString()} value={nume}>
                        {nume}
                      </option>
                    ))}
                  </select>
                </div></td>
                <td>{<div className="mr-6  select is-small">
                  <select
                    name="chorizo"
                    value={formObj.chorizo}
                    onChange={handleChangeI}
                  >
                    {numeros.map((nume) => (
                      <option key={nume.toString()} value={nume}>
                        {nume}
                      </option>
                    ))}
                  </select>
                </div>}</td>
                <td> <div className="mr-6  select is-small">
                  <select
                    name="barbacoa"
                    value={formObj.barbacoa}
                    onChange={handleChangeI}
                  >
                    {numeros.map((nume) => (
                      <option key={nume.toString()} value={nume}>
                        {nume}
                      </option>
                    ))}
                  </select>
                </div></td>
              </tr>
            </tbody>

          </table>

          <br></br>
          <label style={liestilo.atras} className="label">Tacos: <span>{formObj.total}</span> </label>
          <label style={liestilo.atras} className="label">Precio Total:$<span>{formObj.precio}.00</span> </label>


          <time dateTime="2016-1-1">{formObj.tiempo}</time>
        </div>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item"> <button className="button is-danger is-light" type="submit" value="Submit">guardar </button></div>
        {/* <div className="card-footer-item"> <button class="button is-success is-light" onClick={()=> deleteOrder(props._id)}>editar</button></div> */}
      </footer>
    </div>
  </form>







  <div className="column is-one-fifth"></div>
  </div>
<hr></hr>
  <div className="columns">   <Footer/> </div>
    </>
  );
};

export default Editar;
