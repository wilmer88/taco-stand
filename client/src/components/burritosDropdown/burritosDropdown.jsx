import React from "react";

const BurritosDropdown = ({ selectNachoName, numeros, value, onChangeNachos, deleteBurrito }) => {
  return (
    <>
          <button className="button is-danger is-small mt-3 mr-3" onClick={deleteBurrito} >Remove Combo</button>
      <div className="container">


              <select name={selectNachoName} value={value} onChange={onChangeNachos}>
          {numeros.map((option, index) => (
            <option key={index} value={option.price} name="price">{option.label}</option>
          ))}
      </select>


      </div>

      </> );
};


export default React.memo(BurritosDropdown);
