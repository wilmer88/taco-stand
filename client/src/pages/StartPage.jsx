import { Link } from "react-router-dom";

const StartPage = ()=> {
 
    const liestilo = {

        opaci: {
          backgroundColor: "rgba(255, 255, 255, .9)",
          color: "white"
        },
        fonte:{
          fontSize: "27px"
        },
        starterPadding:{
          padding:"15px"
        }
        };
  
    return (<>
  <div className='columns is-mobile'style={liestilo.starterPadding}>
  <div className="column is-two-fifth"> </div>
  <div className= "mt-4 column is-full-mobile"  >
  <div className="container">
  <div className="box"  >

  <h2 className="label has-text-centered" style={liestilo.fonte}>Que Quieres Hacer?/What Do You Want To DO?</h2>

  <div className="ml-3  field">
    
  <br></br>
 <Link to="./orden"> <button className="button is-black is-outlined">Ordene Ya!/Order Now</button></Link> 
 <br></br>
 <br></br>
 <Link to="./kitchen"><button className="button is-black is-outlined">Cancelar Orden/Cancel Order</button></Link>
 <br></br>
 <br></br>
 <Link to="./kitchen"><button className="button is-black is-outlined">Ver Ordenes/See Orders</button></Link>
 <br></br>
 <br></br>
 <Link to="./login"><button className="button is-black is-outlined"> Iniciar Sesion/Log In</button></Link>
 <br></br>
 <br></br>
 <Link to="./signup"><button className="button is-black is-outlined">Inscribirse/Sign Up</button></Link>

</div>
</div>
</div>

  </div>

  <div className="column is-two-fifth"></div>
  </div>

   </>)
  }
  
  export default StartPage;
