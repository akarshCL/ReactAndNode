

// const Child = ({handleIncreae,count}) => {
//     console.log("its running as ....",handleIncreae)
//   return (
//     <div>Child</div>
//   )
// }

// export default Child;
import React from 'react'
import useCounter from '../CoustomHook/useCounter'

const Child = () => {
    console.log("its running as ....",)


        const{count,inc,dec} =useCounter();
        console.log(count,inc,dec)

        for(let i=0;i<10000;i++){
        
        }
  return (
    <div>Child {count}
    
    <button onClick={inc}>Inc</button>
     <button onClick={dec}>Inc</button>
    </div>
  )
}

export default Child;