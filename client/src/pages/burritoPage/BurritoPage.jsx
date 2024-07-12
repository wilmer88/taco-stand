import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import MenuPage from "../../components/modal/MenuPage";
// import Alert from "../../components/Alert/Alert";
// import alertContext from "../../context/alertContext";
import OrderDataContext from "../../context/orderDataContext";
import BurritosDropdown from "../../components/burritosDropdown/burritosDropdown";

const BurritoPage = () => {
  
  const { OrderContextObj, setOrderDataContext } = useContext(OrderDataContext);
  const [burritosOrder, setBurritosOrder] = useState(OrderContextObj.burritos || []);  

  const handleBurritoFormChange = (index, event) => {
    const { name, options, selectedIndex } = event.target;
    const text = options[selectedIndex].text;
    const value = parseFloat(options[selectedIndex].value);
  
    console.log(`Handling form change for index ${index}`);
    console.log(`Field: ${name}, Selected Text: ${text}, Value: ${value}`);
  
    if (isNaN(value)) {
        console.error('Parsed value is NaN, check your value inputs.');
        return;  // Abort the update if value is NaN
    }
  
    const updatedFields = burritosOrder.map((burrito, idx) => {
        if (idx === index) {
            return { ...burrito, [name]: value, burritosOrderName: text, price: value };
        }
        return burrito;
    });
  
    console.log('Updated burritosOrder:', updatedFields);
  
    setBurritosOrder(updatedFields);
    setOrderDataContext(prevState => ({
        ...prevState,
        burritos: updatedFields
    }));
  };
  


  
  
  const addBurritosFields = (event) => {
    event.preventDefault();
    const newField = {
      burritosOrderId: OrderContextObj.burritos.length + 1,
      burritosOrderName: "",
      burritosPrice: 0,
      key: `burrito-${OrderContextObj.burritos.length + 1}`,  // Use a unique key
    };
    setOrderDataContext(prevState => ({
      ...prevState,
      burritos: [...prevState.burritos, newField]
    }));
  };
  


  const removeBurrito = (index) => {
    const updatedFields = OrderContextObj.burritos.filter((_, idx) => idx !== index);
    setOrderDataContext(prevState => ({
      ...prevState,
      burritos: updatedFields
    }));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(prev => !prev);

  useEffect(() => {
    if (OrderContextObj.burritos && OrderContextObj.burritos.length > 0) {
        setBurritosOrder(OrderContextObj.burritos);
    }
}, [OrderContextObj.burritos]);
  


  const numeros = [



    {label:"Luis Burrito(Steak)($11.25)", price:8.75},
    {label:"Luis Burrito(Grilled Chicken)($11.25)", price:11.25},
    {label:"Burrito Supremo(Beef)($6.00)", price:6.00},
    {label:"Burrito Supremo(Chicken)($6.00)", price:6.00},
    {label:"Burrito Mi Tierra(Steak)($11.25)", price:11.25},
    {label:"Burrito Mi Tierra(Chicken)($11.25)", price:11.25},
    {label:"Burrito De Barbacoa($9.75)", price:9.75},
    {label:"Burrito Frito(Steak)(11.00)", price:11.00},
    {label:"Burrito Frito(Chicken)(11.00)", price:11.00},

    {label:"Burrito Fajita(One)(Steak)(7.25)", price:7.25},
    {label:"Burrito Fajita(Two)(Steak)(11.75)", price:11.75},

    {label:"Burrito Fajita(one)(Grillled Chicken)(11.00)", price:11.00},
    {label:"Burrito Fajita(Two)(Grilled Chicken)(6.75)", price:6.75},

    {label:"Burrito Fajita(One)(Shrimp)(8.50)", price:8.50},
    {label:"Burrito Fajita(Two)(Shrimp)(13.25)", price:13.25},


    {label:"Burrito Fajita(Mix)(One)(7.75)", price:7.75},
    {label:"Burrito Fajita(Mix)(Two)(12.75)", price:12.75},


    {label:"Burrito Fajita(Texano)(One)(8.50)", price:8.50},
    {label:"Burrito Fajita(Texano)(Two)(13.25)", price:13.25},

    {label:"Burrito Rollos(One)(Steak)(9.25)", price:9.25},
    {label:"Burrito Rollos(Two)(Steak)(12.75)", price:12.75},

    {label:"Burrito Rollos(one)(Grillled Chicken)(8.75)", price:8.75},
    {label:"Burrito Rollos(Two)(Grilled Chicken)(11.75)", price:11.75},

    {label:"Burrito Rollos(One)(Shrimp)(11.75)", price:11.75},
    {label:"Burrito Rollos(Two)(Shrimp)(14.75)", price:14.75},


    {label:"Burrito Rollos(Mix)(One)(10.75)", price:10.75},
    {label:"Burrito Rollos(Mix)(Two)(13.75)", price:13.75},


    {label:"Burrito Rollos(Texano)(One)(11.75)", price:11.75},
    {label:"Burrito Rollos(Texano)(Two)(14.75)", price:14.75},  ];


  return (
    <>
      <footer id="dipnav" className="navbar is-fixed-bottom is-align-self-center">
        <button className="button is-success is-small" onClick={toggleModal}>Create/ Edit Burrito</button>
        <MenuPage menuImage={"./images/dipsNachosLaCarta.jpg"} />
        <Link to="/orden">
          <button className="button is-small">Back</button>
        </Link>
      </footer>

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
</div>  
                 </figcaption>
      </div>

      <aside className={`modal ${isModalOpen ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={toggleModal}></div>
        <div className="modal-content">
          <div className="container">

            <button className="button is-info is-small is-centered" onClick={addBurritosFields}>Make a New Burrito Order</button>
            <Link to="/orden">
          <button className="button is-small">Back</button>
        </Link>
          </div>
          <div className="box is-mobile">
            <button onClick={toggleModal} type="button" className="modal-close is-large" aria-label="close">x</button>
            {OrderContextObj.burritos.map((burrito, index) => (
    <div key={burrito.burritosOrderId} className="container">
           
<BurritosDropdown
    selectNachoName="price"
    numeros={numeros}
    value={burrito.price}  // Assuming you want to control selection based on price
    onChangeNachos={(e) => handleBurritoFormChange(index, e)}
    removeNachos={() => removeBurrito(index)}
    deleteBurrito={()=> removeBurrito(index) }
/>


                </div>
              ))
            }
          </div>
        </div>
      </aside>
    </>
  );
};

export default React.memo(BurritoPage);
