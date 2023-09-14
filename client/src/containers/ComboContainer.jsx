import { useContext, useState } from "react";
import ComboDropdown from '../components/comboDropdown/ComboDropdown';
import ComboContext from "../context/ComboContext";

import Radio from '../components/radio/Radio';


const ComboContainer = () => {



  const {setChoice1,setChoice2, choice1,choice2} = useContext(ComboContext);
  const {comboPrice} = useContext(ComboContext);




  const [orderComboArray, setOrderCombo] = useState([
    {
      
      comboId:1,
     comboPrice:"",
      supreme: false,
      choice1:"",
      choice2:"",
      key: 1,
    
  }
  ]);


  const [comboObject, setComboObject] = useState(
    {
      
      comboId:orderComboArray.length+1,
     comboPrice:"",
      supreme: false,
      choice1:"",
      choice2:"",
      key: orderComboArray.length+1,
    
  }

  )


  const handelChoice1 = (e) => {
    e.preventDefault();

    const choiceOne = e.target.value;
    setChoice1({choice1: choiceOne});
    setComboObject(comboObject)
    console.log(choice1)
  };
  const handelChoice2 = (e) => {
    e.preventDefault();

      const choicetwo = e.target.value;
      setChoice2({choice2: choicetwo})
      console.log(choice2)
    };
  // const choice2Handeler = (event) => {
  //   const { name, value } = event.target;
  //   combo.setChoice2({ ...combo.choice2, [name]: value })
  // };
  // const choice3Handeler = (event) => {
  //   const { name, value } = event.target;
  //   combo.setChoice3({ ...combo, [name]: value })
  // };

  const addCombo = e => {
    console.log(comboPrice)
    e.preventDefault();


    setOrderCombo(s => {

      return [
       ...s, 
       {
      
        comboId:orderComboArray.length+1,
       comboPrice:"",
        supreme: false,
        choice1:"",
        choice2:"",
        key: orderComboArray.length+1,
      
    }
      ]
    })
    


    console.log(orderComboArray)


  }

  return (<>
    <figcaption style={{ textAlign: "center", background: "lightyellow" }}>


      <h3 style={{ marginBottom: "10px" }}> <strong>Combos</strong></h3>
      <div> <h6 style={{ marginBottom: 0 }}>CHOOSE FROM:</h6> <p>Beans, cheese, beef and shreded chicken.</p> </div>
      <h6 style={{ marginBottom: 0 }}>   ADD SUPREME FOR 2.50</h6>
      <p style={{ marginBottom: 0 }}>All combos are served with rice and beans.</p>  
      

    </figcaption>


  
      {
        orderComboArray.map((oneCombo,key) => {
          return (
     
            <ul key={key}>
                  <Radio/>
     
              <div className="is-align-content-center columns mt-3">

                <ComboDropdown
                choiceName="Choice#1"
                  placeholder="Tamal"
                  name="choice1"
               

                  
            
                  onChange={handelChoice1}
                />

                <ComboDropdown
                  choiceName="Choice#2"
                  placeholder="Chicken Chalupa"
                  name="choice2"
              
                  onChange={handelChoice2}
                />

                <ComboDropdown
                   choiceName="Choice#3"
                  placeholder="beefTaco"
                  name="phoneNumber"
                  // value={combo.choice3}
                  // onChange={choice3Handeler}
                />
                {
              orderComboArray.length -1 === key && orderComboArray.length < 10 &&
                <button className="button is-success is-small" onClick={addCombo} style={{ alignContent: "center", marginLeft: "5px", marginTop: "23px" }}>+</button>
                }
                {
                  orderComboArray.length> 1 &&
                  <button className="button is-danger is-small" style={{ alignContent: "center", marginLeft: "5px", marginTop: "23px" }}>Remove</button>
                }

              </div>
            </ul>
             




          )
        })
      }






 
  </>)
};

export default ComboContainer;

