import Bebidas from "../components/Bebidas";
import TopingsBlock from "./TopingsBlock";
import TacoBlock from "./TacosBlock";
import API from "../utils/API"
import React, {useState } from "react";
import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
const OrdenBox = () => {
  
  async function firstFunction(){
    handleClose()
    };

    async function secondFunction(){
   alert("Gracias por su orden!")
  
      };

      const [showModel, setshowModel] = useState("modal");
      const openModal = (e)=>{e.preventDefault(); setshowModel("modal is-active")};
      const handleClose = ()=>{setshowModel("modal")}

      const [formObj, setFormObj] = useState({
        nombreDeOrden: "",
        azada: 0,
        pollo: 0,
        barbacoa: 0,
        pastor: 0,
        chorizo: 0,
      });


  //   function handleChangeI(e) {
  //  const {name, value} = e.target;
  //   setFormObj({...formObj, [name]: value})
  // };

  const handleSubmit= (e)=> {
    e.preventDefault();
API.saveOrden(formObj).then((response)=>{
  firstFunction()
  setTimeout(() => {secondFunction()}, 1800);
  setFormObj({
    nombreDeOrden: "",
    azada: 0,
    pollo: 0,
    barbacoa: 0,
    pastor: 0,
    chorizo: 0,
    precios:0,
    total:0,
  })
}).catch((err) =>{ 
          console.log(err)
        });
        };
                                                                                                                        
  // window.location.href="http://localhost:3000/ClientLine" ;
 return (<>
         <form >
      
          <main className="box is-shadowless is-align-self-center">
          <section className="card">

 <article className="card-content">
 <aside className="m-3 content" >

         <TacoBlock/>
         <Bebidas/>
         <TopingsBlock /> 
        

            </aside>
            </article>


      
      <aside id="modalll" className={`modal ${showModel}`}>
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
          </aside> 
         
          <footer className="card-footer">
                  <div className="card-footer-item">
                  <span>
                  <button onClick={openModal} id="modalButton" className="button is-medium is-success is-light" data-target="modal-js-example">
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
  

  </section>
 </main>  
</form>
       </>);
  }
export default OrdenBox;

      