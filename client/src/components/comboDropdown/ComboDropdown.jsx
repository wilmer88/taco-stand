import React from 'react';

const ComboDropdown = (props) => {
  const comboChoices = ["","Poblano Pepper", "Chicken Soft Taco"," Beef Soft Taco", "shreded chicken",];


    return (<>

<div className="ml-1 field">
< h6 className="mr-1 label">
{props.choiceNumber}
</h6>
<div className="mr-1  select ">
<select
  name={props.comboChoiceName}
 value={props.comboChoiceValue}
  onChange={props.comboChoiceOnChange}
  >
  {comboChoices.map((nume, index) => (
    <option
     key={index} 
     value={nume}>
      {nume}
    </option>
  ))}
</select>
</div>
</div>

       </>);};

export default ComboDropdown;