import { useState, useEffect } from 'react';
import axios from '../api/axios';


export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        setLoading(true);

        axios.get(url).then((response) => {
            setData(response.data);
        }).catch(err => {
            setError(err);
        }).finally(() => {
            setLoading(false);
        })

    }, [url]);

    return { data, loading, error };
}