import React from 'react'
import UseContext from '../Hooks/UseContext'
import CompB from './CompB'

function CompA() {
  return (
    <>
    <CompB/>
    <UseContext/>
    </>
  )
}

export default CompA