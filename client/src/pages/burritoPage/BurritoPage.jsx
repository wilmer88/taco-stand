import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import nachosContext from "../../context/nachosContext"
import NachosDropDown from "../../components/optionDropDown/OptionDropDown";
import MenuPage from "../../components/modal/MenuPage";
import burritosContext from "../../context/burritoContext";
import Alert from "../../components/Alert/Alert";
import alertContext from "../../context/alertContext";

const BurritoPage = () => {
    console.count("i rerenderd in burrito page");
    const { setAlert } = useContext(alertContext);

    const {setBurritoContext} = useContext(burritosContext);
    const [burritosOrder, setBurittosFields] = useState(
        [{
          burritosOrderId: 1,
          burritosOrderName: "",
          burritosPrice: "0",
          key: 1,
        }]
      );

      const addBurritosFields = (event) => {
        event.preventDefault();
        let newfield = {
      
          burritosOrderId: burritosOrder.length + 1,
          burritoOrderName: "",
          burritosPrice: "0",
          key: burritosOrder.length + 1,
        };
        setBurritoContext([...burritosOrder, newfield]);
        
        setBurittosFields([...burritosOrder, newfield]);
    
        setAlert({ message: "Please make a choice from bellow!", type: "is-success" });
    
      };

      
      const handleBurritoFormChange = (index, event) => {
        let data = [...burritosOrder];
        data[index][event.target.name] = event.target.value;
        setBurittosFields([...data]);
        setBurritoContext([...data]); 
      };

      const burritosSeter= ()=>{
        setTimeout(() => {setBurritoContext(burritosOrder);
        }, 2000);     
      };

      
      const removeBurrito = (index) => {
        const listOfBurritos = [...burritosOrder];
    
        if (listOfBurritos.length >= 1) {
            listOfBurritos.splice(index, 1);
            burritosOrder.splice(index,1)
            setBurittosFields(listOfBurritos);
            setBurritoContext(listOfBurritos);
    ;    }
        
          if (listOfBurritos.length === 1) {
            listOfBurritos[0].burritosPrice = "0";
            setBurittosFields(listOfBurritos);
            setBurritoContext(listOfBurritos);
    
          };
      };

    
    const [navmodal, setNavmodal]= useState("modal");
    const showAboutModel= ()=>{
      if(navmodal === "modal"){
        setNavmodal("modal is-active")
      }
      if(navmodal === "modal is-active"){
        setNavmodal("modal")
      }
    };
  
    const [isopen, setIsopen] = useState(0);
  
    const toggleColapse = ()=>{
      if(isopen===0){
        setIsopen(1)
      };
      if(isopen===1){
        setIsopen(0)
      };
    };
    const numeros = [

        {label:"Luis Burrito(Steak)($11.25)", price:8.75},
        {label:"Luis Burrito(Grilled Chicken)($11.25)", price:8.75},
        {label:"Burrito Supremo(Beef)($6.00)", price:6},
        {label:"Burrito Supremo(Chicken)($6.00)", price:6},
        {label:"Burrito Mi Tierra(Steak)($11.25)", price:6},
        {label:"Burrito Mi Tierra(Chicken)($11.25)", price:6},
        {label:"Burrito De Barbacoa($9.75)", price:6},
        {label:"Burrito Frito(Steak)(11.00)", price:6},
        {label:"Burrito Frito(Chicken)(11.00)", price:6},

        {label:"Burrito Fajita(One)(Steak)(7.25)", price:6},
        {label:"Burrito Fajita(Two)(Steak)(11.75)", price:6},

        {label:"Burrito Fajita(one)(Grillled Chicken)(11.00)", price:6},
        {label:"Burrito Fajita(Two)(Grilled Chicken)(6.75)", price:6},

        {label:"Burrito Fajita(One)(Shrimp)(8.50)", price:6},
        {label:"Burrito Fajita(Two)(Shrimp)(13.25)", price:6},


        {label:"Burrito Fajita(Mix)(One)(7.75)", price:6},
        {label:"Burrito Fajita(Mix)(Two)(12.75)", price:6},


        {label:"Burrito Fajita(Texano)(One)(8.50)", price:6},
        {label:"Burrito Fajita(Texano)(Two)(13.25)", price:6},

        {label:"Burrito Rollos(One)(Steak)(9.25)", price:6},
        {label:"Burrito Rollos(Two)(Steak)(12.75)", price:6},

        {label:"Burrito Rollos(one)(Grillled Chicken)(8.75)", price:6},
        {label:"Burrito Rollos(Two)(Grilled Chicken)(11.75)", price:6},

        {label:"Burrito Rollos(One)(Shrimp)(11.75)", price:6},
        {label:"Burrito Rollos(Two)(Shrimp)(14.75)", price:6},


        {label:"Burrito Rollos(Mix)(One)(10.75)", price:6},
        {label:"Burrito Rollos(Mix)(Two)(13.75)", price:6},


        {label:"Burrito Rollos(Texano)(One)(11.75)", price:6},
        {label:"Burrito Rollos(Texano)(Two)(14.75)", price:6},

       ];


    return (<>

    <div className="section is-justify-content-center">

    <figcaption className="columns is-mobile is-centered mt-6" style={{ background: "lightyellow" }}>
        <div className="card-content">

            
                <p><strong> LUIS BURRITO:  </strong>A 12' flour tortilla stuffed with your choice of steaK or grilled chicken with beans, rice, pco de gallo, burrito salsa and shredded cheese on top. 11.23</p>     
              <p><strong>BURRITO SUPREMO: </strong>Your choice of beef or chicken topped with red salsa, shredded cheese, lettuce, tomato,and sour cream. 6.00</p>    
              
               <p><strong>BURRITO MI TIERRA: </strong> A 12' flour tortilla, your choice of steak or chiken, stuffed ith rice, black beans, lettuce, pico de gallo, sour cream, avocado wrapped in aluminum foil. 11.25</p>
              
               <p><strong>BURRITO DE BARBACOA: </strong> Barvacoa meat served with lettuce, pico de gallo, shredded cheese, and rice. 9.75</p>

                <p><strong>BURRITO FRITO: </strong> Your choice of steak or chicken, and cheese dip on top. 11.00.             </p>
                <hr></hr>

                <div>
               <p><strong>BURRITO FAJITA: </strong> Your choice of meeat, cooked with bell pepper, onions, tomatoes and topped with cheese dip.</p>
               <p>STEAK: One-7.25 or Two-11.75</p>
               <p>GRILLED CHICKEN: One-6.25  Two-10.75</p>
               <p>SHRIMP: One-8.50 Two-13.25</p>
               <p>MIX: One-7.25 Two-12.75</p>
               <p>TEXANO: One-8.50 Two-13.25</p>
                </div>
                <hr></hr>

                <div>
               <p><strong>BURRITO ROLLOS: </strong> Your choice of meeat, cooked with bell pepper, onions, tomatoes and topped with cheese dip.</p>
               <p>STEAK: One-9.75 Two-12.75</p>
               <p>GRILLED CHICKEN: One-8.75 Two-11.75</p>
               <p>SHRIMP: One-11.75 Two-14.75</p>
               <p>MIX: One-10.75 Two-13.75</p>
               <p>TEXANO: One-11.75 Two-14.75</p>
                </div>

                <hr></hr>

    <button className="button is-success is-small" onClick={(event)=>{showAboutModel(event)}} > Create Burrito Order</button>
    <MenuPage
            menuImage={"./images/dipsNachosLaCarta.jpg"}
            />
            
        <Link  to="/orden">
    <button className="button is-small">Back</button>
    
    </Link>
         
          </div>
    
    </figcaption>


        
    </div>
    <aside className={`${navmodal}`} >

  <div className="modal-background"></div>
       <div className="modal-content">
       <div className="container">
       <button className="button is-success is-small is-centerd" onClick={addBurritosFields} > Make an New Burrito Order</button>

    
       </div> 
       <div className="box is-mobile">
     
       <button onClick={showAboutModel} type="button" className="modal-close is-large" aria-label="close"> x</button>


  
       {
        burritosOrder.map((index) => {

            return (
            
            <div key={index} className="container">

< NachosDropDown
selectNachoName={"burritos"}
numeros={numeros}
onChangeNachos= {e=>handleBurritoFormChange(index,e)}
removeNachos= {()=>removeBurrito(index)}
/>   

      </div>)


        })
    }
     
  </div> 
   </div>
  </aside>

       </>);};

export default React.memo(BurritoPage)