import React, { useMemo, useState } from 'react';
function fib(n){
    console.log("its calculating again ")
    if(n<=1) return n;
    return fib(n-1)+fib(n-2)
}

const USEMEMOHOOK = () => {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);

    // const result=fib(number)without usememo 

   const result= useMemo(()=>{// with usememo which is memorizing the value
        return fib(number)
    },[number])

    return (
        <div>
            <h1>UseMemo Hook</h1>
           <h1> Fib number{result}</h1>
            <br/>
            <input
                type='number'
                value={number}
                onChange={(e) => {
                    setNumber(Number(e.target.value));
                }}
            />
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Click to increase the value {count}
            </button>
        </div>
    );
};

export default USEMEMOHOOK;
