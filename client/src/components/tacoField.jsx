// import React, {useState } from "react";
import Dropdownfield from "./DropdownField";




const TacoField = (props) => {
    const numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];



    // function handleChangeI(e) {
    //     const {name, value} = e.target;
    //      setFormObj({...formObj, [name]: value})
    //    };


 return (<>
           <figcaption>   
      <h5 style={{textAlign: "center", background: "lightyellow"}} > <strong>Tacos</strong></h5>
      </figcaption>
 <div className="is-align-content-center columns mt-3">

            <section className="field"> 
            <label className="label">
            Nombre Para La Orden:
            </label>
            <div className="is-mobile">
              <input
                onChange={props.handleChangeI}
              className="input is-medium is-rounded"
              type="nombre"
              id="orden-name"
              name="nombreDeOrden"
                aria-label="iput for order name"
                placeholder="Gonzalo"
                value={props.nombreDeOrden}
              />
            </div>
         </section>


<Dropdownfield labelName= "Cuero" />

  
         <div className="ml-4 field">
        <label className="mr-6 label">
                Azada
         </label>
         <div className="mr-6  select">
           <select
             name="azada"
            //  value={props.formObj.azada}
             onChange={props.handleChangeI}
           >
             {numeros.map((nume) => (
               <option key={nume.toString()} value={nume}>
                 {nume}
               </option>
             ))}
           </select>
         </div>
        </div>

        <div className="ml-3 field">
        <label className="mr-6 label">
                Pollo
         </label>
         <div className="mr-6  select ">
           <select
             name="pollo"
            //  value={props.formObj.pollo}
             onChange={props.handleChangeI}
           >
             {numeros.map((nume) => (
               <option key={nume.toString()} value={nume}>
                 {nume}
               </option>
             ))}
           </select>
         </div>
        </div>

        <div className="ml-3 field">
        <label className="mr-6 label">
                Barbacoa
         </label>
         <div className="mr-6  select ">
           <select
             name="barbacoa"
            //  value={props.formObj.barbacoa}
             onChange={props.handleChangeI}
           >
             {numeros.map((nume) => (
               <option key={nume.toString()} value={nume}>
                 {nume}
               </option>
             ))}
           </select>
         </div>
        </div>

        <div className="ml-3 field">
        <label className="mr-6 label">
                Pastor
         </label>
         <div className="mr-6  select">
           <select
             name="pastor"
            //  value={props.formObj.pastor}
             onChange={props.handleChangeI}
           >
             {numeros.map((nume) => (
               <option key={nume.toString()} value={nume}>
                 {nume}
               </option>
             ))}
           </select>
         </div>
        </div>

        <div className="ml-3 field">
        <label className="mr-6 label">
                Chorizo
         </label>
         <div className="mr-6  select">
           <select
             name="chorizo"
            //  value={props.formObj.chorizo}
             onChange={props.handleChangeI}
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
       </>);
  }
export default TacoField;

      