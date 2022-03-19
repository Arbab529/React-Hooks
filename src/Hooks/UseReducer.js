import React from 'react'
import { useReducer } from 'react';

const initialState = 0;
const reducer =(currentState,action) => {
//  if(action.type === "INCREMENT"){
//      return currentState+1;
//  }
//  if(action.type === "DECREMENT" &&currentState>0){
//      return currentState-1;
//  }
        switch(action.type){
            case "INCREMENT":
                return currentState+1;
            case "DECREMENT":
                return currentState-1;
        }
}

function UseReducer() {

    const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <>
    <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
    <h1>{state}</h1>
    <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
    </>
  )
}

export default UseReducer