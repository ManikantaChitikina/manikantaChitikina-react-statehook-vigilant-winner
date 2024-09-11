import React,{useState} from 'react'

function HookCounterTwo() {
    const initialcount =0;
    const [count,setCount]=useState(initialcount)
  const incrementFive=()=>{
        for(let i=0;i<5 ;i++)
        {
            // setCount(count+1)
            setCount(prevCount=>prevCount+1)
        }
    }

  return (
    <div>
      Count:{count}
      <button onClick={()=>setCount(initialcount)}>Reset</button>
      {/* <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button> */}
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
      <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
      <button onClick={incrementFive}>Increemnt 5</button>
    </div>
  )
}

export default HookCounterTwo
