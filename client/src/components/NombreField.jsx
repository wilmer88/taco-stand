
const NombreField = () => {
    return (
        <>
<div className="m-5 mr-8 media-content">
                          <label className="label">
                            Nombre Para La Orden
                            <div className="is-mobile">
                              <input
                           
                            
                                aria-label="iput for order name"
                                className="input is-normal is-rounded"
                                type="nombre"
                                id="orden-name"
                                name="nombreDeOrden"
                                placeholder="Gonzalo"
                              
                              />
                            </div>
                          </label>
                          <hr></hr>
                        </div>
        </>
    );
};

export default NombreField;