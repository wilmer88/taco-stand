import React from "react";
import { useState, useContext } from "react";
import DipsContext from "../../context/DipContext";
import DipComponent from "../dipComponent/DipComponent";

const DipsModel = () => {

  let dips = useContext(DipsContext);


  const [dipmodal, setDipmodal] = useState("modal");
  const showAboutModel = () => {
    if (dipmodal === "modal") {
      setDipmodal("modal is-active")
    }
    if (dipmodal === "modal is-active") {
      setDipmodal("modal")
    }
  };

  const [cheeseDipNormal, setCheeseDipNormal] = useState({});
  const handleCheeseDipNormalPlus = (event) => {
    event.preventDefault();
    dips.dipCount = dips.dipCount + 1;
    setCheeseDipNormal(dips);
  };

  const handleCheeseDipNormalMinus = (event) => {
    event.preventDefault();
    if (cheeseDipNormal >= 1) {
      dips.dipCount = dips.dipCount  - 1;
      setCheeseDipNormal(dips);
    }
  };




return (<><div className="modal-content">


      <DipComponent
        subtitle="Cheese Dip (Normal)"
        dipCounterprop={cheeseDipNormal.dipCount}
        propDipName=" (4.75 ea)"
        handleDipDecrementProp={handleCheeseDipNormalMinus}
        handleDipIncrementPropFunction={handleCheeseDipNormalPlus}
      />


<button onClick={showAboutModel} type="button" className="modal-close is-large" aria-label="close"> x</button>

    </div></>)
};

export default React.memo(DipsModel)