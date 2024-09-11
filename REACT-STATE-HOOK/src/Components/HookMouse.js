import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
function HookMouse() {
const [x,setX]=useState(0);
const [y,setY]=useState(0);
 const logMousePosition=e=>{
console.log('mouse event');
    setX(e.clientX)
    setY(e.clientY)
}
useEffect(()=>{
    console.log('use effect called');
    window.addEventListener("mouse moved",logMousePosition);
     return ()=>{
        console.log('componnet unmount code');
        window.removeEventListener("mouse moved",logMousePosition)
     }

},[])

  return (

    <div>
      Hooks X--{x} Y--{y}
    </div>
  )
}

export default HookMouse
