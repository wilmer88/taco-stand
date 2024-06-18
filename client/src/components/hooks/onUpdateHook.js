import { useEffect, useRef } from "react";

export default function OnUpdateHook(callback, dependencies) {
    const firstRenderRef = useRef(true);

    useEffect(() => {
        if (firstRenderRef.current){
            firstRenderRef.current = false;
            return;
        }
       callback();
    },dependencies);

};