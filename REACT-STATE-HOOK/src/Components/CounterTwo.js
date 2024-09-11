import React from 'react'
import { useReducer } from 'react'

const initialState={
    FirstCounter:0,
    secondCounter:10
}
const reducer=(state,action)=>{

    switch(action.type){
        case 'increment':   return {...state,FirstCounter: state.FirstCounter+action.vaule}
        case 'decrement':   return {...state,FirstCounter: state.FirstCounter-action.vaule}
        case 'increment2':   return {...state,secondCounter: state.secondCounter + action.vaule}
        case 'decrement2':   return {...state,secondCounter: state.secondCounter - action.vaule}
        case 'reset'    :   return initialState
        default         :   return state

    }
}
function CounterTwo() {
   const [count,dispath]= useReducer(reducer,initialState)  
  return (
    <div>
        <div>FirstCounter- {count.FirstCounter}</div>
        <div>SecondCounter- {count.secondCounter}</div>
      <button onClick={()=>dispath({type:'increment',vaule:1})}>Increment</button>
      <button onClick={()=>dispath({type:'decrement',vaule:1})}>Decrement</button>
      <button onClick={()=>dispath({type:'increment',vaule:5})}>Increment 5</button>
      <button onClick={()=>dispath({type:'decrement',vaule:5})}>Decrement 5</button>
      <div>
      <button onClick={()=>dispath({type:'increment2',vaule:1})}>Increment 10</button>
      <button onClick={()=>dispath({type:'decrement2',vaule:1})}>Decrement 10</button>
      </div>
      
      <button onClick={()=>dispath({type:'reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo
