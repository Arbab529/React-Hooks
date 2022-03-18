import React from 'react'
import { FirstName, LastName } from '../App'

function CompB() {
  return (
    <>
    <hr />
    <h1>using Context API</h1>
    <hr />
        <FirstName.Consumer>
            {(fname)=>{
                return(
                    <LastName.Consumer>
                        {(lastname)=>{
                            return(
                                <>
                                <h1>First Name: {fname}, Last Name: {lastname}</h1>
                                </>
                            )
                        }}
                    </LastName.Consumer>
                )
            }}
        </FirstName.Consumer>
    </>
  )
}
export default CompB