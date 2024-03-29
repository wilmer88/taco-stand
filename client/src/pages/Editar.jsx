import React, { useState, useContext } from "react";
import OrdenHero from "../components/OrdenHero/OrdenHero";
import API from "../utils/API";
import {  useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import alertContext from "../context/alertContext";

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];

const liestilo = {
  atras: {
    background: "lightyellow",
    textAlign: "center",
  
  },
  editpadding: {
    padding: "10 px",
  }
};

const Editar = () => {
  const {setAlert} = useContext(alertContext);
  const [formObj, setFormObj] = useState({});
  const [editName] = useState({});

  // const [editName, setEditName] = useState({});

  const { ordenId } = useParams();
  const navigate =  useNavigate();
 
  // useEffect(() => {
  //   API.getOrden(ordenId).then((response) => {
  //     console.log(response.data);
  //     console.log(response.data.nombreDeOrden);

  //      setFormObj(response.data);
  //      setEditName(response.data.nombreDeOrden)
  //    }).catch((err) =>{ 
  //     console.log(err);
  //   });
  //  }, [ordenId]);

  function handleChangeI(e) {
    const { name, value } = e.target;
    setFormObj({ ...formObj, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault(e);
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
    cebolla:formObj.cebolla,
    cilantro:formObj.cilantro,
    pico:formObj.pico,
    greenSalsa:formObj.greenSalsa,
    redSalsa:formObj.redSalsa,
  }).then((response) => {
    setAlert({message:"Your order was successfully updated!", type:"is-success"});
    console.log(response.data);
    //debugger
    navigate("/myorders/"+ editName);
    setFormObj({
      nombreDeOrden: "",
      azada: 0,
      pollo: 0,
      barbacoa: 0,
      pastor: 0,
      chorizo: 0,
      largeHorchata: 0,
      smallHorchata: 0,
      coca: 0,
      sprite: 0,
      fanta: 0,
      cebolla:0,
      cilantro:0,
      pico:0,
      greenSalsa:0,
      redSalsa:0,
    });
  }).catch((err) => {
    setAlert({message:"faild to update order!", type:"is-danger"});
      console.log(err);
    })}, 500);
  };
  let topingsTogether = parseInt(formObj.cebolla) + parseInt(formObj.cilantro) + parseInt(formObj.pico) + parseInt(formObj.greenSalsa) + parseInt(formObj.redSalsa);
  let topingPrice = topingsTogether * .5
  let addedtaco = parseInt(formObj.azada) + parseInt(formObj.pollo) + parseInt(formObj.barbacoa) + parseInt(formObj.pastor) + parseInt(formObj.chorizo) ;
  let tacoPrice = addedtaco *3;
  let aguaPrice = parseInt(formObj.largeHorchata) * 4 + parseInt(formObj.smallHorchata) * 2;
  let canDrinkTogether = parseInt(formObj.coca) + parseInt(formObj.sprite) + parseInt(formObj.fanta);
  let canDrinkTotal= canDrinkTogether * 2;
  let togetherTotal = canDrinkTotal + aguaPrice + tacoPrice + topingPrice
  // console.log(topingPrice)
  console.count("i rerenderd in ordenBox");

  return (<>
<div  className="columns is-mobile  is-size-7" style={liestilo.editpadding}>
  <div className="column is-1"></div>
  
<div className="column is-narrow-mobile">
<OrdenHero/>
<div className="container mobile is-centered">
  <form id="editform" onSubmit={handleSubmit}>

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
                <h3 style={{textAlign: "center", background: "lightyellow"}} > <strong>Tacos</strong></h3>
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
                <h3 style={{textAlign: "center", background: "lightyellow"}} > <strong>Bebidas</strong></h3>
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
                <h3 style={{textAlign: "center", background: "lightyellow"}} > <strong>Extra </strong></h3>
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
  
      <h2 style={liestilo.atras } className="label" htmlFor="editform"><strong>Precio Total: $<span>{togetherTotal?.toFixed(2)}</span></strong> </h2>
     <h4 style={{textAlign: "center"}}><time  dateTime="2016-1-1" >Created: {formObj.timeCreated}</time></h4> 

     </div>
     </div>
  <footer className="card-footer">
    <div className="card-footer-item"> <button className="button is-danger is-light" type="submit" value="Submit"><strong>Save/ Guardar </strong> </button></div>
    {/* <div className="card-footer-item"> <button class="button is-success is-light" onClick={()=> deleteOrder(props._id)}>editar</button></div> */}
  </footer>
  <br></br>
 
</div>
<br></br>
</form>
</div>
<br></br>

</div>
<br></br>

<div className="column is-1"></div>
</div>
    </> );
};
export default Editar;


