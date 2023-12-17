import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import nachosContext from "../../context/nachosContext"
import NachosDropDown from "../../components/nachosDropDown/NachosDropDown";
import MenuPage from "../../components/modal/MenuPage";



const BurritoPage = () => {
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

    <button className="button is-success is-small" onClick={(event)=>{addNachos(event)}} > Add Nachos</button>
    <MenuPage
            menuImage={"./images/dipsNachosLaCarta.jpg"}
            />
            
        <Link  to="/orden">
    <button className="button is-small">Back</button>
    
    </Link>
         
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

export default React.memo(BurritoPage)