const Bebidasfield = (props) => {
  const numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];


  


       return(
         <>
         <hr></hr>
         <figcaption>   
    <h5 style={{textAlign: "center", background: "lightyellow"}} > <strong>Bebidas</strong></h5>
    </figcaption>
<div className="columns mt-3">

 
 
   

       <div className="ml-6 field">
      <label className="mr-6 label">
              CocaCola
       </label>
       <div className="mr-6  select">
         <select
           name="coca"
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

      <div className="ml-6 field">
      <label className="mr-6 label">
              Sprite
       </label>
       <div className="mr-6  select ">
         <select
           name="sprite"
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

      <div className="ml-6 field">
      <label className="mr-6 label">
              Fanta
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

      <div className="ml-6 field">
      <label className="mr-6 label">
              Horchata Grande
       </label>
       <div className="mr-6  select">
         <select
           name="lhorchata"
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

      <div className="ml-6 field">
      <label className="mr-6 label">
              Horchata PequeNa
       </label>
       <div className="mr-6  select">
         <select
           name="shorchata"
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
     </>
       )
}

export default Bebidasfield
