import PropTypes from 'prop-types';
const SelectField = ({label,name,value,handleChange,numeros}) => {

    return (
        <>
        <div className="field">

               <label className="mr-6 label">
                     {label}
                        </label>
                        <div className="mr-6  select is-small">
                          <select
                          
                            name={name}
                            value={value}
                            onChange={handleChange}
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
                SelectField.propTypes = {
                  label: PropTypes.string,
                  name: PropTypes.string,
                  value: PropTypes.string,
                  onChange: PropTypes.func,
                  numeros: PropTypes.array

                }


export default SelectField;