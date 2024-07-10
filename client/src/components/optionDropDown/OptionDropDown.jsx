import React from "react";


const OptionDropDown = (props)=>{

 const {numeros}= props


    

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
  onChange={props.handlePineapplefunc }
  name="NachosPineapple"
  />
Add Pineapple
</div>

</div>



      <div className="columns is-vcentered is-mobile is-centered">
        
      <div  className="select is-mobile is-centered mt-2">
      <select
      name={props.selectNachoName}
      value={props.value}
      onChange={props.onChangeNachos}
      >

<option>Select an option</option>
  {numeros.map((nume) => (
    <option
    key={nume.label}
    value={nume.price} 
    name={nume.label}
     >
      
  { 
  
  nume.label
  
  }


    </option>



  ))}
</select>



      </div>
      

      </div>
      

      <div className="columns is-vcentered is-mobile is-centered">
      <button type="submit" className="button is-success is-small" style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px" }}>Add Selection</button>


<button className="button is-danger is-small mt-3 mr-3" onClick={props.removeNachos} >Remove Combo</button>

</div>
<hr></hr>

</>)


}

export default React.memo(OptionDropDown);
