import React, { useState } from 'react'
import Button from './Button'

const Form = () => {
  const [login,setLogin]=useState({
    name:'',
    password:'',
  })
    
  const handleChange = (e) => {
    setLogin({...login,[e.target.name]:e.target.value})
    console.log(login)
  }

    const handlesubmit=()=>{
        localStorage.setItem("login",JSON.stringify(login))
        const user = JSON.parse(localStorage.getItem('login'));
        console.log(user)
    }
    // useEffect(()=>{
    //   localStorage.setItem("login",login)
    // },[login])
  

  return (
    <div>
     <label>
        Name:
        <input type="text" name="name" value={login.name} onChange={handleChange} required />
      </label>
      <label>
        Password:
        <input type="text" name="password" value={login.password} onChange={handleChange} required />
      </label>   
      <Button name="Submit" onClick={handlesubmit}/>
    </div>
  )
}

export default Form
