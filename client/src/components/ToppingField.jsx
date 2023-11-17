import React from 'react';
const ToppingField = (props) => {
  
    return (<>
       <article  className="columns is-mobile field is-grouped">
         <div className="column is-responsive mb-5">

         <figure className="content image is-96x96 mr-1 mb-6">  
         <p className="subtitle is-6"><strong>{props.subtitle}</strong></p>

         <img data-twic-src={props.picture }alt="" style={{ overflow: "hidden" } } /> 
         </figure>
         </div>
         <aside className="column"> 
                 <section className="card-body">
                 <button className="button is-rounded is-light ml-3" onClick={props.sumar}><strong style={{fontSize:"26px"}}>+</strong></button>
            <figcaption className="content m-1 mt-3 ml-3"> 
            <h5><mark>{props.topingCount}</mark></h5>
            </figcaption> 
            <button className="button is-info is-rounded ml-3" onClick={props.restar} ><strong style={{fontSize:"19px"}}>-</strong></button> 
         </section>
         </aside>
          </article>  
          </>); };
   export default ToppingField;
   
         