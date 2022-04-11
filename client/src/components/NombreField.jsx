
const NombreField = (props) => {
  return (
    <>
      <div className="field">
        <div className="m-5 mr-8 media-content">

          <label className="label">
            Nombre Para La Orden:
            <div className="is-mobile">
              <input onChange={props.handleChangeI}
                aria-label="iput for order name"
                className="input is-normal is-rounded"
                name={props.nombreDeOrden}
                placeholder="Gonzalo"
                value={props.nombreDeOrden}
              />
            </div>
          </label>
          <hr></hr>
        </div>








      </div>

    </>
  );
};

export default NombreField;