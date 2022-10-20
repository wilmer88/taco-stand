import React from "react";

const TacoBlockContext = React.createContext({
    nameState:"",
    azadaTacoData: 0,
    pollo: 0,
    onchange: () => {}
})

export default TacoBlockContext