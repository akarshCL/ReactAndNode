import React from 'react'

const Login = () => {
  return (
    <div>

        <button onClick={()=>{localStorage.setItem("role","user")}}>Login As user</button>

        <button onClick={()=>{localStorage.setItem("role","retailer")}}>Login As Reatiler</button>

        <button onClick={()=>{localStorage.setItem("role","admin")}}>Login As Admin</button>
    </div>
  )
}

export default Login