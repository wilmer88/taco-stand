import React from 'react';
import ComboDropdown from '../components/comboDropdown/ComboDropdown';
import { useState } from "react";


const ComboContainer = (props) => {

  const [orderCombo , setOrderCombo] = useState([]);

  const combo ={
    comboId: orderCombo.length + 1,
    choicePrice: 0,
    supreme: false,
    choice1: "Beef Taco",
    choice2: "chicken Chimichanga",
  }

  const choiceHandleChange = (event) => {
    const { value } = event.target;
    setOrderCombo(combo.choicePrice= parseInt(value))
    console.log(combo.choicePrice);
    console.log(combo);
  };


    return (<>
    <li>

    </li>
    <div style={{ textAlign: "center", background: "tan" }}>
                <label className="radio">
                  <input
                   type="radio"
                   name="choicePrice"
                    value= {9}
                    checked= {orderCombo === 9}
                  onChange={choiceHandleChange} />
                  CHOOSE(2)9.25
                </label>
                <label className="radio">
                  <input type="radio"
                   name="choiceNumber"
                   value= {10}
                   checked= {orderCombo === 10}
                   onChange={choiceHandleChange}
                    />
                  CHOOSE (3) 10.25
                </label>
              </div>

              <div className="is-align-content-center columns mt-3">

                <ComboDropdown
                  choiceNumber="Choice #1"
                  // onChange={tacoNdrinksHandleChange}
                   />

                <ComboDropdown
                  choiceNumber="Choice #2"
                  // onChange={tacoNdrinksHandleChange}
                  />

                   <ComboDropdown
                  choiceNumber="Choice #3"
                  // onChange={tacoNdrinksHandleChange}
                  />

                <button className="button is-success is-normal" onClick={props.createComboForm} style={{ alignContent: "center", marginLeft: "5px", marginTop: "24px" }}>+</button>
              </div>

       </>)
       };

export default ComboContainer;