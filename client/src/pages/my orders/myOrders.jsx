import Licomponent from "../../components/AdminComponent";
import React, {useContext,useEffect, useState} from "react";
// import alertContext from "../../context/alertContext";
// import AuthContext from '../../context/AuthContext';
// import API from "../../utils/API"
import { useParams } from "react-router-dom";

const MyOrders = () => {

  // const { userName } = useParams();
  // const user = useContext(AuthContext);
  const [searchResult, setSearchResult] = useState({});
  // const {setAlert} = useContext(alertContext)

//   useEffect(() => {

//   if(!user.userName || !userName)
//   {
//     setAlert({message:"User Must Login - Usario Debe Iniciar Sesion", type:"is-danger"}, 5000);
//   } 

//     else {

//       API.findUser(userName).then((response ) => {
//         if(response.data.length === 0)
//         {
//           setSearchResult({});
//         }
//         else
//         {
//           console.log(response.data)
//           setSearchResult(response.data.orders);
//           setAlert({message:"retrived all orders", type:"is-success"});
//         }; }).catch((err) =>{ 
//             console.log(err);
//             setAlert({message:"Failed to to get waiting list/ usario debe iniciar sesion", type:"is-danger"}); 
//           });

//         };

//  },[setAlert,user.userName,userName]);

  return (<>
  
<div className="container is-align-self-auto is-size-7 mt-6">
<div  className="list">

{searchResult.length ? (searchResult.map( res => (<Licomponent key= {res._id} {...res} />))) :
(<h1 style={{textAlign: "center" , fontSize: "22px", background: "lightyellow"}}>Login to View Page/ Iniciar Sesion para ver</h1>)};    

        </div>
        </div>
  </> )
  
};

export default React.memo(MyOrders);

