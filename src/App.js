import './App.css';
// import Api from './components/Api';
import Todo from './components/Todo';
// import Counter from './components/Counter';
// import Button from './components/Button'
// import Form from './components/Form';
// import Localstorage from './components/Localstorage'
// import Modal from './components/Modal'
// import { useState } from 'react';


function App() {

  // const[mode,setMode]=useState(false)// true  false {display:"block"}
  // const handleopen=()=>{
  //   setMode(true)
  //   // document.body.style.background = "grey";
  //   console.log(mode)
  // }
  // const handleclose=()=>{
  //   setMode(false)
  //   // document.body.style.background = "white";
  // }

  return (
    <>
    {/* <Counter/> */}
    {/* <Button name="open" onClick={handleopen}/>{
     mode && <Modal  onClick={handleclose}/>} */}
    {/* <Localstorage/> */}
     {/* <Form/>      */}
     {/* <Api/>  */}
     <Todo/>
    </>
  );
}

export default App;
