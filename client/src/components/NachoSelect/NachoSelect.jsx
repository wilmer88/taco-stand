import React from 'react';

const NachoSelect = (props) => {
  
  return (<>
     <article  className="columns is-mobile field is-grouped">
     <section className="card-body">
       <p className="subtitle "><strong>{props.subtitle2}</strong></p>

               <button className="button is-rounded is-light ml-3" onClick={props.sumar}><strong style={{fontSize:"26px"}}>+</strong></button>
          <figcaption className="content m-1 mt-3 ml-3"> 
          <h5><mark>{props.topingCount}</mark></h5>
          </figcaption> 
          <button className="button is-info is-rounded ml-3" onClick={props.restar} ><strong style={{fontSize:"19px"}}>-</strong></button> 
       </section>
       <div className="column is-responsive mt-6 ">
       <p className="title" ><strong>{props.nachosName}</strong> </p>
       </div>

               <section className="card-body">
          <p className="subtitle"><strong>{props.subtitle1}</strong></p>

               <button className="button is-rounded is-light ml-3" onClick={props.sumar}><strong style={{fontSize:"26px"}}>+</strong></button>
          <figcaption className="content m-1 mt-3 ml-3"> 
          <h5><mark>{props.topingCount}</mark></h5>
          </figcaption> 
          <button className="button is-info is-rounded ml-3" onClick={props.restar} ><strong style={{fontSize:"19px"}}>-</strong></button> 
       </section>
       



        </article>  
        </>); };

export default NachoSelect;