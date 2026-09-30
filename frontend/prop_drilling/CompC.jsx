import React, { useContext } from 'react'
import { Store } from '../src/ContextProvider/AppProvider'

const CompC = () => {
    const {name}=useContext(Store)
  return (
    <div>CompC :{name}</div>
  )
}

export default CompC