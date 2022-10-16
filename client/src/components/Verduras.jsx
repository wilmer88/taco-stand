import ToppingField from "./Toppings";
import React from "react"

class VerdurasField extends React.Component {
  state ={
    topingCount: 0,
    cilantroCups: 0,
};

cebollaIncrement = () =>{

    this.setState({ topingCount: this.state.topingCount + 1})
};

cebollaDecrement = () =>{
 
  console.log("clicked minus -1 cebolla button");
  this.setState({
    topingCount: this.state.topingCount - 1
  })
};


cilantroIncrement = () =>{
  
  console.log("clicked increment cebolla button");
  this.setState({
    topingCount: this.state.cilantroCups + 1
  })
};

cilantroDecrement = () =>{

console.log("clicked minus -1 cebolla button");
this.setState({
  topingCount: this.state.cilantroCups - 1
})
};


 render() { 
  return ( <>

<ToppingField
toppingName = "Cebolla"
picture= "/images/onions.png"
 agregarrr= {this.cebollaIncrement }
restarrr ={this.cebollaDecrement}
topingCount = {this.state.cebollaCups}
/>

<ToppingField
toppingName = "Cillantro"
picture= "/images/cilantro.png"
 agregarrr= {this.cilantroIncrement }
restarrr ={this.cilantroDecrement}
topingCount = {this.state.cilantroCups}
/>


    
     
{/* 
         <div className=" field">
         <hr></hr>
          <figcaption>   
      <h5 style={{textAlign: "center", background: "lightyellow"}} > <strong>Cilantro</strong></h5>
      </figcaption>
    <article className="columns is-mobile field is-grouped">
      <div className="column is-responsive  mb-6">
      <figure className="content image is-96x96 mr-1">  
      <img id="onions" src={"/images/cilantro.png" }alt="" style={{ overflow: "hidden" } } /> 
      </figure>
      </div>
      <aside className="column is-responsive "> 
              <section className="container mt-5">
              <button className="button is-rounded is-light ml-3" onClick={props.cilantroIncrement}><strong style={{fontSize:"26px"}}>-</strong></button>
         <figcaption className="content m-1 mt-3 ml-3"> 
         <h5 ><mark >{props.cilantroCount}</mark></h5>
         </figcaption> 
         <button className="button is-info is-rounded ml-3" onClick={props.cilantroDecrement} ><strong style={{fontSize:"19px"}}>+</strong></button> 
      </section>
      </aside>
       </article>  
        </div>


        <hr></hr>
          <figcaption>   
      <h5 style={{textAlign: "center", background: "lightyellow"}} > <strong>Pico De Gallo</strong></h5>
      </figcaption>
    <article className="columns is-mobile field is-grouped">
      <div className="column is-responsive  mb-6">
      <figure className="content image is-96x96 mr-1">  
      <img id="onions" src={"/images/pico.png" }alt="" style={{ overflow: "hidden" } } /> 
      </figure>
      </div>
      <aside className="column is-responsive "> 
              <section className="container mt-5">
              <button className="button is-rounded is-light ml-3" onClick={props.picoIncrement}><strong style={{fontSize:"26px"}}>-</strong></button>
         <figcaption className="content m-1 mt-3 ml-3"> 
         <h5 ><mark >{props.picoCount}</mark></h5>
         </figcaption> 
         <button className="button is-info is-rounded ml-3" onClick={props.picoDecrement} ><strong style={{fontSize:"19px"}}>+</strong></button> 
      </section>
      </aside>
       </article>  


       <hr></hr>
          <figcaption>   
      <h5 style={{textAlign: "center", background: "lightyellow"}} > <strong>Salsa Verde</strong></h5>
      </figcaption>
    <article className="columns is-mobile field is-grouped">
      <div className="column is-responsive  mb-6">
      <figure className="content image is-96x96 mr-1">  
      <img id="onions" src={"/images/greenSalsa.png" }alt="" style={{ overflow: "hidden" } } /> 
      </figure>
      </div>
      <aside className="column is-responsive "> 
              <section className="container mt-5">
              <button className="button is-rounded is-light ml-3" onClick={props.salsaVerdeIncrement}><strong style={{fontSize:"26px"}}>-</strong></button>
         <figcaption className="content m-1 mt-3 ml-3"> 
         <h5 ><mark >{props.salsaVerdeCount}</mark></h5>
         </figcaption> 
         <button className="button is-info is-rounded ml-3" onClick={props.salsaVerdeDecrement} ><strong style={{fontSize:"19px"}}>+</strong></button> 
      </section>
      </aside>
       </article>  


       <hr></hr>
          <figcaption>   
      <h5 style={{textAlign: "center", background: "lightyellow"}} > <strong>Salsa Roja</strong></h5>
      </figcaption>
    <article className="columns is-mobile field is-grouped">
      <div className="column is-responsive  mb-6">
      <figure className="content image is-96x96 mr-1">  
      <img id="onions" src={"/images/redSalsa.png" }alt="" style={{ overflow: "hidden" } } /> 
      </figure>
      </div>
      <aside className="column is-responsive "> 
              <section className="container mt-5">
              <button className="button is-rounded is-light ml-3" onClick={props.salsaRojaIncrement}><strong style={{fontSize:"26px"}}>-</strong></button>
         <figcaption className="content m-1 mt-3 ml-3"> 
         <h5 ><mark >{props.salsaVerdeCount}</mark></h5>
         </figcaption> 
         <button className="button is-info is-rounded ml-3" onClick={props.salsaRojaDecrement} ><strong style={{fontSize:"19px"}}>+</strong></button> 
      </section>
      </aside>
       </article>   */}
    
{/* </div> */}

 


    
         
       </>)}}
export default VerdurasField;

      