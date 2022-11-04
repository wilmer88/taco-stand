import React, { useEffect, useState } from "react";
// import axios from "axios";
import API from "../utils/API";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];

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

  const [formObj, setFormObj] = useState({});
  const { ordenId } = useParams();
  const navigate = useNavigate();
 
  useEffect(() => {
    API.getOrden(ordenId).then((response) => {
      // console.log(response)
      console.log(response.data)
       setFormObj(response.data)
     }).catch((err) =>{ 
      console.log(err)
    });
   }, [ordenId])

  function handleChangeI(e) {
    const { name, value } = e.target;
    setFormObj({ ...formObj, [name]: value })
  };

  function handleSubmit(e) {
    e.preventDefault(e);
      formObj.total = parseInt(formObj.azada) +  parseInt(formObj.pollo) + parseInt(formObj.pastor) + parseInt(formObj.chorizo) + parseInt(formObj.barbacoa);
      formObj.precio = parseInt(formObj.total) * 3;

  setTimeout(() => {
     API.updateOrden(ordenId, {
    azada: formObj.azada,
    pollo: formObj.pollo,
    barbacoa: formObj.barbacoa,
    pastor: formObj.pastor,
    chorizo: formObj.chorizo,
    largeHorchata: formObj.largeHorchata,
    smallHorchata: formObj.smallHorchata,
    coca: formObj.coca,
    sprite: formObj.sprite,
    fanta: formObj.sprite,
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

  }).catch((err) => {
      console.log(err)
    })}, 500);
  
  };
  let drinksPrice = formObj.aguasVirtual + formObj.canDrinkVirtual;
  let precioTotal = drinksPrice + formObj.topingVirtual + formObj.tacosVirtual
  return (
    <>
<div className="columns is-mobile  is-size-7">
  <div className="column is-1"></div>

<div className="column is-narrow-mobile">
<div className="container mobile is-centered">
  <form onSubmit={handleSubmit}>

<div className="card">

  <header is-family-monospace="true" style={liestilo.atras} className="card-header">
    <div className="card-header-title is-family-monospace is-size-4">
      {/* change data */}
      Nombre:  <span><strong>{formObj.nombreDeOrden}</strong>  </span>
    </div>

  </header>
  <div className="card-content">
  <div className="content">
  <figcaption>   
                <h5 style={{textAlign: "center", background: "lightyellow"}} > <strong>Tacos</strong></h5>
                </figcaption>
    
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
              <div className="select">
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
              <div className="select ">
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
              </div>
              </td>
            <td>
               <div className="select ">
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
            </div>
            </td>

            <td>
              <div className="select">
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
            </div>
            </td>

            <td> 
              <div className="select">
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
            </div>
            </td>
          </tr>
        </tbody>
      </table>
{/* -------------------drinks table---------------- */}
<figcaption>   
                <h5 style={{textAlign: "center", background: "lightyellow"}} > <strong>Bebidas</strong></h5>
                </figcaption>
      <table>
        <tbody>
          <tr>
            <th>G/Large <br></br>Horchata</th>
            <th>P/Small <br></br>Horchata</th>
            <th>Coca</th>
            <th>Sprite</th>
            <th>Fanta</th>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>
              <div className="select">
                <select
                  name="largeHorchata"
                  value={formObj.largeHorchata}
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
              <div className="select ">
                <select
                  name="smallHorchata"
                  value={formObj.smallHorchata}
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
               <div className="select ">
              <select
                name="coca"
                value={formObj.coca}
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
              <div className="select">
              <select
                name="sprite"
                value={formObj.sprite}
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
              <div className="select">
              <select
                name="fanta"
                value={formObj.fanta}
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
          </tr>
        </tbody>
      </table>
{/* -------------------topingstable---------------- */}
<figcaption>   
                <h5 style={{textAlign: "center", background: "lightyellow"}} > <strong>Extra </strong></h5>
                </figcaption>
      <table>
        <tbody>
          <tr>
            <th>Extra <br></br>Cebolla</th>
            <th>Extra<br></br>Cilantro</th>
            <th>Extra<br></br>Pico</th>

            <th>Verde/Green<br></br>Salsa</th>

            <th>Roja/red<br></br>Salsa</th>

          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>
              <div className="select">
                <select
                  name="cebolla"
                  value={formObj.cebolla}
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
              <div className="select ">
                <select
                  name="cilantro"
                  value={formObj.cilantro}
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
               <div className="select ">
              <select
                name="pico"
                value={formObj.pico}
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
              <div className="select">
              <select
                name="greenSalsa"
                value={formObj.greenSalsa}
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
              <div className="select">
              <select
                name="redSalsa"
                value={formObj.fanta}
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
          </tr>
        </tbody>
      </table>
      <br></br>
      <label style={liestilo.atras} className="label">Tacos Total: $<span>{formObj.tacosVirtual?.toFixed(2)}</span> <br></br> 
      Bebidas/drinks: $<span>{drinksPrice?.toFixed(2)}</span><br></br> 
      Extra Porciones/Toppings: $<span>{formObj.topingVirtual?.toFixed(2)}</span>
      </label>
      <label style={liestilo.atras} className="label">Precio Total: $<span>{precioTotal?.toFixed(2)}</span> </label>

      <time dateTime="2016-1-1">{formObj.tiempo}</time>
     </div>
     </div>
  <footer className="card-footer">
    <div className="card-footer-item"> <button className="button is-danger is-light" type="submit" value="Submit">guardar </button></div>
    {/* <div className="card-footer-item"> <button class="button is-success is-light" onClick={()=> deleteOrder(props._id)}>editar</button></div> */}
  </footer>
</div>
</form>
</div>
</div>
<div className="column is-1"></div>
</div>
    </> );
};

export default Editar;


