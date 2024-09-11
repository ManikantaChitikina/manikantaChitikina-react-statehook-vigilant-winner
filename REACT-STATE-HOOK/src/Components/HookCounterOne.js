import React from 'react'
import { useState } from "react"
import { useEffect } from 'react'
function HookCounterOne() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('')

    useEffect(()=>{
      console.log("Use effect updating document title")
        document.title=`You cliclked ${count} times`
    },[count])

  return (
    <div>
      <input type='text' value={name} onChange={event=>setName(event.target.value)}></input>
      <button onClick={()=>setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounterOne
