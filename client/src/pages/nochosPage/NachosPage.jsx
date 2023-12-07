import React, { useContext, useState } from "react";
import NachosDropDown from "../../components/nachosDropDown/NachosDropDown";
import { Link } from "react-router-dom";



const NachosPage = () => {
    const [nachosFields, setNachosFields] = useState([{
        comboId: 1,
        nachosName: "",
        nachosPrice: "0",
        supreme: false,
        key: 1,
      }]);

      
    //   const handleSupremeNachos = (index, event) => {
    //     const supremeNachosHolder = [...nachosFields]



    // }

    return (<>


    <figcaption className="columns is-mobile is-centered mt-6" style={{ textAlign: "center", background: "lightyellow" }}>
        <div className="card-content">
            <p><strong> Nachos:  </strong>Chicken, Beaf, Bean, Chicken And Bean, Chicken And Beef</p>     
            <p><strong>Nachos Supreme: </strong>Served with beans lettuce, soure cream, tomatoes, and guacamole.</p>    
             <p><strong>Nachos Fajita: </strong> Steak, Grilled Chicken, Shrimp, Mix or Tejano. Cooked with bell peppers, onions, and tomatoes.</p>
          <p><strong> * add Supreme 2.50  </strong> </p> 
             <p> <strong>*add Pineapple 2.00 </strong></p> 

             <Link  to="/orden">
    <button className="button is-success is-small">Back</button>
    </Link>


     
          </div>
    
    </figcaption>

    {
        nachosFields.map((nachos,index) => {

            return ( 

                <div className="container" key={index}>
                <NachosDropDown/>
                </div>

            

            )
        })
    }


  

    





       </>);};

export default NachosPage