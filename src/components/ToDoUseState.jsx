import React, { useState } from 'react';

const ToDoUseState = () => {
    const [count,setCount] = useState(0)
    const handleCount = ()=>{
        setCount(count+1)
    }
    const handleCountBy5 = () =>{
        console.log('by 5');
        let i = 0;
        while(i<5){
            setCount((pervState)=> pervState +1);
            i++;
        }

    }
    return (
        <div>
            <h4>{count}</h4>
            <h1 onClick={handleCount}>+1</h1>
            <h1 onClick={handleCountBy5}>+5</h1>

        </div>
    );
};

export default ToDoUseState;