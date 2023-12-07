import React from 'react';



const RegularNlargeComponent = (props) => {


  
  return (<>
 
      
      <div className="columns is-responsive is-mobile mt-6 is-centered ">
        
       <h5 className="subtitle "><strong>{props.itemName}</strong></h5>
       
       </div>

     <article  className="columns field is-grouped is-centered">
      
      <div className='mr-4 mt-2'>
  
       <p className='mr-6'>{props.regularPrice}</p>
        
        <button name={props.itemNameAddButtonR}  className="button is-rounded is-light" onClick={props.addHandleChange}  >+</button>
          <figcaption className="content m-1 mt-3 "> 
          <mark className='ml-4'>
            {props.regularCounter}
            </mark>
          </figcaption> 
          <button name="cheeseDipRegular" className="button is-info is-rounded " onClick={props.subtractHandleChange} >-</button>
          
          
      </div>

<div className='ml-4 mt-2'>



<p>{props.largePrice}</p>
  <button name={props.itemNameAddButtonL} className="button is-rounded is-light " onClick={props.addHandleChange}  >+</button>
          <figcaption className="content m-1 mt-3 "> 
          <mark className='ml-4'>{props.largeCounter}</mark>
          </figcaption> 
          <button name="cheeseDipLarge" className="button is-info is-rounded " onClick={props.addHandleChange} >-</button>
          
         

</div>


        </article>  
        <hr></hr>

        </>); };

export default RegularNlargeComponent;