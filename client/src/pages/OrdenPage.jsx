import OrdenBox from "../components/OrdenBox";
import { Link } from "react-router-dom";
const OrdenPage = () => {
    return (
        <>
 
 <footer className="footer">




 <div className="content has-text-centered">
 <div className="card">
 <div className="card-content">
 <div className="box is-shadowless is-align-self-center">
<OrdenBox/>
</div>
 </div>
 </div>
 </div>
         





          <div className="content has-text-centered">
                
                <strong>Tacos Don Santos</strong> 
           <Link to="https://jgthms.com">Santos Alonzo</Link>. The source code is
           owned and developed by
           <Link to="http://opensource.org/licenses/mit-license.php">
          Wilmer Rivera
          </Link>
            The website content is exclusively made for
            <Link to="http://creativecommons.org/licenses/by-nc-sa/4.0/">
          Tacos Don Santos
          </Link>
         
         </div>






        

         </footer>
        </>
    );
};

export default OrdenPage;