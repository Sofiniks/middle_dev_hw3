import { useCallback, useEffect, useState } from 'react';

export function useLocalStorage(key) {
    const [token, setToken ] = useState(key);

    useEffect(() => {
        setToken(key)
    },[token, key, setToken])

    const setItem = useCallback((itemValue) => {
        localStorage.setItem(key, JSON.stringify(itemValue))
    },[key])

    const removeItem = () => {
        localStorage.removeItem(key)
        setToken(null)
    }

    return [token, {setItem, removeItem}]
}