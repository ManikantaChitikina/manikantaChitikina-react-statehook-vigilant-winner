import React from 'react'
import { useState } from "react"

function HookCounterThree() {
    const [name,setName ]=useState({firstName:'',lastName:''})
  return (
    <div>
      <form>
        <input type='text'  value={name.firstName} onChange={e=>(setName({...name, firstName:e.target.value}))}></input>
     
        <input type='text'  value={name.lastName} onChange={e=>(setName({...name, lastName:e.target.value}))}></input>
            <h2>Your Firstname is {name.firstName}</h2>
            <h2>Your LastName is {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  )
}

export default HookCounterThree
