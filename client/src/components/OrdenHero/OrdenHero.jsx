// import { Link } from "react-router-dom";
import React, {useState} from 'react';
import {Notification} from 'react-bulma-components';
import "./hero.css"

const OrdenHero = () => {



  const [buissnesStatus, setBuissnesStatus] = useState({
    dicho: "",
    labierto: "Si Ay Tacos De Venta",
    cerradol: "No Ay Tacos Por Hoy",
    luzVerde: "notification is-success",
    luzRoja: "notification is-danger",
    luzita: ""
  
  });

 
    return (
        <>
                 <nav className="pagination" role="navigation" aria-label="pagination">
  <button onClick={() => setBuissnesStatus({ ...buissnesStatus, dicho: buissnesStatus.cerradol , luzita: buissnesStatus.luzRoja})} className=" mr-6 is-small "></button>
  <button onClick={() => setBuissnesStatus({ ...buissnesStatus, dicho: buissnesStatus.labierto, luzita: buissnesStatus.luzVerde})} className=" ml-6 is-small "></button>
 
</nav>
         <section className="hero is-medium is-link">

        <div className="hero-body">
    <div className="container has-text-centered">
      <p className="title">
      Porfavor Ordene
      </p>
      <p className="subtitle">
      Tacos
      </p>

    </div>
  </div>
</section>
<Notification color={buissnesStatus.luzita}>


  <h3 style={{textAlign: "center"}}>{buissnesStatus.dicho} </h3>
  

  </Notification>
        </>
    );
}

export default OrdenHero;







