import React,{useRef} from 'react'

function UseRef() {
  const ref= useRef(null);
  const submitform = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
  }

  return (
    <>
        <form onSubmit={submitform}>
          <input type="text" ref={ref} id="input"/>
          <br />
          <button type='submit'>Click Me</button>
        </form>
    </>

  )
}

export default UseRef