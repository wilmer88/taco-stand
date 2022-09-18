
import React from "react";
const Condimentos = (props) => {
  


       return(
                 <article className="card-content">




          <hr></hr>
          <figcaption>   
      <h5 style={{textAlign: "center", background: "lightyellow"}} > <strong>Cebolla</strong></h5>
      </figcaption>
    <article className="columns is-mobile field is-grouped">
      <div className="column is-responsive  mb-6">
      <figure className="content image is-128x128 mr-1">  
      <img id="onions" src={"/images/onions.png" }alt="" style={{ overflow: "hidden" } } /> 
      </figure>
      </div>
     
      <aside className="column is-responsive "> 
              <section className="container mt-5">
              <button className="button is-rounded is-light ml-3" onClick={props.cebollaIncrement}><strong style={{fontSize:"26px"}}>-</strong></button>
         <figcaption className="content m-1 mt-3 ml-3"> 
         <h5 ><mark >{props.cebollaCount}</mark></h5>
         </figcaption> 
         <button className="button is-info is-rounded ml-3" onClick={props.cebollaDecrement} ><strong style={{fontSize:"19px"}}>+</strong></button> 
      </section>
      </aside>
       </article>  

     




          </article>
       )
}

export default Condimentos
