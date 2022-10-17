
const ToppingField = (props) => {


    return (<>
   <section className="field"> 
             <hr></hr>
             <figcaption>   
         <h5 style={{textAlign: "center", background: "lightyellow"}} > <strong>{props.toppingName}</strong></h5>
         </figcaption>
       <article className="columns is-mobile field is-grouped">
         <div className="column is-responsive mb-6">
         <figure className="content image is-96x96 mr-1 ml-**-6 ">  
         <img id="onions" src={props.picture }alt="" style={{ overflow: "hidden" } } /> 
         </figure>
         </div>
         <aside className="column"> 
                 <section className="container">
                 <button className="button is-rounded is-light ml-3" onClick={props.agregar}><strong style={{fontSize:"26px"}}>+</strong></button>
            <figcaption className="content m-1 mt-3 ml-3"> 
            <h5><mark>{props.topingCount}</mark></h5>
            </figcaption> 
            <button className="button is-info is-rounded ml-3" onClick={props.restar} ><strong style={{fontSize:"19px"}}>-</strong></button> 
         </section>
         </aside>
          </article>  
            </section>
          </>
          );
     }
   export default ToppingField;
   
         