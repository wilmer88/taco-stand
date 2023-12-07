import dipContext from '../../context/DipContext';
import React, { useContext } from 'react';
import RegularNlargeComponent from '../../components/regularNlargeComponent/regularNlargeComponent';
import { Link } from "react-router-dom";


const DipsPage = ()=>{
    const dip = useContext(dipContext);
    const {setDips} = useContext(dipContext);
    const addHandleChange = (event) => {
  
      const { name } = event.target;
  setDips({ ...dip, [name]: dip[name] + 1 });
    
    };
  
    const subTractHandleChange = (event) => {
    
      const { name } = event.target;
  setDips({ ...dip, [name]: dip[name] - 1 });
    
    };

    return(
        <>
        
        <RegularNlargeComponent
        itemName="CheeseDip"
        regularPrice="Regular(4.50)"
        largePrice="Large(8.50)"
        regularCounter={dip.cheeseDipRegular}
        largeCounter={dip.cheeseDipLarge}
        itemNameAddButtonR="cheeseDipRegular"
        itemNameAddButtonL="cheeseDipLarge"
        addHandleChange={addHandleChange}
        />

<div className='columns  is-responsive is-mobile is-centered  ' >
    
    <Link  to="/orden">
    <button className="button is-success is-small">Back</button>
    </Link>
    </div>
        </>
    )

}


export default DipsPage