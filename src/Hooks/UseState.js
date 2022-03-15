import {React,useState} from 'react'

export default function UseState() {
    const [Name, setName] = useState("Arbab");
    const [Cond, setCond] = useState(true);
    const updateName=()=>{
        setName("Anjum");
        setCond(!true);
    }
  return (
    <>
        <h1>Hello, {Cond?Name:""}</h1>
        <button onClick={updateName}>Click Me</button>
    </>
  )
}
