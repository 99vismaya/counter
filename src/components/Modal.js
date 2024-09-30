import React from 'react'
import Button from './Button';


const Modal = ({onClick}) => {
  // console.log(mode)
  
return (
    <div style={{backgroundColor:"red"}}><Button name="close" onClick={onClick}/></div>
    /* <div style={{display:mode===true?'block':'none',backgroundColor:"grey"}}><button className='close' onClick={handleclose}>Close</button></div>  */
  )
}
export default Modal;

