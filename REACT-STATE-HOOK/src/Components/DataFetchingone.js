import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
function DataFetchingone() {
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState('');
    const [post,setPost]=useState({});
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(res=>{
            console.log(res);
            setLoading(false);
            setPost(res.data);
            setError('')
        })
        .catch(err=>{
            console.log(err);
            setLoading(false);
            setPost({});
            setError('some thing went wrong')
        })
    },[])
  return (
    <div>
      {loading?'loading':post.title}
      {error?'error':null}
    </div>
  )
}

export default DataFetchingone
