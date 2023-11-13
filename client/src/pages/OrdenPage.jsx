// import OrdenHero from "../components/OrdenHero/OrdenHero";
import OrdenBox from "../components/OrdenBox";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const OrdenPage = () => {
  console.count("i rerenderd in ordenPage");

    return (<>
        {/* <OrdenHero/> */}
 <footer className="footer is-fixed-bottom">
 <div className="content is-full has-text-centered">


 <nav className="columns is-mobile " style={{display: 'flex', whiteSpace:"nowrap" }}>
    <div className="column is-full">
    <div className="container is-fixed-top level" style={{ whiteSpace:"nowrap"}}>
     <div className="tabs is-centered  is-flex-mobile " >
     <nav className="navbar is-fixed-bottom level   is-size-7 is-align-content-center" >
     <ul><li>   
       <HashLink to="#codimentsSection" className="link" >   
           Condiment
           </HashLink>
       </li>
         </ul>

     </nav>
  
         </div>
        </div>
        </div>
        </nav>


<OrdenBox/>
 </div>
          <div className="content has-text-centered">         
          {""}  <strong> Tacos Don Santos</strong> by{""}
           <Link to="https://facebook.com/">Santos Alonzo</Link>
           {""}. Code is  property of {""}
           <Link to="http://instagram.com">
          Wilmer Rivera
          </Link>
            . App features exclusively built for {""}
            <Link to="#">
          Tacos Don Santos
          </Link>
          <hr></hr>
         </div>
         </footer>
        </> );
};

export default OrdenPage;