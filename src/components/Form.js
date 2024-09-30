import React, { useState } from 'react'
import Button from './Button'

const Form = () => {
    const [name,setName]=useState("")
    const [password, setPassword]=useState("")
    const [error,setError]=useState({
      name: false,
      password: false
    })
    // const [nameerror,setNameerror] = useState(false)
    // const [passworderror,setPassworderror] = useState(false)
    // console.log(error.name,error.password)
    // console.log(typeof(error.name))
    
    const handlename=(e)=>{
      // const temperror ={...error}
      // temperror.name = false
      setName(e.target.value)
      setError((p)=>({...p,name:false}))
    }
    
    const handlepassword=(e)=>{
      // const temperror ={...error}
      // temperror.password = false
        setPassword(e.target.value)
        setError((p)=>({...p,password:false}))
        // setError({
        //   ...temperror
        // })

    }

    const handlesubmit=(e)=>{
        // e.preventDefault();
        // const temperror={error}
        if(name.length===0){
          // temperror.name= true
          setError((p)=>({...p,name:true})) // (p) => p+1
          // console.log(error)
        }
        if(password.length===0){
          setError((p)=>({...p,password:true}))
          // temperror.password= true
        }
        // setError({
        //   ...temperror
        // })
        if(name && password){
          console.log("Name: " +name + " ,Password: "+ password)
        }
    }
    

  return (
    <div>
     <label>
        Name:
        <input type="text" name="name" value={name} onChange={handlename} required />
      </label>
      {error.name && <span>name required</span>}
      <label>
        Password:
        <input type="text" name="pasword" value={password} onChange={handlepassword} required />
      </label>   
      {error.password && <span>password required</span>}
      <Button name="Submit" onClick={handlesubmit}/>
    </div>
  )
}

export default Form
