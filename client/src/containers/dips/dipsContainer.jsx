import { useContext, useState } from "react";
import ComboDropdown from '../../components/comboDropdown/ComboDropdown';
import ComboContext from "../../context/ComboContext";
import alertContext from "../../context/alertContext";
import Alert from "../../components/Alert/Alert";

const DipsContainer = () => {

    const { setCombo } = useContext(ComboContext);
    let combo = useContext(ComboContext);
    // console.log(combo);

    const { setAlert } = useContext(alertContext);

    const [inputFields, setInput] = useState(
        [{
            comboId: 1,
            comboPrice: "0",
            supreme: false,
            choice1: "",
            choice2: "",
            key: 1,
        }]
    );

    const removeCombo = (index) => {
        const listOfCombos = [...inputFields];

        if (listOfCombos.length > 1) {
            listOfCombos.splice(index, 1);
            setInput(listOfCombos);
        }
        else

            if (listOfCombos.length === 1) {
                listOfCombos[0].comboPrice = "0";
                setInput(listOfCombos);
            };
    };

    const handleSupremeChange = (index, event) => {

        let data = [...inputFields];
        data[index][event.target.supreme] = event.currentTarget.value;

        if (data[index][event.target.name] === false) {
            // console.log("was1" + data[index][event.target.name]);
            data[index][event.target.name] = true;
            // console.log("now1:" + data[index][event.target.name]);
            setInput(data);
        }
        else if (data[index][event.target.name] === true) {
            // console.log("was2:" + data[index][event.target.name]);
            data[index][event.target.name] = false;
            // console.log("now2:" + data[index][event.target.name]);
            setInput(data);
        };

    };

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInput([...data]);
        setCombo([...data]);

    };

    const addFields = (event) => {
        event.preventDefault();

        let newfield = {
            comboId: inputFields.length + 1,
            comboPrice: "0",
            supreme: false,
            choice1: "",
            choice2: "",
            key: inputFields.length + 1,
        };
        setInput([...inputFields, newfield]);

        setCombo([...combo.combo, newfield]);
        // console.log(combo);
        setAlert({ message: "Please make a choice from bellow!", type: "is-success" });

    };

    const comboSeter = () => {
        setTimeout(() => {
            setCombo(inputFields);
        }, 2000);

    };

    return (<>

        <figcaption style={{ textAlign: "center", background: "lightyellow" }}>
            <h3 style={{ marginBottom: "10px" }}> <strong>Dips</strong></h3>
        </figcaption>

        {
            inputFields.map((input, index) => {
                return (

                    <div className="container" key={index}>
                        <form style={{ alignContent: "center", marginLeft: "5px", marginBottom: "10px" }} >

                            <div className="control" style={{ textAlign: "center", background: "tan" }}>

                                {

                                    inputFields.length - 1 === index &&
                                    <Alert />

                                }
                                <label className="checkbox">
                                    <div className="dips">
                                        <input
                                            type="checkbox"
                                            name={"comboPrice"}
                                            // onChange={event => handleSupremeChange(index, event)}

                                            onChange={event => { handleFormChange(index, event); comboSeter(); }}
                                            value={"9"}
                                            checked={input.comboPrice === "9"}

                                        />
                                        <strong>ADD DIPS</strong>

                                    </div>

                                </label>

                                <label className="checkbox">
                                    <input type="checkbox" style={{ marginLeft: "50px" }}
                                        name={"comboPrice"}
                                        onChange={event => { handleFormChange(index, event); comboSeter() }}
                                        value={"10"}
                                        checked={input.comboPrice === "10"}
                                    />
                                    <strong>REMOVE ALL DIPS </strong>
                                </label>


                            </div>

                            




                             

                             
                            <div className="container"  style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px",  width:"20%"}}>
                                

                                              <div className="box"  style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px",  }} >
                                              <div   >0</div>
                                            
                                              </div>
                                              <div   >  Cheese Dip</div>
                                              
                        
                     

                             {
                                input.comboPrice !== "0" &&
                                // inputFields.length > 1 &&
                                
                                <button type="button" className="button is-danger is-small" onClick={() => { removeCombo(index) }}
                                    style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px" }}>Remove Combo</button>
                            }

                            {
                                input.comboPrice !== "0" && inputFields.length - 1 === index && inputFields.length < 4 &&
                                <>

                                    <button type="submit" className="button is-success is-small" onClick={addFields} style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px" }}>Add New Combo</button>

                                </>

                            }
                             




                            </div>

                            
                      



                        </form>
                        <hr></hr>
                    </div>



                )
            })
        }
    </>)
};

export default DipsContainer;

