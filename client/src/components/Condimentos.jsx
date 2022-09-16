const condimentos = (props) => {
       // const cilantroCounter = 1;
       const cebollaCounter = 1;
       function cebollaIncrement () {

       };
   function cebollaDecrement () {
        
       };
       
       return(<>

<div className="card-content">
          <hr></hr>
          <div>   
      <h5 style={{textAlign: "center", background: "lightyellow"}} > <strong>Cebolla</strong></h5>
      </div>
    <article className="columns is-mobile field is-grouped">
      <div className="column is-responsive ">
      <figure className="content image is-128x128 ml-0 mb-5 mr-1">
      
      <img id="onions" src={"/images/onions.png" }alt="" style={{ overflow: "hidden" } } />
      </figure>
      </div>
      <div className="columns  is-mobile"> </div>
      <div className="column is-responsive mr-6"> 
              <div className="container mt-5">
              <button className="button is-rounded is-light ml-3"><strong style={{fontSize:"23px"}}>-</strong></button>
         <div className="content m-1 mt-3 ml-3"> 
         <h4><mark>{cevollaCounter}</mark> </h4>
         </div> 
         <button className="button is-info is-rounded ml-3" ><strong>+</strong></button> 
      </div>
      </div>
       </article>
  
         
    {/* <article className="subtitle field "> <button className="button is-medium">-</button> <span></span> <button>+</button> </article>  */}
    <hr></hr>
    <button>+</button> <span></span> <button>+</button>
    <hr></hr>
    <button>+</button> <span></span> <button>+</button>
    <hr></hr>
    
    
  </div>
       
       
       
       </>

       )
}