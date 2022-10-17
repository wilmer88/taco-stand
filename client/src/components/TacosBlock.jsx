import  React  from "react";
import NameField from "./NameField";
import MeatField from "./MeatField";



class TacosBlock extends React.Component  {
  state={
  orderName: ""
 };

 handleChangeforOrderName = event => {
      const {name, value} = event.target;
        this.setState({[name]: value})
     };


  // const [orderName, setOrderName] = useState(orderName)
  render() {
    return(<>
   
                <figcaption>   
                <h5 style={{textAlign: "center", background: "lightyellow"}} > <strong>Tacos</strong></h5>
                </figcaption>

 <div className="is-align-content-center columns mt-3">

  <NameField
  name= "orderName"
  value= {this.state.orderName}
  handleChangeI={this.handleChangeforOrderName}
  data={this.state.orderName}
  />

  <MeatField
  meatType = "Azada"
  />
<MeatField
  meatType = "Pollo"
  />
    <MeatField
  meatType = "Barbacoa"
  />
    <MeatField
  meatType = "Pastor"
  />
    <MeatField
  meatType = "Chorizo"
  />

  
</div>



</>)}}
export default TacosBlock;

