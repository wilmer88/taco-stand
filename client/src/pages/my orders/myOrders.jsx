import UserComponent from "../../components/userComponent/UserComponent";
// import axios from "axios";
import React, {useContext,useEffect, useState} from "react";
import alertContext from "../../context/alertContext";
import AuthContext from '../../context/AuthContext';
import API from "../../utils/API"
import { useParams } from "react-router-dom";


const MyOrders = () => {

  const { userName } = useParams();
  const user = useContext(AuthContext);
  const [searchResult, setSearchResult] = useState({});
  const {setAlert} = useContext(alertContext)
  // const {setUserName} = useContext(AuthContext);


  useEffect(() => {
if(user.userName){
    console.log(user.userName);
  
    API.findUser(userName).then((response ) => 
    {
      if(response.data.length === 0){
        setSearchResult({});
      }else{
        console.log(response.data)
        setSearchResult(response.data);
        setAlert({message:"retrived all orders", type:"is-success"});
      }
    }
      ).catch((err) =>{ 
          console.log(err)
          setAlert({message:"faild to to get waiting list/ usario debe iniciar sesion/ user must be signed in", type:"is-danger"})
        });
}

  }, [setAlert])


  return ( <>
<div className="container is-align-self-auto is-size-7 mt-6">
<div  className="list">

{ searchResult? 
              <UserComponent userName= {searchResult.userName} {...searchResult} />
: (<h1 style={{textAlign: "center" , fontSize: "22px", background: "lightyellow"}}>You have no orders</h1>
        )}
          
        </div>
        </div>

  </>
   )}

export default MyOrders;

