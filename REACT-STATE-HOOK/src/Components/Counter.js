import React, { useState } from 'react'
import { useMemo } from 'react'
function Counter() {
    const [counterOne,setCounterOne]=useState(0)
    const [CounterTwo,setCounterTwo]=useState(0)

    const incrementOne=()=>{
        setCounterOne(counterOne +1)
    }
    const incrementTwo=()=>{
        setCounterTwo(CounterTwo +1)
    }
    const isEven= useMemo(()=>{
        let i=0;
        while(i<20000000) i++
        return counterOne % 2 === 0 
    },[counterOne])
    
  return (
    <div>
        <div> 
            <button onClick={incrementOne}>CounterOne-{counterOne} </button>
           <span>{isEven ?'even':'odd'}</span>
        </div>
        <div> 
            <button onClick={incrementTwo}>CounterTwo-{CounterTwo} </button>
        </div>
    </div>
  )
}

export default Counter
