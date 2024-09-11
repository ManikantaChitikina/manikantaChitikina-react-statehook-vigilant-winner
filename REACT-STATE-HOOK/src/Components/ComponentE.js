import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'
import { ChannelContext } from '../App'
function ComponentE() {
   const user= useContext(UserContext)
  const channel= useContext(ChannelContext)
  return (
    <div>
      {user} --{channel}
    </div>
  )
}

export default ComponentE
