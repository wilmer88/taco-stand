import React, { useCallback, useContext, useState } from "react";
// import ComboDropdown from '../../components/comboDropdown/ComboDropdown';
import ComboContext from "../../context/ComboContext";
import alertContext from "../../context/alertContext";
// import Alert from "../../components/Alert/Alert";
import { Link } from "react-router-dom";
import MenuPage from "../../components/modal/MenuPage";



const ComboContainer = () => {
  console.count("i rerenderd in combo container");

  const {setCombo, combo}= useContext(ComboContext);
  const { setAlert } = useContext(alertContext);
  const [isopen, setIsopen] = useState(0);

  const [inputFields, setInput] = useState(
    [{
      comboId: 1,
      comboPrice: "0",
      supreme: false,
      choice1: "",
      choice2: "",
      key: 1,
    }]);

    const toggleColapse = ()=>{
      if(isopen===0){
        setIsopen(1)
      };
      if(isopen===1){
        setIsopen(0)
      };
    };

  // const comboSeter= ()=>{
  //   setTimeout(() => {
  //     // setCombo(inputFields);
  //   }, 2000);     
  // };

  // const removeCombo = (index) => {
  //   const newList = inputFields.filter((_,i)=> i !== index);
  //   setInput(newList);
  // };

  // const handleSupremeChange = (index, event) => {

  //   let data = [...inputFields];
  //   data[index].supreme = event.target.checked;
  //   setInput(data);

  // };

  // const handleFormChange = useCallback(
  //   (index, event) => {
  //     let data = [...inputFields];
  //     data[index][event.target.name] = event.target.value;
  //     setInput(data);
  //     setCombo(data); 
  //   },[inputFields,setCombo]
  // );

  // const addFields = (event) => {
  //   event.preventDefault();
  //   let newfield = {
  //     comboId: inputFields.length + 1,
  //     comboPrice: "0",
  //     supreme: false,
  //     choice1: "",
  //     choice2: "",
  //     key: inputFields.length + 1,
  //   };
  //   setInput([...inputFields, newfield]);
    
  //   setCombo([...combo, newfield]);

  //   setAlert({ message: "Please make a choice from bellow!", type: "is-success" });

  // };

  // console.log(inputFields);

  return (<>

    <div className="card mb-5" style={{ background: "lightyellow" }}>

      <header className="card-header">
        <h3 className="card-header-title is-4" style={{justifyContent:"center"}}>
        Combos
          
          </h3> 

          <div className="dropdown-trigger"> 
  <button onClick={toggleColapse}>
    <span className="icon">
                  <i className="fas fa-angle-down"  aria-hidden="false"></i>
              </span>
        </button>
  </div>
          </header>

          { isopen ===1 &&
          <div className="card-content">
            
      <div> <h6 className="mb-0">CHOOSE FROM:</h6> <p> Our deliciously prepared options of, Shreded Chicken, Cheese, Beef and/or Beans.</p> </div>
      <h6 className="mb-0"> (Optional) ADD SUPREME FOR 2.50</h6>
      <p>All combos are served with rice and beans.</p>

      <Link  to="/comboPage">
                <button  className="button is-success is-small">View and Add Combos</button>
                 </Link>
    <MenuPage menuImage={"./images/combosQuesadillaSoupsNSaladsDesserts.jpg"} />

            </div>
          
          
          }

    </div>

  </>)
};

export default (ComboContainer);