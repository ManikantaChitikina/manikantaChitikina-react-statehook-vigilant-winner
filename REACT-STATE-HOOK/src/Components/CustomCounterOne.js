import React from 'react'
import { useState } from 'react'
import UseCounter from '../Hooks/UseCounter'
function CustomCounterOne() {
    // const [count,setCount]=useState(0)
    // const increment =()=>{
    //     setCount(prevCount=>prevCount+1)
    // }
    // const decrement =()=>{
    //     setCount(prevCount=>prevCount-1)
    // }
    // const reset =()=>{
    //     setCount(0)
    // }
    const [count,increment,decrement,reset]=UseCounter(0,1)
  return (
    <div>
      <h2> Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CustomCounterOne
