import React from 'react'
import { useState } from 'react'
import UseInput from '../Hooks/UseInput';
function UserForm() {
    // const [firstName,setFirstName]=useState('');
    // const [LastName,setLastName]=useState('');
    const [firstName, bindFirstName, resetFirstName] = UseInput('')
    const [lastName,bindLastName,resetLastName] = UseInput('')

    const  submitHandler =e=>{
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName();
        resetLastName();
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
            <label>First name</label>
            {/* <input type='text' value={firstName} onChange={e=>setFirstName(e.target.value)}></input> */}
           <input {...bindFirstName} type='text'></input>
        </div>
        <div>
            <label>Last name</label>
            {/* <input type='text' value={LastName} onChange={e=>setLastName(e.target.value)}></input> */}
            <input {...bindLastName} type='text'></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
