import React from "react";


const NachosDropDown = (props)=>{
  const numeros = [
    "",
     "Cheese Nachos(Half)($4.75)",
     "Cheese Nachos (Full)($6.00)",
     "Beans Nachos(Half)($5.00)",
     "Beans Nachos(Full)($6.25)",
    ];

    

    return(<>



<div className="columns is-vcentered is-mobile is-centered">
   


<div className="checkbox p-1">

<input
 type="checkbox"
  onChange={props.handleSupremeNachos }
  name="NachosSupreme"
  />
Make Supreme
</div>
</div>

<div className="columns is-vcentered is-mobile is-centered">
<div className="checkbox p-1">
<input
 type="checkbox"
  onChange={props.handleSupremeNachos }
  name="NachosSupreme"
  />
Add Pineapple
</div>

</div>



      <div className="columns is-vcentered is-mobile is-centered">
        
      <div onChange={props.onChangeNachos} className="select is-mobile is-centered mt-2">
      <select
  name={props.name}
  value={props.value}
  onChange={props.onChange}
>
  {numeros.map((nume) => (
    <option
     key={nume.toString()} 
     value={nume}>
      {nume}
    </option>
  ))}
</select>



      </div>
      

      </div>
      

      <div className="columns is-vcentered is-mobile is-centered">

<button className="button is-danger is-small mt-3 mr-3" onClick={props.removeNachos} >Remove Combo</button>

</div>



      



<hr></hr>

</>)






}

export default NachosDropDown;