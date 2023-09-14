import { useContext, useState } from "react";
import ComboContext from "../../context/ComboContext";

const Radio = (props) => {
  const [radioState, setRadioState]= useState("");

  const {setMyComboPrice,comboPrice} = useContext(ComboContext);
  const handleprice = (e) => {



    setRadioState(e.target.value);
    setMyComboPrice({comboPrice: e.target.value});
    console.log(comboPrice)
  };



    
      return (<>
  
      <div style={{ textAlign: "center", background: "tan" }}>
                  <label className="radio">
                    <input
                     type="radio"
                     name={props.name}
                     value= {"9"}
                     onChange={handleprice}
                     checked={radioState === "9"}
                    />
                    CHOOSE(2)9.25
                  </label>
                  <label className="radio">
                    <input type="radio"
                     name={props.name}
                     value= {"10"}
                     onChange={handleprice}
                     checked={radioState ==="10"}
   
                      />
                    CHOOSE (3) 10.25
                  </label>
                </div>
  
          
         </>)
         };
  
  export default Radio;