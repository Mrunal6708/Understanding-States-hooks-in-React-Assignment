import { useEffect, useState } from 'react'
import './App.css'

function useFetch(url){
  const [data , setData]=useState(null);
  const [loading , setLoading]=useState(true);
  const [error , setError]=useState(null);

  useEffect(()=>{
    let isMounted =true;
    setLoading(true);

    fetch(url)
    .then((res)=>{
      if(!res.ok)throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data)=>{
       if(isMounted){
        setData(data);
        setLoading(false);
       }
    })
    .catch((err)=>{
      if(isMounted){
        setError(err.massge);
        setLoading(false);
      }
    })
    return()=>{
      isMounted = false;
    }
  },[url]);

  return {data , loading , error};
}

export default function App(){
  const {data ,loading, error}=useFetch("https://jsonplaceholder.typicode.com/posts");

  if(loading) return <p>Loading</p>;
  if(error) return <p>Error:{error}</p>

  return(
    <div>
      <h1>Posts:</h1>
      <ul>
        {data.slic(0.5).map((post)=>(
          <li key={post.id}>
            <b>{post.title}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
