import { useContext, useState } from "react";
import ComboDropdown from '../components/comboDropdown/ComboDropdown';
import ComboContext from "../context/ComboContext";

const ComboContainer = () => {

  const combo = useContext(ComboContext)

  const [inputFields, setInput] = useState(
    [{
      comboId: 1,
      comboPrice: "",
      supreme: false,
      choice1: "",
      choice2: "",
      key: 1,
    }]
  );


  const handleFormChange = (index, event) => {
    let data = [...inputFields]
    data[index][event.target.name] = event.target.value;
    setInput(data);
    console.log(inputFields)
  };

  const addFields = (event) => {
    event.preventDefault();

    let newfield = {
      comboId: 1,
      comboPrice: "",
      supreme: false,
      choice1: "",
      choice2: "",
      key: 1,
    }
    setInput([...inputFields, newfield]);
    combo.setCombo(inputFields);
    console.log(combo)
  }


  return (<>

    <figcaption style={{ textAlign: "center", background: "lightyellow" }}>
      <h3 style={{ marginBottom: "10px" }}> <strong>Combos</strong></h3>
      <div> <h6 style={{ marginBottom: 0 }}>CHOOSE FROM:</h6> <p>Beans, cheese, beef and shreded chicken.</p> </div>
      <h6 style={{ marginBottom: 0 }}>   ADD SUPREME FOR 2.50</h6>
      <p style={{ marginBottom: 0 }}>All combos are served with rice and beans.</p>


    </figcaption>


    {
      inputFields.map((input, index) => {
        return (

          <div key={index}>
            <div style={{ textAlign: "center", background: "tan" }}>
              <label>
                <input
                id="price1"
                  type="radio"
                  name={"comboPrice"}
                  onChange={event => handleFormChange(index, event)}
                  value={"9" && input.comboPrice }
                  checked={input.comboPrice === "9"}
                  key={index}
                />
                CHOOSE(2)9.25

              </label>


              <label>
                <input type="radio" style={{ marginLeft: "50px" }}
                id="price2"
                  name={"comboPrice"}
                  onChange={event => handleFormChange(index, event)}
                  value={"10"}
                  checked={input.comboPrice === "9"}

                />
                CHOOSE (3) 10.25
              </label>

            </div>

            <div className="is-align-content-center columns mt-3">

              <ComboDropdown
                choiceName="Choice1"
                placeholder="Tamal"
                name="choice1"
                onChange={event => handleFormChange(index, event)}
                value={input.choice1}

              />

              <ComboDropdown
                choiceName="Choice#2"
                placeholder="Chicken Chalupa"
                name="choice2"
                onChange={event => handleFormChange(index, event)}
                value={input.choice2}

              />
              {
                input.comboPrice === "10" &&
                <ComboDropdown
                  choiceName="Choice#3"
                  placeholder="beefTaco"
                  name="choice3"
                // value={combo.choice3}
                // onChange={choice3Handeler}
                />
              }


              {
                inputFields.length > 1 &&
                <button className="button is-danger is-small" style={{ alignContent: "center", marginLeft: "5px", marginTop: "23px" }}>Remove</button>
              }

              {
                inputFields.length - 1 === index && inputFields.length < 10 &&
                <button className="button is-success is-small" onClick={addFields} style={{ alignContent: "center", marginLeft: "5px", marginTop: "30px" }}>+</button>
              }

            </div>
          </div>
        )
      })
    }
  </>)
};

export default ComboContainer;

