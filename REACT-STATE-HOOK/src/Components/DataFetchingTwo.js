import React from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'
import axios from 'axios'
const initialState ={
    loading:true,
    error:'',
    post:{}
}
const reducer =(state,action)=>{
switch(action.type){
 case 'Fecth_success':
    return{
        loading:false,
        post:action.payload,
        error:''
    }
    case 'Fecth_error':
        return{
            loading:false,
            post:{},
            error:'Something went wrong'
        }
        default:return state
}
}
function DataFetchingTwo() {
    const [state,dispatch]=useReducer(reducer,initialState)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(response=>{
            console.log(response);
            dispatch({type:'Fecth_success',payload:response.data})
        })
        .catch(err=>{
            console.log(err);
          dispatch({type:'Fecth_error'})
        })
    },[])


  return (
    <div>
       {state.loading?'loading':state.post.title}
      {state.error?'error':null}
    </div>
  )
}

export default DataFetchingTwo
