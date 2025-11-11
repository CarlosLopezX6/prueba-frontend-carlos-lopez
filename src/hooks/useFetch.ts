import { useState, useEffect } from "react";


export const useFetch = <T>(url?: string | null, reqOpt?: RequestInit) => {

    const [data, setData] = useState<T | undefined>();
    const [error, setError] = useState<unknown>();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);


    const fetchData = async () => {

        if (!url) return;

        setIsLoading(true);

        try {
            const res = await fetch(url, reqOpt);
            const json = await res.json();

            if (res.ok) {
                setIsSuccess(true);
                setData(json);
                setError(undefined);
            } else {
                setIsSuccess(false);
                setError(json);
                setData(undefined);
            }
    
        } catch (e) {
            setIsSuccess(false);
            setData(undefined);
            setError(e);
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        fetchData();
    }, [url]);


    return { data, error, isLoading, isError: !isSuccess, isSuccess, refetch: fetchData };
}   