import { useRef, useCallback, useEffect } from 'react';

export function useTimeout(callback, delay) {
    const callbackRef = useRef(callback);
    const timeoutRef = useRef();

    useEffect(() => {
        callbackRef.current = callback;
    },[callback])

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
    }, [delay])

     const clear = useCallback(() => {
        if(timeoutRef.current) {
            clearInterval(timeoutRef.current)
        }
    },[])

    useEffect(() => {
        set()
        return clear;
    },[delay, clear ,set] )

    const reset = useCallback(() => {
        clear();
        set();
    },[clear, set]);

    return {
        reset,
        clear,
    }

}