import {React,useContext} from 'react'
import { FirstName, LastName } from '../App';

function UseContext() {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
  return (
    <>
    <hr />
     <h1>Using UseContext Hook</h1>
     <hr />
      <h1>{`${fname},,,,,,${lname}`}</h1>
    </>
  )
}
export default UseContext