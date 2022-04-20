import {useForm} from "react-hook-form";

import React from "react";

const FindPage = () => {

    const {register, handleSubmit} = useForm()
   const onSubmit = (data) => {

    }
    return(
        <form  onSubmit={handleSubmit(onSubmit)}>
            <input style={{fontSize: "40px"}} ref={{...register("test",{required: true})}} type="file" name="pic"/>
            <button style={{fontSize: "40px"}}>submit</button>
        </form> 
    )



}

  
  export default FindPage
  





// // import UserContext from '../userContext';
// // import query from 'express/lib/middleware/query';
// import { response } from 'express';
// import React, { useEffect, useState } from 'react';
// import LiComponent from '../components/LiComponent';
// // import UserContext from '../userContext';
// import API from "../utils/API";
// // import React from 'react';

// const FindPage = () => {
//   // state = {
//   //   ordenez:[],
//   //   busqueda: []
//   // // }
//   // const [search, setSearch] = useState([]);
//   // const [orden, setOrden] = useState([]);

//   // useEffect(() => {

//   //   API.getOrdens().then(response  => setSearch(response.data) 
//   //       )
//   //       .catch((err) =>{ 
//   //         console.log(err)
//   //       });
//   // }, []);

//   // setOrden(search)

// //  let myorden =[]
// //   const handlimput = (e) => {
// //     const value = e.target.value;
   
// //     console.log(value)
// //     console.log(search)
// //     // myorden = search.filter(nombreDeOrden.includes(value))

// //      console.log(myorden)
   
//   // setOrden(myorden)
   

   
//   // }

//   return (
//     <>


//       <div>


//         <div className='columns is-mobile'>
//           <div className="column is-two-fifth"></div>
//           <div className="column is-three-quarters-mobile" >
//             <h1 style={{ textAlign: "center" }}><strong> Busce Orden </strong></h1>
//             <form>
//             <div className="field has-addons">
//               <div className="control">
//                 <input className="input"
//                 id="search"
//                 name='search'
               
//                 onChange={handlimput}
             
                
//                   type="text"
//                   placeholder="busce orden"

//                 />
//               </div>
//               <div className="control">
//                 <button type="submit" className="button is-info">
//                   Buscar
//                 </button>
//               </div>
//             </div>

//             </form>
       

//           </div>

          

//           <div className="column is-two-fifth"></div>
//         </div>
//       </div>
//       {/* {
//         myorden.map(element =>(
//           <LiComponent key= {element._id} {...element}/>
//           ))
//         } */}
    
//     </>     

//   )
// }

// export default FindPage;
