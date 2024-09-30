import React,{useState} from "react";
import Button from "./Button";

const Counter=()=>{
    const[count,setCount]=useState(0)
    

    const handlePlus=()=>{
        setCount(count+1)
        setCount(count+1)
        setCount(count+3)
        // setCount((n)=>n+1)
        // setCount((n)=>n+1)
    }

    const handleminus=()=>{
        setCount(count-1)
    }
    
    return(
        <>
        <div style={{display:"flex", justifyContent:"center", gap:"10px",alignItems:"center"}}>
        <Button title={"minus"} name={"-"} onclick={handleminus}/>
        <div style ={{fontSize:"4rem"}}>{count}</div>
        <Button title={"plus"} name={"+"} onclick={handlePlus}/>
        </div>
        </>
    )
}
export default Counter;