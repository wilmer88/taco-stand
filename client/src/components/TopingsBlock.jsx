import ToppingField from "./ToppingField";
import  React  from "react"

class TopingsBlock extends React.Component {
  state ={
    cebollaCount: 0,
    cilantroCups: 0,
};

cebollaIncrement = (e) =>{
  e.preventDefault()


    this.setState({cebollaCount: this.state.cebollaCount + 1})
  

  };

cebollaDecrement = () =>{
 
  console.log("clicked minus -1 cebolla button");
  this.setState({
    topingCount: this.state.cebollaCount - 1
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


 render() {return(<>


 <ToppingField
toppingName = "Cebolla"
picture= "/images/onions.png"
 agregar= {this.cebollaIncrement }
 restar ={this.cebollaDecrement}
topingCount = {this.state.cebollaCount}
/> 

<ToppingField
toppingName = "Cillantro"
picture= "/images/cilantro.png"
 cambia= {this.cilantroIncrement }
restar ={this.cilantroDecrement}
topingCount = {this.state.cilantroCups}
/> 

<ToppingField
toppingName = "Pico"
picture= "/images/pico.png"
 cambia= {this.cilantroIncrement }
restar ={this.cilantroDecrement}
topingCount = {this.state.cilantroCups}
/> 

<ToppingField
toppingName = "Salsa Roja"
picture= "/images/redSalsa.png"
 cambia= {this.cilantroIncrement }
restar ={this.cilantroDecrement}
topingCount = {this.state.cilantroCups}
/> 

<ToppingField
toppingName = "Slasa Verde"
picture= "/images/greenSalsa.png"
 cambia= {this.cilantroIncrement }
restar ={this.cilantroDecrement}
topingCount = {this.state.cilantroCups}
/> 


         
       </>)}}
export default TopingsBlock;

      