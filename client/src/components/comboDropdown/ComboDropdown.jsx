import React from 'react';

const ComboDropdown = (props) => {
  const comboChoices = ["","Poblano Pepper", "Chicken Soft Taco"," Beef Soft Taco", "shreded chicken",];


    return (<>

<div className="ml-1 field">
< h6 className="mr-1 label">
{props.choiceName}
</h6>
<div className="mr-1  select ">
<select
  name={props.name}
 value={props.value}
  onChange={props.onChange}
  >
  {comboChoices.map((nume) => (
    <option
key={nume}
     value={nume}>
      {nume}
    </option>
  ))}
</select>
</div>
</div>

       </>);};

export default ComboDropdown;