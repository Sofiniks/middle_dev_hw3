import { useState, useEffect} from 'react';

export const useFetch = function(url) {
    const [ data, setData ] = useState(null);
    const [isLoading, setIsLoading ] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (url) => {
            setIsLoading(true)
            try {
                setError(null)
                const res = await fetch(url);
                const json = await res.json();
                setData(json)
            }catch(err) {
                setError(err)
            }
            setIsLoading(false);
        }

    useEffect(() => {
        fetchData(url)
    },[url]);

    const refetch = (params) => {
        const newParams = Object.values(params)[0];
        let newUrl = newParams ? url += '?' + ( new URLSearchParams(newParams) ).toString() : url;
        return fetchData(newUrl)
    }

    return {
        data,
        isLoading,
        error,
        refetch
    };
}