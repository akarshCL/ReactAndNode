import React, { lazy, Suspense, useCallback, useState } from 'react'
// import Child from './Child';

import useCounter from '../CoustomHook/useCounter';
const Child = lazy(()=>import ("./Child"))
const Parent = () => {



    const [count,setcount]=useState(0);
    const [name,setName]=useState("")
    const handleIncreae=()=>{
        
        console.log("its running and doing some task")
    }

// const handleIncreae=useCallback(()=>{
//  console.log("its running and doing some task")
// },[])


  return (
    <div>
        <h1>parent</h1>

        count:{count}
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>


        <button onClick={(()=>{setcount(count+1)})}>Click </button>
        <Suspense fallback={<h1>loading...</h1>}>
       <Child />
        </Suspense>
 
        {/* <Child count={count}/> */}

    </div>
  )
}

export default Parent