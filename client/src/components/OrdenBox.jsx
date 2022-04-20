import React, {useState } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
// import { useNavigate } from "react-router-dom";
const OrdenBox = () => {
  async function firstFunction(){
    handleClose()

    };

    async function secondFunction(){
   alert("Gracias por su orden!")
  
      };


  // const navigate = useNavigate()
  const numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];
      const [showModel, setshowModel] = useState("modal");
      const handleOpen = (e)=>{e.preventDefault(); setshowModel("modal is-active")};
      const handleClose = ()=>{  setshowModel("modal")}

  const [formObj, setFormObj] = useState({
    nombreDeOrden: "",
    azada: 0,
    pollo: 0,
    barbacoa: 0,
    pastor: 0,
    chorizo: 0,
  })
    function handleChangeI(e) {
   const {name, value} = e.target;
    setFormObj({...formObj, [name]: value})
  };
  const handleSubmit= (e)=> {
    e.preventDefault();
API.saveOrden({
  nombreDeOrden: formObj.nombreDeOrden,
  azada: formObj.azada,
  pollo: formObj.pollo,
  barbacoa: formObj.barbacoa,
  pastor: formObj.pastor,
  chorizo: formObj.chorizo,
}).then((response)=>{
  firstFunction()
  setTimeout(() => {secondFunction()}, 600);
  setFormObj({
    nombreDeOrden: "",
    azada: 0,
    pollo: 0,
    barbacoa: 0,
    pastor: 0,
    chorizo: 0,
  })

}).catch((err) =>{ 
          console.log(err)
        });
  };
  
    return (
       <>
<form >
 <div className="box is-shadowless is-align-self-center">
 <div className="card">

 <div className="card-content">
<div className="m-5 mr-8 media-content">
<div className="field is-horizontal">

<div className="field"> 
<label className="label">
            Nombre Para La Orden:
            </label>
            <div className="is-mobile">
              <input
                onChange={handleChangeI}
                     className="input is-medium is-rounded"
              type="nombre"
              id="orden-name"
              name="nombreDeOrden"
                aria-label="iput for order name"
                placeholder="Gonzalo"
                value={formObj.nombreDeOrden}
              />
            </div>
         </div>

         <div className="ml-6 field">
        <label className="mr-6 label">
                Azada
         </label>
         <div className="mr-6  select">
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
        </div>

        <div className="ml-6 field">
        <label className="mr-6 label">
                Pollo
         </label>
         <div className="mr-6  select ">
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
        </div>

        <div className="ml-6 field">
        <label className="mr-6 label">
                Barbacoa
         </label>
         <div className="mr-6  select ">
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
        </div>

        <div className="ml-6 field">
        <label className="mr-6 label">
                Pastor
         </label>
         <div className="mr-6  select">
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
        </div>

        <div className="ml-6 field">
        <label className="mr-6 label">
                Chorizo
         </label>
         <div className="mr-6  select">
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
        </div>
            </div>
            </div>
            </div>
                 
            <div id="modalll" className={`modal ${showModel}`}>
              <div className="modal-background"></div>
              <div className="modal-content ">
                <div className="box is-mobile">
                  <div style={{fontSize: "35px", fontWeight: "bold"}}>Esta Bien Su Orden?</div>
                  <div style={{fontSize: "25px"}}> Nombre: {formObj.nombreDeOrden}</div>
                  <div style={{fontSize: "25px"}}> Azada: {formObj.azada}</div>
                  <div style={{fontSize: "25px"}}>Pollo: {formObj.pollo}</div>
                  <div style={{fontSize: "25px"}}>Barbacoa: {formObj.barbacoa}</div>
                  <div style={{fontSize: "25px"}}>Chorizo: {formObj.chorizo}</div>
                  <div style={{fontSize: "25px"}}>Pastor: {formObj.pastor}</div>
                  <hr></hr>
                  <button onClick={handleClose} type="button "  className="button is-medium is-dark" >Cancelar</button>
                <br></br>
                <br></br>
                <button style={{fontSize: "25px"}} type="button " onClick={handleSubmit} className="button is-medium  is-primary is-light"><strong>Continuar</strong></button>
                </div>
              </div>
              <button onClick={handleClose}  type="button" className="modal-close is-large" aria-label="close"></button>
            </div> 
     
<footer className="card-footer">
                  <div className="card-footer-item">
                  <span>
                  <button onClick={handleOpen} id="modalButton" className="button is-medium is-success is-light" data-target="modal-js-example">
                    <strong>Entregar</strong>
                  </button>
                    </span>
                  </div>
                  <div className="card-footer-item">
                    <span>
                    Conparte en {""}
                      <Link to="#">
                       Facebook 
                      </Link>
                    </span>
                  </div>
                </footer>
 </div>
 </div>  
</form>
       </>
    );
  }
export default OrdenBox;

      