import React from 'react';

const NameField = (props) => {
    return (
        <section className="field"> 
        <label className="label">
        Nombre Para La Orden:
        </label>
        <div className="is-mobile">
          <input
          className="input is-medium is-rounded"
            type="text"
            aria-label="iput for order name"
            placeholder="Gonzalo"
            name={props.name}
            value={props.nombreDeOrden}
            onChange={props.handleChangeI}

          />
        </div>
     </section>
    );
};

export default NameField;