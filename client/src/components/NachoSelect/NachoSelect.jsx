import dipContext from '../../context/DipContext';
import React, { useContext } from 'react';

const NachoSelect = () => {
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

  
  return (<>
      
      <div className="column is-responsive is-mobile ">
       <h5 className="subtitle "><strong>Cheese Dip</strong></h5>
       </div>

     <article  className="columns field is-grouped is-centered">
       <p>Regular(4.50)</p>
       <div><button name="cheeseDipRegular"  className="button is-rounded is-light" onClick={addHandleChange}  >+</button>
          <figcaption className="content m-1 mt-3 "> 
          <mark>
            {dip.cheeseDipRegular}
            </mark>
          </figcaption> 
          <button name="cheeseDipRegular" className="button is-info is-rounded " onClick={subTractHandleChange} >-</button> </div>


       <div><button name="cheeseDipLarge" className="button is-rounded is-light " onClick={addHandleChange}  >+</button>
          <figcaption className="content m-1 mt-3 "> 
          <mark>{dip.cheeseDipLarge}</mark>
          </figcaption> 
          <button name="cheeseDipLarge" className="button is-info is-rounded " onClick={subTractHandleChange} >-</button> </div>
          <p>Large(8.50)</p>

        </article>  


        <hr></hr>
        </>); };

export default NachoSelect;