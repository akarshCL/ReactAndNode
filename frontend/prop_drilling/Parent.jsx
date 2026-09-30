import React, { useContext, useState } from 'react'
import CompA from './CompA'
import { Store } from '../src/ContextProvider/AppProvider'

const Parent = () => {
    // const [name,setName]=useState("akarsh")
    const {setName}=useContext(Store)
    setName("Akarsh")
  return (
    <div>
        <h1>Parent</h1>
        <CompA/>
        
    </div>
  )
}

export default Parent