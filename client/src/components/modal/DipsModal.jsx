import React from "react";
import {useState, useContext } from "react";
import DipsContext from "../../context/DipContext";

const DipsModel = ()=>{
  console.count("i rerenderd in dipsModal");

  let dips = useContext(DipsContext);
  const {setDips} = useContext(DipsContext);
  const holderForDips = [];

  const [dipmodal, setDipmodal]= useState("modal");
  const showAboutModel= ()=>{
    if(dipmodal === "modal"){
      setDipmodal("modal is-active")
    }
    if(dipmodal === "modal is-active"){
      setDipmodal("modal")
    }
  };

    const[cheeseDipNormal, setCheeseDipNormal]=useState({});  
    let dipOrder1 = {dipName:"Cheese Dip Normal", dipCount: 0, dipPrize: 0};
    const handleCheeseDipNormalPlus =(event)=> {
      event.preventDefault();
      dipOrder1.dipCount= dipOrder1.dipCount + 1;
        setCheeseDipNormal({...dipOrder1});
        holderForDips.push({...cheeseDipNormal});
      console.log(holderForDips);};

      const handleCheeseDipNormalMinus = (event)=>{
          event.preventDefault();
          if(cheeseDipNormal >= 1){
            dipOrder1.dipCount= dipOrder1.dipCount - 1}
            setCheeseDipNormal({...dipOrder1});
              holderForDips.push(cheeseDipLarge);
                console.log(dips);
              };};




          const[cheeseDipLarge, setLargeCheeseDip]=useState({dipName:"", dipCount: 0, dipPrize: 0}); 
          let dipOrder2 = {dipName:"Cheese Dip Large", dipCount: cheeseDipLarge.dipCount, dipPrize: cheeseDipLarge.dipCount * 8.75};
          const handleCheeseDipLargePlus =(event)=> {
            event.preventDefault()
            dipOrder2.dipCount= dipOrder2.dipCount + 1
 if(dipOrder2.dipCount !== 0){
  setLargeCheeseDip({...dipOrder2});  
  holderForDips.push(cheeseDipLarge);
      setDips({...holderForDips});
    console.log(dips); };};


            const handleCheeseDipLargeMinus = (event)=>{
                event.preventDefault();
                if(cheeseDipLarge >= 1){
                  setLargeCheeseDip({...dipOrder2, dipCount: dipOrder2.dipCount - 1});
  holderForDips.push(cheeseDipLarge)
      setDips({...holderForDips});
    console.log(dips);};};

                
    const[gucamoleDipNormal, setGucamoleDipNormal]=useState(0);  
    const  handleGucamoleDipNormalPlus =(event)=> {
      event.preventDefault()
      setGucamoleDipNormal(gucamoleDipNormal + 1);
      
                 };
      const handleGucamoleDipNormalMinus = (event)=>{
          event.preventDefault();
          if(gucamoleDipNormal >= 1){
            setGucamoleDipNormal(gucamoleDipNormal - 1);
            
          }}
          const[gucamoleDipLarge, setGucamoleDipLarge]=useState(0);  
          const handleGucamoleDipLargePlus =(event)=> {
            event.preventDefault()
            setGucamoleDipLarge(gucamoleDipLarge + 1);
                       };
            const handleGucamoleDipLargeMinus = (event)=>{
                event.preventDefault();
                if(gucamoleDipLarge >= 1){
                  setGucamoleDipLarge(gucamoleDipLarge - 1);
                }};


                const[gucaMixDipNormal, setGucaMixDipNormal]=useState(0);  
                const handleGucaMixDipNormalPlus =(event)=> {
                  event.preventDefault();
                  setGucaMixDipNormal(gucamoleDipNormal + 1);
                             };
                  const handleGucaMixDipNormalMinus = (event)=>{
                      event.preventDefault();
                      if(gucaMixDipNormal >= 1){
                        setGucaMixDipNormal(gucaMixDipNormal - 1);
                      }};
                      const[gucaMixDipLarge, setGucaMixDipLarge]=useState(0);  
                      const handleGucaMixDipLargePlus =(event)=> {
                        event.preventDefault();
                        setGucaMixDipLarge(gucaMixDipLarge + 1);
                                   };
                        const handleGucaMixDipLargeMinus = (event)=>{
                            event.preventDefault();
                            if(gucaMixDipLarge >= 1){
                              setGucaMixDipLarge(gucaMixDipLarge - 1);
                            }};
                            

                            const[chorizoDip, setChorizoDipLarge]=useState(0);  
                            const handleChorizoPlus =(event)=> {
                              event.preventDefault();
                              setChorizoDipLarge(chorizoDip + 1);
                                         };
                              const handleChorizoDipMinus = (event)=>{
                                  event.preventDefault();
                                  if(chorizoDip >= 1){
                                    setChorizoDipLarge(chorizoDip - 1);
                                  }};

                                  
                            const[elMezquitesDip, setElMezquitesDipLarge]=useState(0);  
                            const handleElMezquitesDipPlus =(event)=> {
                              event.preventDefault();
                              setElMezquitesDipLarge(elMezquitesDip + 1);
                                         };
                              const handleElMezquitesDipMinus = (event)=>{
                                  event.preventDefault();
                                  if(elMezquitesDip >= 1){
                                    setChorizoDipLarge(elMezquitesDip - 1);
                                  }};


                                  const[texanoDip, setTexanoDip]=useState(0);  
                                  const handleTexanoDipPlus =(event)=> {
                                    event.preventDefault();
                                    setTexanoDip(texanoDip + 1);
                                               };
                                    const handleTexanoDipMinus = (event)=>{
                                        event.preventDefault();
                                        if(texanoDip >= 1){
                                          setTexanoDip(texanoDip - 1);
                                        }};

    return(<>



<div className="modal-background"></div>

     <div className="modal-content">
     <div className="box is-mobile">

<DipComponent 
subtitle="Cheese Dip (Normal)"
dipCounterprop={cheeseDipNormal.dipCount}
propDipName=" (4.75 ea)"
handleDipDecrementProp ={handleCheeseDipNormalMinus}
handleDipIncrementPropFunction = {handleCheeseDipNormalPlus}
/>

<DipComponent 
subtitle="Cheese Dip (Large)"
dipCounterprop={cheeseDipLarge.dipCount}
propDipName ="(8.75 ea)"
handleDipDecrementProp ={handleCheeseDipLargeMinus}
handleDipIncrementPropFunction = {handleCheeseDipLargePlus}
/>

<DipComponent 
subtitle="Gucamole Dip (Normal)"
dipCounterprop={gucamoleDipNormal}
dipName="(4.75 ea)"
handleDipDecrementProp ={handleGucamoleDipNormalMinus}
handleDipIncrementPropFunction = {handleGucamoleDipNormalPlus}
/>

<DipComponent 
subtitle="Gucamole Dip (Large)"
dipCounterprop={gucamoleDipLarge}
dipName="(9.25 ea)"
handleDipDecrementProp ={handleGucamoleDipLargeMinus}
handleDipIncrementPropFunction = {handleGucamoleDipLargePlus}
/>

<DipComponent 
subtitle="Guca Mix Dip (Normal)"
dipCounterprop={gucaMixDipNormal}
dipName="(7.50 ea)"
handleDipDecrementProp ={handleGucaMixDipNormalMinus}
handleDipIncrementPropFunction = { handleGucaMixDipNormalPlus}
/>

<DipComponent 
subtitle="Guca Mix Dip (Large)"
dipCounterprop={gucaMixDipLarge}
dipName="(11.75 ea)"
handleDipDecrementProp ={handleGucaMixDipLargeMinus}
handleDipIncrementPropFunction = {handleGucaMixDipLargePlus}
/>

<DipComponent 
subtitle="Chorizo Dip (Large)"
dipCounterprop={chorizoDip}
dipName="(6.50 ea)"
handleDipDecrementProp ={handleChorizoDipMinus}
handleDipIncrementPropFunction = {handleChorizoPlus}
/>


<DipComponent 
subtitle="El Mezquites Dip (Large)"
dipCounterprop={elMezquitesDip}
dipName="(6.50 ea)"
handleDipDecrementProp ={handleElMezquitesDipMinus}
handleDipIncrementPropFunction = {handleElMezquitesDipPlus}
/>


<DipComponent 
subtitle="Texano Dip  (Large)"
dipCounterprop={texanoDip}
dipName="(6.50 ea)"
handleDipDecrementProp ={handleTexanoDipMinus}
handleDipIncrementPropFunction = {handleTexanoDipPlus}
/>


 </div>
     </div>

     <button onClick={showAboutModel} type="button" className="modal-close is-large" aria-label="close"> x</button>
     <button className="button is-success mt-2" >Comfirm</button>

  
<button className="button is-success is-small mb-1" onClick={showAboutModel}>Add Dips</button> 

    </>);

export default  React.memo(DipsModel)