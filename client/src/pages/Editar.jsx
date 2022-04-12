import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { useNavigate } from "react-router-dom"
import API from "../utils/API"
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
  
  const [orden, setOrden] = useState({})
  const [formObj, setFormObj] = useState({
    // nombreDeOrden:"",
    // azada: 0,
    // pollo: 0,
    // total: 0,
    // precio: 0,
  })
  useEffect(() => {
    API.getOrden(ordenId).then((response) => {
       setOrden(response.data)
       console.log(response.data)
     })
   }, [])


  const navigate = useNavigate()






  function handleChangeI(e) {
    const { name, value } = e.target;

    setOrden({ ...orden, [name]: value })
    setFormObj({ ...formObj, [name]: value })

  };


  orden.precio = parseInt(orden.total) * 3
  function handleSubmit(e) {
   
  orden.total = parseInt(orden.azada) +  parseInt(orden.pollo) + parseInt(formObj.pastor) + parseInt(formObj.chorizo) + parseInt(formObj.barbacoa)

 
    e.preventDefault(e);
  
  
    API.putOrden(ordenId, {
      nombreDeOrden: formObj.nombreDeOrden,
      azada: formObj.azada,
      pollo: formObj.pollo,
      barbacoa: formObj.barbacoa,
      pastor: formObj.pastor,
      chorizo: formObj.chorizo,
      total: parseInt(orden.azada) + parseInt(orden.pollo),
      precio: orden.precio,
    }).then((response) => {
      console.log(response.data)
      alert("Nombre:" + orden.nombreDeOrden + "\n azada: " + orden.azada + "\n pollo: " + orden.pollo);
      //debugger
      navigate(`/ClientLine`)
      setOrden({
        nombreDeOrden: "",
        azada: "",
        pollo: ""
      })
      setFormObj({
        nombreDeOrden: "",
        azada: "",
        pollo: ""
      })

    })
      .catch((err) => {
        console.log(err)
      });
   


  };

  return (
    //<h1>me</h1>
    <>

      <div className="columns is-mobile">

        <div className="column is-1"></div>
        <div className="column is-narrow-mobile">

          <hr></hr>
          <form onSubmit={handleSubmit}>

            <div className="card">
              <header is-family-monospace="true" style={liestilo.atras} className="card-header">
                <p className="card-header-title is-family-monospace is-size-4">
                  {/* change data */}
                  Nombre:  <span><strong>{orden.nombreDeOrden}</strong>  </span>
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
                              value={orden.azada}
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
                              value={orden.pollo}
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
                            value={orden.pastor}
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
                            value={orden.chorizo}
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
                            value={orden.barbacoa}
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
                  <label style={liestilo.atras} className="label">Tacos: <span>{orden.total}</span> </label>
                  <label style={liestilo.atras} className="label">Precio Total:$<span>{orden.precio}.00</span> </label>


                  <time dateTime="2016-1-1">{orden.tiempo}</time>
                </div>
              </div>
              <footer className="card-footer">
                <div className="card-footer-item"> <button className="button is-danger is-light" type="submit" value="Submit">guardar </button></div>
                {/* <div className="card-footer-item"> <button class="button is-success is-light" onClick={()=> deleteOrder(props._id)}>editar</button></div> */}


              </footer>
            </div>
          </form>

        </div>
        <div className="column is-3"></div>

      </div>

    </>
  );
};

export default Editar;