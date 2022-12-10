// import AuthContext from '../context/AuthContext';
// import React, {useContext, useState} from 'react';
// import { useNavigate } from "react-router-dom";
// import API from "../utils/API"
// import alertContext from '../context/alertContext';
import Licomponent from "../../components/LiComponent";

import {useState} from "react";
import API from "../../utils/API";

    const SearchOrderPage = ()=> {
 
        const pxhi = { backNfont:{ fontSize: "25px", background: "lightyellow" }};
         const [searchedOrder, setSearchOreder] = useState({
            nombreDeOrden: ""
          });

          const [searchResult, setSearchresult] = useState({
           result: []
          });
          
         const handelSearchChange = event => {
            const { value} = event.target;
            setSearchOreder({nombreDeOrden: value});
         };

         const handleSubmit = (e) =>{
            e.preventDefault();
            API.apiSearch(searchedOrder.nombreDeOrden).then((searchFound)=>{
               setSearchresult(searchFound.data)
            }).catch((err) =>{
               console.log(err)
               }); };

        return (<>
         
         <form>
      <div className="column is-mobile is-three-fifths is-offset-one-fifth .is-narrow-desktop" style={pxhi.fonte} > 
      <div className='box' >
         <label className="label has-text-centered"style={pxhi.backNfont}  >Search/ Buscar</label>
      <input 
      onChange={handelSearchChange}
      name="nombreDeOrden"
      className="input" 
      value= {searchedOrder.nombreDeOrden}
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

      <section className="container has-text-centered" >
      {<div className="container is-align-self-auto is-size-7  mb-6">
      {searchResult.length ? (searchResult.map( res =>(
         <Licomponent key= {res._id} {...res} />
      ))
      ): (<h1 style={{textAlign: "center" , fontSize: "22px", background: "lightyellow"}}>msg: search by name <hr></hr>msg: busque por nombre</h1>
      )}
      </div>}
      </section>  
         </>)
}

export default SearchOrderPage;