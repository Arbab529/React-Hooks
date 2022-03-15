import {React,useState} from 'react'

export default function UseState() {
    const [Name, setName] = useState("Arbab");
    const [Cond, setCond] = useState(true);

    const updateName=()=>{
        setName("Anjum");
        setCond(!true);
    }

    // ////////////////////////////////// Counter

     const [count,setCount]= useState(0);
     const increment=()=>{
          setCount(count+1);
     }

     const decrement=()=>{
       if(count>0){
         setCount(count-1);
        }
     }

  return (
    <>
        <h1>Hello, {Cond?Name:""}</h1>
        <button onClick={updateName}>Click Me</button>
        <hr/>


        <h1>Counter</h1>
        <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
        <hr/>
    </>
  )
}
