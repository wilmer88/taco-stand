import React from 'react';

const DropDownField = (props) => {

 const numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];

    return (<>
<div className="ml-3 field">
< label className="mr-6 label">
     {props.tagg} 
</label>

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
       </>);};

export default DropDownField;