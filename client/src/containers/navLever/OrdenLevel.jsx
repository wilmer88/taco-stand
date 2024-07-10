import "../../components/OrdenHero/hero.css";
import "./ordenLevel.css"
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState, useMemo, useCallback } from "react";
import Alert from "../../components/Alert/Alert";
// import orderlevelOrderDataContext from "../../context/orderDataContext";
// import alertContext from "../../context/alertContext";
import CheckoutBag from "../../components/bag/checkoutBag";

const estilo = {
  nombre: {
    background: "#e8eaf6",
  },
  cambio: {
    borderRadius: "50%"
  },
  pad: {
    padding: "25px",
  },
};

const OrdenLevel = () => {

  // console.count("i rerenderd in orderLevel client/containers/navLever/ordenlevel");
  const toggleModal = useCallback(() => { setNavmodal(prev => (prev === "modal" ? "modal is-active" : "modal")); }, []);
  const [navmodal, setNavmodal] = useState("modal");
  return (<>
  <div>
    
  </div>
    <aside id="navLevelmodal" className={`${navmodal}`} >
      <div className="columns">
        <div className="column is-full">
          <div className="modal-background"></div>
          <div className="modal-content ">

            <button onClick={toggleModal} type="button" className="modal-close is-large" aria-label="close"></button>
            <img id="aboutImage" src="./images/aboutLosMezquites.webp" alt="Los Mesquites About info 678 800-7036" style={{ overflow: "hidden" }} />

          </div>
        </div>
      </div>
    </aside>

  <div className=" mb-6">
  <section className="section" style={estilo.pad}>

      <nav className="navbar is-fixed-top is-justify-content-center" role="navigation"   >
        

        <div className="column has-text-centered" >
          <Link className="levelHover" onClick={toggleModal}  >
            <h3 className="label" style={estilo.nombre}><i className="icofont-login icofont-2x"></i>About </h3>
          </Link>
        </div>

        <div className="level-item is-hoverable " >
          <Link className="levelHover" to="/">
            <h3 className="label"  ><i className="icofont-home "></i>Home</h3>
          </Link>
          <Link className="levelHover" to="/orden">
            <h3 className="label">
              <div>Menu</div>
              <img src={"/images/mezquitesLogo.webp"} alt="" style={{ height: "65px", width: "120px" }} />
            </h3>
          </Link>
          <Link className="levelHover" to="/searcho">
            <h3 className="label">Search  <i className="icofont-search-job"></i></h3>
          </Link>
        </div>

        <div className="column has-text-centered" >
          <CheckoutBag />
        </div>

      <Alert />
    

      </nav>

    </section>





  </div>




  </>)
}

export default (OrdenLevel);