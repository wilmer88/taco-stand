
const SelectField = (props) => {
  const numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,]
    return (
        <>
        <div className="field">

               <label className="mr-6 label">
                     {props.text}
                        </label>
                        <div className="mr-6  select is-small">
                          <select
                          
                            name={props.meatName}
                            value={`${props.azada}`}
                            onChange={()=>{}}
                          >
                            {numeros.map((nume) => (
                              <option key={nume.toString()} value={nume}>
                                {nume}
                              </option>
                            ))}
                          </select>
                        </div>



        </div>
 
        </>
    );
};

export default SelectField;