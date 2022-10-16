const Dropdownfield = (props) => {
    const numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];

    return(<>
             <div className="ml-4 field">
        <label className="mr-6 label">
                {props.labelName}
         </label>
         <div className="mr-6  select">
           <select
             name={props.name}
            //  value={props.formObj.azada}
             onChange={props.handleChangeI}
           >
             {numeros.map((nume) => (
               <option key={nume.toString()} value={nume}>
                 {nume}
               </option>
             ))}
           </select>
         </div>
        </div>
        </>)

}

export default Dropdownfield


