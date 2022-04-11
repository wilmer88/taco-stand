
const SelectField = () => {
  const numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,]
    return (
        <>
  <label className="mr-2 label ">
                         Azada
                        </label>
                        <div className="mr-6  select is-small">
                          <select
                          
                            name="azada"
                            value={orden.azada}
                            onChange={handleChangeI}
                          >
                            {numeros.map((nume) => (
                              <option key={nume.toString()} value={nume}>
                                {nume}
                              </option>
                            ))}
                          </select>
                        </div>

        </>
    );
};

export default SelectField;