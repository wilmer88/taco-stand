import {useEffect, useState} from "react";
const useDebounce = (value, delay) => {
    const [deBounceVal, setDebounceVal] = useState(value);
   useEffect(
    () => {
    const handler =  setTimeout(() =>{
            setDebounceVal(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, 
    [delay, value]
    );
    return deBounceVal;
};

export default useDebounce;