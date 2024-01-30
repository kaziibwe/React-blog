import { useState, useEffect } from 'react';

// custom hook to avoid repeating
const useFetch = (url) => {
    const [data, setbData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // use astate hook
    useEffect(() => {
        const abortCont = new AbortController();
       
        setTimeout(() => {
            fetch(url,{signal:abortCont.signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resoures');
                    }
                    // console.log(res)
                    return res.json();
                })
                .then(data => {
                    setError(null);
                    setIsPending(false);
                    setbData(data);

                })
                .catch(err => {
                    // console.log(err.message)
                    if(err.name==='AbortError'){
                        console.log('fetch aborted')
                    }else{
                        setError(err.message);
                        setIsPending(false);
                    }
                  

                })
        }, 1000);

        return () => abortCont.abort();



    }, []);

    return { data,isPending,error}
}
 
export default useFetch;