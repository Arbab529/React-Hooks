import React,{useState,useEffect} from 'react'

export default function UseEffect() {
  const [Count, setCount] = useState(0);
  const [Width, setWidth] = useState(window.screen.width);
  useEffect(() => {
    if (Count>=1) {
      document.title=`Chats(${Count})`;
    }
    else{
      document.title=`Chats`;
    }
   
    return () => {
     console.log("Cleanup");
    };
  },[Count]);

  const actualWidth = ()=>{
    setWidth(window.innerWidth);
  }
    useEffect(() => {
      window.addEventListener("resize",actualWidth);
      return()=>{
              window.removeEventListener("resize",actualWidth);
      }
    });

  return (
    <>
    <h1>Chat Count</h1>
    <h1>{Count}</h1>
    <button onClick={()=>setCount(Count+1)}>Click</button>
    <br /><br />
    <h1>Window Size</h1>
    <h1>{Width}px</h1>
    </>
  )
}
