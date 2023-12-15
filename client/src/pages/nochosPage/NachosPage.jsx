import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import nachosContext from "../../context/nachosContext"
import NachosDropDown from "../../components/nachosDropDown/NachosDropDown";



const NachosPage = () => {

    const nachos = useContext(nachosContext);
    const {setNacho} = useContext(nachosContext);


    const [nachosFields, setNachosFields] = useState([]);

    //   const handleSupremeNachos = (index, event) => {
    //     const supremeNachosHolder = [...nachosFields]
    // }


    const nachosSupremeHandler= (index,event) =>{
        // console.log(index)
        let data = [...nachosFields];
        console.log(data[index].supreme);

        // data[index][event.target.supreme] = event.currentTarget;

        if(data[index].supreme === true){
            data[index].supreme = false;
            data[index].nachosPrice = data[index].nachosPrice - 2

            setNachosFields(data);
            console.log(data)

        }

    else if(data[index].supreme === false){
            data[index].supreme = true;
            data[index].nachosPrice = 2 + data[index].nachosPrice 

            setNachosFields(data);
            console.log(data)

        }




        // console.log(data)


        
    }


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
            supreme: false,
            key: nachosFields.length,

        }
        
        setNachosFields([...nachosFields, aNachoaOrder]);

        setNacho([...nachos.nachos, aNachoaOrder])
        console.log(nachosFields)
    }

    const handleNachosChange=(index, event)=>{

        let data = [...nachosFields];

            data[index].nachosName = event.target.value;
            if(data[index].nachosName === "Cheese Nachos(Half)($4.75)"){
                data[index].nachosPrice = 4.75
                console.log("chees nachos")
            }

        console.log(data)
        setNachosFields([...data]);
        setNacho([...data]); 
        // let data = [...nachosFields]


    }




    return (<>
    <div className="section is-justify-content-center	">

    <figcaption className="columns is-mobile is-centered mt-6" style={{ textAlign: "center", background: "lightyellow" }}>
        <div className="card-content">
            
        <Link  to="/orden">
    <button className="button is-small">Back</button>
    
    </Link>
            <p><strong> Nachos:  </strong>Chicken, Beaf, Bean, Chicken And Bean, Chicken And Beef</p>     
            <p><strong>Nachos Supreme: </strong>Served with beans lettuce, soure cream, tomatoes, and guacamole.</p>    
             <p><strong>Nachos Fajita: </strong> Steak, Grilled Chicken, Shrimp, Mix or Tejano. Cooked with bell peppers, onions, and tomatoes.</p>
          <p><strong> * add Supreme 2. 50  </strong> </p> 
             <p> <strong>*add Pineapple 2.00 </strong></p> 
    <button className="button is-success is-small" onClick={(event)=>{addNachos(event)}} > Add Nachos</button>
          </div>
    
    </figcaption>


        
    </div>



    {
        nachosFields.map((nachitos,index) => {

            return (<div key={index} className="container">

< NachosDropDown
handleSupremeNachos={(event)=>nachosSupremeHandler(index,event)}
value= {nachitos.nachosName}
onChange= {event=>handleNachosChange(index,event)}
removeNachos= {()=>removeNachos(index)}
/>

      </div>)



        })
    }







  

    





       </>);};

export default NachosPage