import React from 'react';
const ToppingField = (props) => {
  
    return (<>
       <article  className="columns is-mobile field is-grouped">
         <div className="column is-responsive mb-5">
            <div className='container'style={{width: "10rem"}}>
            <p className="subtitle is-6"><strong>{props.subtitle}</strong></p>

<figure className="image is-96x96 is-fullwidth mr-1 mb-6" >  

<img src={props.picture} loading="eager" alt=""/> 
</figure>
            </div>
     
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
   export default React.memo(ToppingField);
   
         