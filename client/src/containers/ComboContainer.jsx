import { useContext, useState } from "react";
import ComboDropdown from '../components/comboDropdown/ComboDropdown';
import ComboContext from "../context/ComboContext";

import Radio from '../components/radio/Radio';

const ComboContainer = () => {



  const { setMyCombo, comboPrice } = useContext(ComboContext);

  const [orderComboArray, setOrderCombo] = useState([]);







  // const combo1Holder = (event) => {
  //   event.preventDefault();
  //   combo.setChoice1(event.target.value);
  //   console.log(combo.choice1)
  // };
  // const choice2Handeler = (event) => {
  //   const { name, value } = event.target;
  //   combo.setChoice2({ ...combo.choice2, [name]: value })
  // };
  // const choice3Handeler = (event) => {
  //   const { name, value } = event.target;
  //   combo.setChoice3({ ...combo, [name]: value })
  // };

  const addCombo = e => {
    e.preventDefault();


    setOrderCombo(s => {

      return [
        ...s,
        {
          comboId: orderComboArray.length + 1,
          choicePrice: "9",
          supreme: false,
          choice1: "",
          choice2: "",
          key: orderComboArray.length + 1,
        }

      ]
    })


  }

  return (<>
    <figcaption style={{ textAlign: "center", background: "lightyellow" }}>


      <h3 style={{ marginBottom: "10px" }}> <strong>Combos</strong></h3>
      <div> <h6 style={{ marginBottom: 0 }}>CHOOSE FROM:</h6> <p>Beans, cheese, beef and shreded chicken.</p> </div>
      <h6 style={{ marginBottom: 0 }}>   ADD SUPREME FOR 2.50</h6>
      <p style={{ marginBottom: 0 }}>All combos are served with rice and beans.</p>  
        <button className="button is-success is-normal" onClick={addCombo} style={{ alignContent: "center", marginLeft: "5px", marginTop: "7px" }}>+</button>

    </figcaption>


  
      {
        orderComboArray.map((singleCombo,key) => {
          return (
     
            <ul key={key} >
                  <Radio
     

           
          
                
     />
     
              <div className="is-align-content-center columns mt-3">

                <ComboDropdown
                  nameOfInputField="choiceOne"
                  placeholder="Tamal"
                  name="choiceOne"
                  // value={combo.choice1}
                  // onChange={combo1Holder}
                />

                <ComboDropdown
                  nameOfInputField="choice2"
                  placeholder="Chicken Chalupa"
                  name="choice2"
                  // value={combo.choice2}
                  // onChange={combo1Holder}
                />

                <ComboDropdown
                  nameOfInputField="choice3"
                  placeholder="beefTaco"
                  name="phoneNumber"
                  // value={combo.choice3}
                  // onChange={choice3Handeler}
                />

              </div>
            </ul>
             




          )
        })
      }






 
  </>)
};

export default ComboContainer;

