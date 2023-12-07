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

    <div className="columns is-responsive is-mobile is-centered">
    <div className="ml-3 field">
< h6 className="mr-6 label">
     {props.tagg} 
</h6>

<div className="mr-6  select ">
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
    </div>


    <div className="columns is-mobile is-centered mt-2" style={{ background: "tan" }}>
<div className="checkbox p-4">
<input type="checkbox"
    //   onChange={()=>{{props.handleSupremeNachos}}  }
    //   checked={dipShow===1}
      name="nachosSupreme"/>
Make Supreme
</div>
</div>



    
    </>)
}

export default NachosDropDown;