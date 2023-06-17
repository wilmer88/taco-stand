import "./SearchOrderPage.css";
import alertContext from '../../context/alertContext';
import Licomponent from "../../components/LiComponent";
import {useState, useContext} from "react";
import API from "../../utils/API";

    const SearchOrderPage = ()=> {
      const {setAlert} = useContext(alertContext); 
        
      const [searchedOrder, setSearchOreder] = useState({
        nombreDeOrden: ""
      });

          const [searchResult, setSearchresult] = useState({
           result: []
          });
          
         const handelSearchChange = event => 
         {
            const { value} = event.target;
            setSearchOreder({nombreDeOrden: value});
         };

         const handleSubmit = (e) =>
         {
            if(searchedOrder.nombreDeOrden !== "")
            {
               e.preventDefault();                               
               API.apiSearch(searchedOrder.nombreDeOrden).then((searchFound)=>
               {
                 
                  if(searchFound.data.length === 0 ){
                     setSearchresult([])
                     
                     setAlert({message:"Faild to find order with given name.", type:"is-warning"});
                                    
                  }else{
                     setAlert({message:"Found searched order", type:"is-success"});
                     setSearchresult(searchFound.data);                   
                  }
           
               }).catch((err) =>
               {
                 console.log(err)
               });
            }          
         };


        return (<>
         
         <form>
      <div className="column is-mobile is-three-fifths is-offset-one-fifth .is-narrow-desktop" > 
      <div className='box' >
         <label id='searchPageLabel' className="label has-text-centered" >Search/ Buscar</label>
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

      <section  className="container has-text-centeredcontainer is-align-self-auto is-size-7  mb-6" >
  <div  className="list">

      { searchResult.length? (searchResult.map( res =>(
         
         <Licomponent key= {res._id} {...res} />
      ))
      ): (<h1 id="searchPageLabel"  >msg: search by name <hr></hr>msg: busque por nombre</h1>
      )}
  
      </div>
      </section>  
         </>)
}

export default SearchOrderPage;