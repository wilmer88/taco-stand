import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import nachosContext from "../../context/nachosContext"
import NachosDropDown from "../../components/nachosDropDown/NachosDropDown";
import MenuPage from "../../components/modal/MenuPage";



const NachosPage = () => {
    const numeros = [
        {label:"Cheese Nachos(Half)($4.75)", price:8.75},
        {label:"Bean Nachos(Half)($6.00)", price:6},
       ];

    const nachos = useContext(nachosContext);
    const {setNacho} = useContext(nachosContext);
    const [nachosFields, setNachosFields] = useState([]);


    const removeNachos = (index) => {
        const nachosToDelete=[...nachosFields];
        if(nachosToDelete.length >= 1){
            nachosToDelete.splice(index,1);
            setNachosFields(nachosToDelete);
            setNacho(nachos); 
        }
    }

    const addNachos = (event) => {
        let aNachoaOrder= {
            comboId: nachosFields.length ,
            nachosName: "",
            nachosPrice: 0,
            pineapple:false,
            supreme: false,
            key: nachosFields.length,
        }
        setNachosFields([...nachosFields, aNachoaOrder]);
        setNacho([...nachos.nachos, aNachoaOrder])
    }
    

    const handleNachosChange=(index, e)=>{
        let data = [...nachosFields];
            data[index].nachosName = e.target.options[e.target.selectedIndex].getAttribute("name");
                data[index].nachosPrice = e.target.value
        setNachosFields([...data]);
        setNacho([...data]); 
    }

    const handlePinapplefunc = (index,e)=>{
        let data = [...nachosFields];
        console.log(data[index].pineapple);
        if(data[index].pineapple === true){
            data[index].pineapple = false;
            data[index].nachosPrice = data[index].nachosPrice - 2
            setNachosFields(data);
        }
        
        else if(data[index].pineapple === false){
            data[index].pineapple = true;
            data[index].nachosPrice = 2 + data[index].nachosPrice 
            setNachosFields(data);
        }
        console.log(nachosFields)


    }

    const nachosSupremeHandler= (index,e) =>{
        let data = [...nachosFields];
        console.log(data[index].supreme);
        // data[index][event.target.supreme] = event.currentTargt;
        if(data[index].supreme === true){
            data[index].supreme = false;
            data[index].nachosPrice = data[index].nachosPrice - 2.50
            setNachosFields(data);
        }
        
        else if(data[index].supreme === false){
            data[index].supreme = true;
            data[index].nachosPrice = 2.50 + data[index].nachosPrice 
            setNachosFields(data);
        }
            }




    return (<>

    <div className="section is-justify-content-center	">

    <figcaption className="columns is-mobile is-centered mt-6" style={{ textAlign: "center", background: "lightyellow" }}>
        <div className="card-content">
            <MenuPage
            menuImage={"./images/dipsNachosLaCarta.jpg"}
            />
            
        <Link  to="/orden">
    <button className="button is-small">Back</button>
    
    </Link>
            <p><strong> Nachos:  </strong>Chicken, Beaf, Bean, Chicken And Bean, Chicken And Beef</p>     
            <p><strong>Nachos Supreme: </strong>Served with beans lettuce, soure cream, tomatoes, and guacamole.</p>    
             <p><strong>Nachos Fajita: </strong> Steak, Grilled Chicken, Shrimp, Mix or Tejano. Cooked with bell peppers, onions, and tomatoes.</p>
          <p><strong> * add Supreme 2. 50  </strong> </p> 
             <p> <strong>*add Pineapple 2.00 </strong></p> 
    <button className="button is-success is-small" onClick={(event)=>{addNachos(event)}} > Create New Nachos Order</button>
          </div>
    
    </figcaption>


        
    </div>



    {
        nachosFields.map((nachitos,index) => {

            return (<div key={index} className="container">


< NachosDropDown
selectNachoName={"nachos"}
numeros={numeros}
handlePineapplefunc = {(e)=>handlePinapplefunc(index,e)}
handleSupremeNachos={(e)=>nachosSupremeHandler(index,e)}
onChangeNachos= {e=>handleNachosChange(index,e)}
removeNachos= {()=>removeNachos(index)}
/>

      </div>)



        })
    }




       </>);};

export default React.memo(NachosPage)



