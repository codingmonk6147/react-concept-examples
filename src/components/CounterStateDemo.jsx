import React, { useState } from "react";

function CounterStateDemo(){
    const [count,setCount] = useState(0);

    return (
        <>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Again Increment</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        <button onClick={() => setCount(prevCount => prevCount + 5)}>Increment By 5</button>
        <button onClick={() => setCount(0)}>Reset</button>

        <h1>Count : {count}</h1>
        </>
    );
    
}

export default CounterStateDemo;