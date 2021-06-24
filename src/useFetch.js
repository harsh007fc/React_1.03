import {useState,useEffect} from 'react'
let useFetch = (url) =>{
    let [data,setData] = useState(null);
    let [isPending,setIsPending] = useState(true);
    let [error,setError] = useState(null);
    useEffect(()=>{ 
        fetch(url)
        .then(res=>{
            console.log(res);
            if(!res.ok){
                throw Error('Could not fetch the data for that resource')
            }
           return res.json();
        }).then((data)=>{
            setData(data);
            setIsPending(false); 
            setError(null)
        }).catch((err)=>{
            setIsPending(false); 
            setError(err.message);
        }); 
    },[url]);
    return {data,isPending,error}
}


export default useFetch;