import React, { useContext, useState, useCallback} from "react";
import { Link } from "react-router-dom";
import MenuPage from "../../components/modal/MenuPage";
import ComboDropdown from '../../components/comboDropdown/ComboDropdown';
import Alert from "../../components/Alert/Alert";
import alertContext from "../../context/alertContext";
import OrderDataContext from "../../context/orderDataContext";

const ComboPage = () => {
  
    console.count("i rerenderd in Combopage");

    const [navmodal, setNavmodal]= useState("modal");
    const {OrderContextObj,setOrderDataContext}= useContext(OrderDataContext);
    const { setAlert } = useContext(alertContext);
    const [inputFields, setInputFields] = useState([]);

    const comboSeter= ()=>{
      // setTimeout(() => {
        setOrderDataContext(inputFields);
      // }, 1000);     
    };
  
    const removeCombo = (index) => {
      const newList = inputFields.filter((_,i)=> i !== index);
      setInputFields(newList);
      setOrderDataContext(...OrderContextObj.burritos,newList);
    };
  
    const handleSupremeChange = (index, event) => {
      let data = [...inputFields];
      data[index].supreme = event.target.checked;
      setInputFields(data);
    };
  
    const handleFormChange = useCallback((index, event) => {
      setInputFields(currenetFields => {
      const newData = [...currenetFields];
      newData[index][event.target.name] = event.target.value;
      return newData;});
      },[]);
  
    const addFields = () => {
      const newfield = {
        comboId: inputFields.length + 1,
        comboPrice: "0",
        supreme: false,
        choice1: "",
        choice2: "",
        choice3:"",
        key: inputFields.length + 1,
      };
      setInputFields(prevFields => {
        const allFields = [newfield, ...prevFields];
        setOrderDataContext([...OrderContextObj.burritos, newfield]);
        return allFields;
      });
      setAlert({ message: "Please make a selection from bellow", type: "is-success" });
    };
    
    const showAboutModel= ()=>{
      if(navmodal === "modal"){
        setNavmodal("modal is-active")
      };
      if(navmodal === "modal is-active"){
        setNavmodal("modal")
      };
    };

    const addComboToOrder = () => {
      comboSeter(); // Ensure combo is set before updating orderDataContextArray
      showAboutModel();
      setAlert({ message: "ADDED ITEM'S TO ORDER", type: "is-success" });


    };
    

    return (<>

    <div className="section is-justify-content-center">

    <figcaption className="columns is-mobile is-centered" style={{ background: "lightyellow" }}>
        <div className="card-content">

                <p><strong> LUIS BURRITO:  </strong>A 12' flour tortilla stuffed with your choice of steaK or grilled chicken with beans, rice, pco de gallo, burrito salsa and shredded cheese on top. 11.23</p>     

                <hr></hr>

                <div>
               <p><strong>BURRITO FAJITA: </strong> Your choice of meeat, cooked with bell pepper, onions, tomatoes and topped with cheese dip.</p>
   
                </div>
                <hr></hr>

                <div>
               <p><strong>BURRITO ROLLOS: </strong> Your choice of meeat, cooked with bell pepper, onions, tomatoes and topped with cheese dip.</p>
            
                </div>

                <hr></hr>


    <button className="button is-success is-small" onClick={(event)=>{showAboutModel(event)}} >Combos</button>
    <MenuPage menuImage={"./images/combosQuesadillaSoupsNSaladsDesserts.jpg"} />
            
        <Link  to="/orden"> <button className="button is-small">Back</button> </Link>

          </div>
    
    </figcaption>

    <aside className={`${navmodal}`} >

<div className="modal-background"></div>
     <div className="modal-content">
     <div className="container">
        
     <div className="box is-mobile">
   
   <button onClick={showAboutModel} type="button" className="modal-close is-large" aria-label="close"> x</button>

   <div className="container">
    <MenuPage menuImage={"./images/combosQuesadillaSoupsNSaladsDesserts.jpg"} />

   <h4 className="mb-0">   ADD SUPREME FOR 2.50</h4>
   <div> <h4 className="mb-0">CHOOSE FROM: Beans, cheese, beef and shreded chicken.</h4> </div>

   <p>All combos are served with rice and beans.</p>

   </div>

 <div className="container">
{
  inputFields.length < 1 ? (
<div className=" container"> 
<button type="submit" className="button is-success is-small" onClick={ addFields} style={{ alignContent: "center", marginLeft: "5px"}}>Start Combo</button>
</div>
):

<div className=" container"> 
<h3>Please Make selections bellow!</h3>
</div>

}

{ <Alert /> }

 </div>

   {
  inputFields.map((input, index) => {
    return (

      <div className="container" key={index}>
        <hr></hr>

          <div className="container" style={{ textAlign: "center", background: "tan" }}>

            <label className="radio">
              <input
                type="radio"
                name={"comboPrice"}
                onChange={event => handleFormChange(index, event)}
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

              <div className="container" style={{ textAlign: "center"}}>

                  <div className="supdiv">
                <input
                  type="checkbox"
                  name="supreme"
                  onChange={event =>{ handleSupremeChange(index, event);comboSeter()}}
                  value={""}

                />
              <strong>Make Supreme</strong> </div>

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
                    value={input.choice3}
                  onChange={event =>{handleFormChange(index, event);comboSeter(); }}
                    />
                  } 
                  </div>  
                  }
                              <div style={{ textAlign: "center"}}>

          {
            input.comboPrice !== "0" && <button className="button is-danger is-small" onClick={() => { removeCombo(index) }} style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px", marginBottom: "2px" }}>Remove Combo</button>
          }


          {
            input.comboPrice !== "0" && inputFields.length - 1 === index && inputFields.length < 10 &&
            <>
            <button type="submit" className="button is-info is-small" onClick={()=>{addComboToOrder();}} style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px" }}>Add Combo(s) to Order</button>
              <button type="submit" className="button is-success is-small"  onClick={()=>{addFields()}}  style={{ alignContent: "center", marginLeft: "5px", marginTop: "15px" }}>Create New Combo</button>
            </>
          }

      </div>

      </div>

    )
  })
}
 
    </div> 
     </div> 

 </div>
</aside>
        
    </div>

       </>);
       };

export default (ComboPage);