import { useCallback, useState, useRef } from "react";

export function useHover () {
    const [isHovered, setIsHovered] = useState(false);
    const elemRef = useRef();

    const handleMouseOver = useCallback(() => setIsHovered(true), []);
    const handleMouseOut = useCallback(() => setIsHovered(false), []);

    const ref = useCallback(elem => {
        if(elemRef.current) {
            elemRef.current.removeEventListener('mouseover', handleMouseOver);
            elemRef.current.removeEventListener('mouseout', handleMouseOut);
        }

        elemRef.current = elem;

        if(elemRef.current) {
            elemRef.current.addEventListener('mouseover', handleMouseOver);
            elemRef.current.addEventListener('mouseout', handleMouseOut);
        }
    },[handleMouseOut, handleMouseOver])

    return {hovered: isHovered, ref}
}