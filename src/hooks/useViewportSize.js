import { useState, useEffect } from "react";
import { useTimeout } from "./useTimeout";


export function useViewportSize() {
    const [viewportSize, setViewportSize] = useState({
        width: 0,
        height: 0
    })

    const { reset } = useTimeout(() => setViewportSize({
            height: window.innerHeight,
            width: window.innerWidth
            }), 1000);
  
    useEffect(() => {
        
        window.addEventListener('resize', reset);

        return () => window.removeEventListener('resize', reset)
        
    },[reset])

    return viewportSize
}