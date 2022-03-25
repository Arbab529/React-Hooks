import React,{useState,useRef,useEffect} from 'react'

function UseRef() {
  const [Name, setName] = useState('');
  const [Counter, setCounter] = useState(0);
  console.log(Counter);
  const inputEle = useRef('');
  const PreviousRandomNumber = useRef('');
  const resetInput = () => {
    setName('');
    inputEle.current.focus();
  }
  useEffect(()=>{
    PreviousRandomNumber.current = Counter;
    console.log(PreviousRandomNumber.current);
  },[Counter])
  return (
    <> 
        <input type="text" ref={inputEle} id="input" value={Name} onChange={(e)=>setName(e.target.value)}/>
        <button type='submit' onClick={resetInput}>Click Me</button>
        <h1>My name is {Name}</h1>
        <br />
        <h1>Random Number = {Counter}</h1>
        <h1>Previous Number Was = {PreviousRandomNumber.current}</h1>
        <button onClick={(e)=>setCounter(Math.ceil(Math.random()*100))}>Generate Random</button>
    </>

  )
}

export default UseRef