import React from 'react';

const NameField = (props) => {
    return (
    <section className="ml-6 field"> 
        <h6 className="mr-6 label">
       {props.nameOfInputField }
       </h6>
        <div className="is-mobile">
          <input
          className="input is-medium is-rounded"
            type="text"
            aria-label="iput for order name"
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          />
        </div>
     </section>)
};

export default NameField;