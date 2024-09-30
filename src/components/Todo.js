import React,{useState} from 'react'
import Button from './Button'

const Todo = () => {
    const [task,setTask]=useState({
        name:'',
        status:'',
      })
    const [error,setError]=useState({
        name: false,
        status: false
    })
    const handleChange=(e)=>{
        setTask({...task,[e.target.name]:e.target.value})
        setError((p)=>({...p,name:false}))
    console.log(task)
    }

    const handlesubmit=()=>{
        localStorage.setItem("task",JSON.stringify(task))
        const user = JSON.parse(localStorage.getItem('task'));
        console.log(user)
    }

  return (
    <div>
        <label>
        Name:
        <input type="text" name="name" value={task.name} onChange={handleChange} required />
      </label>
      {error.name && <span>name required</span>}
      <label>
        Status:
        <input type="text" name="status" value={task.status} onChange={handleChange} required />
      </label>   
      {error.password && <span>password required</span>}
      <Button name="Submit" onClick={handlesubmit}/>      
    </div>
  )
}

export default Todo
