import React, { useCallback, useContext, useState } from "react";
import ComboDropdown from '../../components/comboDropdown/ComboDropdown';
import ComboContext from "../../context/ComboContext";
import alertContext from "../../context/alertContext";
import Alert from "../../components/Alert/Alert";

const ComboContainer = () => {
  console.count("i rerenderd in combo container");

const {setCombo, combo}= useContext(ComboContext);

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

  const comboSeter= ()=>{
    setTimeout(() => {
      // setCombo(inputFields);
    }, 2000);     
  };

  const removeCombo = (index) => {
    const listOfCombos = [...inputFields];

    if (listOfCombos.length > 1) {
      listOfCombos.splice(index, 1);
      inputFields.splice(index,1)
      setInput(listOfCombos);
      setCombo(listOfCombos);
;    }
    
      if (listOfCombos.length === 1) {
        listOfCombos[0].comboPrice = "0";
        setInput(listOfCombos);
      setCombo(listOfCombos);

      };
  };

  const handleSupremeChange = (index, event) => {

    let data = [...inputFields];
    data[index].supreme = event.target.checked;
  };

  const handleFormChange = useCallback(
    (index, event) => {
      let data = [...inputFields];
      data[index][event.target.name] = event.target.value;
      setInput([...data]);
      setCombo([...data]); 
    },[inputFields,setCombo]
  );

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

    setAlert({ message: "Please make a choice from bellow!", type: "is-success" });

  };

  console.log(inputFields);

  return (<>

    <figcaption style={{ textAlign: "center", background: "lightyellow" }}>
      <h3> <strong>Combos</strong></h3>
      <div> <h6 className="mb-0">CHOOSE FROM:</h6> <p>Beans, cheese, beef and shreded chicken.</p> </div>
      <h6 className="mb-0">   ADD SUPREME FOR 2.50</h6>
      <p>All combos are served with rice and beans.</p>
    </figcaption>

    {
      inputFields.map((input, index) => {
        return (

          <div className="container" key={index}>

              <div style={{ textAlign: "center", background: "tan" }}>

                {

                  inputFields.length - 1 === index &&
                  <Alert />

                }
                <label className="radio">
                  <input
                    type="radio"
                    name={"comboPrice"}
                    onChange={event => {  handleFormChange(index, event); comboSeter(); }}
                    value={"9"}
                    checked={input.comboPrice === "9"}
                  />
                  <strong>CHOOSE(2)9.25</strong>
                </label>

                <label className="radio">
                  <input type="radio" style={{ marginLeft: "50px" }}
                    name={"comboPrice"}
                    onChange={event => { handleFormChange(index, event);  comboSeter()}}
                    value={"10"}
                    checked={input.comboPrice === "10"}
                  />
                  <strong>CHOOSE (3) 10.25</strong>
                </label>


              </div>

              {


                input.comboPrice !== "0" &&

                <div className="container">
                  <div className="topping">
                    <input
                      type="checkbox"
                      name="supreme"
                      onChange={event =>{ handleSupremeChange(index, event);comboSeter()}}
                      value={""}

                    />
                    <strong>Make Supreme</strong>

                  </div>
                  <div className="is-align-content-center columns mt-0">
                    <div className="container">
                      <ComboDropdown
                        choiceName="Choice #1"
                        placeholder="Tamal"
                        name="choice1"
                        onChange={event =>{ handleFormChange(index, event); comboSeter();}}
                        value={input.choice1}
                      />

                      <ComboDropdown
                        choiceName="Choice #2"
                        placeholder="Chicken Chalupa"
                        name="choice2"
                      onChange={event =>{handleFormChange(index, event);comboSeter(); }}
                        value={input.choice2}
                      />
                      {
                        input.comboPrice === "10" &&
                        <ComboDropdown
                          choiceName="Choice #3"
                          placeholder="beefTaco"
                          name="choice3"
                        value={combo.choice3}
                      onChange={event =>{handleFormChange(index, event);comboSeter(); }}
                        />
                      }


                    </div>



                  </div>



                </div>


              }
              {
                input.comboPrice !== "0" &&
                // inputFields.length > 1 &&
                <button className="button is-danger is-small" onClick={() => { removeCombo(index) }}
                  style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px" }}>Remove Combo</button>
              }

              {
                input.comboPrice !== "0" && inputFields.length - 1 === index && inputFields.length < 4 &&
                <>

                  <button type="submit" className="button is-success is-small" onClick={ addFields} style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px" }}>Add New Combo</button>

                </>

              }



          </div>



        )
      })
    }
  </>)
};

export default React.memo(ComboContainer);