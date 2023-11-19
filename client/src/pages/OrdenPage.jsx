import React from "react";
import OrdenBox from "../components/OrdenBox";
import { Link } from "react-router-dom";

const OrdenPage = () => {
  console.count("i rerenderd in ordenPage");

    return (<>
 <footer className="footer" >
 <div className="content is-full has-text-centered">



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

export default React.memo(OrdenPage);