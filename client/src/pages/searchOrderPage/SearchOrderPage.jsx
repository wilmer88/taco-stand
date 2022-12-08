// import AuthContext from '../context/AuthContext';
// import React, {useContext, useState} from 'react';
// import { useNavigate } from "react-router-dom";
// import API from "../utils/API"
// import alertContext from '../context/alertContext';
import {useState} from "react";
import API from "../../utils/API";




    const SearchOrderPage = ()=> {
 
        const pxhi = { backNfont:{ fontSize: "25px", background: "lightyellow" }};

          const [searchedOrder, setSearchOreder] = useState({
            nombreDeOrden: ""
          });
          
         const handelSearchChange = event => {
            const { value} = event.target;
            setSearchOreder({nombreDeOrden: value});
         };

         const handleSubmit = (e) =>{
            e.preventDefault();
           
            API.apiSearch(searchedOrder.nombreDeOrden).then((searchFound)=>{
               
           
               

            }).catch((err) =>{
        console.log(err)
    
 
       });

         };

          
        return (
         <>
         
         <form>
                <div className="column is-mobile is-three-fifths is-offset-one-fifth .is-narrow-desktop" style={pxhi.fonte} > 

<div className='box' >
   <label className="label has-text-centered"style={pxhi.backNfont}  >Search/ Buscar</label>


<input 
onChange={handelSearchChange}
name="nombreDeOrden"
className="input" 
value= {searchedOrder.nombreDeOrden}
type="text"
placeholder="Nombre de orden/ Order Name"
/>


<br></br>
<br></br>
<button className="button is-info"
type="button"
onClick={handleSubmit}

>
Search
</button>





</div>

</div> 
</form>
         
         
         </>
 )

}

export default SearchOrderPage;