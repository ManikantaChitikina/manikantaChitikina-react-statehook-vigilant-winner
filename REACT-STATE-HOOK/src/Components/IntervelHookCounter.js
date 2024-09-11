import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
function IntervelHookCounter() {
    const [count,setCount]=useState(0)
    const tick=()=>{
        // setCount(count+1)
        setCount(prevcount=>prevcount+1)
    }
    useEffect(()=>{
        const intervel=setInterval(tick,1000)
        return()=>{
            clearInterval(intervel)
        }
    // },[count])
     },[])
  return (
    <div>
      {count}
    </div>
  )
}

export default IntervelHookCounter
