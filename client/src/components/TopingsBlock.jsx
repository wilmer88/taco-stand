import  React, {useState} from "react";
import ToppingField from "./ToppingField";

const TopingsBlock = (topingName,topingCount,picture,sumar,restar) => {
        const [topingData, setOrderData] = useState({
            cebolla:0,
            cilantro:0
          });
                    const cebollaIncrement = (event) =>{
            event.preventDefault()
            setOrderData({...topingData, cebolla: topingData.cebolla  + 1 })
            };
            const cebollaDecrement = (event) =>{
              event.preventDefault()
              if(topingData.cebolla >= 1){
                setOrderData({...topingData, cebolla: topingData.cebolla  - 1 })
              }
              };

      // const [topingData, setOrderData] = useState({
      //       cebolla:0,
      //       cilantro:0
      //     });
      //     const cebollaIncrement = (event) =>{
      //       event.preventDefault()
      //       setOrderData({...orderData, cebolla: orderData.cebolla  + 1 })
      //       };
      //       const cebollaDecrement = (event) =>{
      //         event.preventDefault()
      //         if(orderData.cebolla >= 1){
      //           setOrderData({...orderData, cebolla: orderData.cebolla  - 1 })
      //         }
      //         };
      //         const cilantroIncrement = (event) =>{
      //           event.preventDefault()
      //           setOrderData({...orderData, cilantro: orderData.cilantro  + 1 })
      //           };
      //           const cilantroDecrement = (event) =>{
      //             event.preventDefault()
      //             if(orderData.cilantro >= 1){
      //               setOrderData({...orderData, cilantro: orderData.cilantro  - 1 })
      //             }
                 
      //             };




return(<>
  
       </>)
       }
export default TopingsBlock;


      