// import { useContext, useState } from "react";
// import ComboContext from "../../context/ComboContext";

// const Radio = (props) => {
//   const [radioState, setRadioState]= useState("");

//   const [comboPrice,setcomboPrice] = useState("");
//   const handleprice= () => {
//     setRadioState("9");
//     console.log(comboPrice)
//   };
//   const handleprice2= (e) => {
//     setcomboPrice("10");
//     console.log(comboPrice)
//   };



    
//       return (<>
  
//       <div style={{ textAlign: "center", background: "tan" }}>
//                   <label className="radio">
//                     <input
//                      type="radio"
//                      name={props.name}
//                      value= {"9"}
//                      onChange={handleprice}
//                      checked={radioState === "9"}
//                     />
//                     CHOOSE(2)9.25
//                   </label>
//                   <label className="radio">
//                     <input type="radio"
//                      name={props.name}
//                      value= {"10"}
//                      onChange={handleprice2}
//                      checked={comboPrice ==="10"}
   
//                       />
//                     CHOOSE (3) 10.25
//                   </label>
//                 </div>
  
          
//          </>)
//          };
  
//   export default Radio;