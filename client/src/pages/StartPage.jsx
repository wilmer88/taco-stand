import { Link } from "react-router-dom";

const StartPage = ()=> {
 
    const liestilo = {
        atras: {
          // background: `url(${process.env.PUBLIC_URL + '/images/tacos.jpg'})`
        },
        opaci: {
          backgroundColor: "rgba(255, 255, 255, .9)",
          color: "white"
        },
        fonte:{
          fontSize: "27px",
          // background: "lightyellow"
        },
       
       }
  
    return (
    <>

  <div className=' columns is-mobile'>
  <div className="column is-two-fifth"> </div>

  <div className= "mt-6 column is-three-quarters-mobile"  >
  <div className="mt-6 box" >
  <h2> <label className="label has-text-centered" style={liestilo.fonte}>Que Quieres Hacer?</label></h2>
  <div className="ml-4  field">
  <br></br>
 <Link to="./orden"> <button className="button is-black is-outlined">Ordene Ya!</button></Link> 
 <br></br>
 <br></br>
 <Link to="./ordens"><button className="button is-black is-outlined">Cancelar Orden</button></Link>
 <br></br>
 <br></br>
 <Link to="./ordens"><button className="button is-black is-outlined">Ver Ordenes</button></Link>
 <br></br>
 <br></br>
 <Link to="./login"><button className="button is-black is-outlined"> Log In</button></Link>
 <br></br>
 <br></br>
 <Link to="./signup"><button className="button is-black is-outlined">Sign Up</button></Link>
 
</div>
</div>
  

  </div>

  <div className="column is-two-fifth"></div>
  </div>

   </>)
  }
  
  export default StartPage;
