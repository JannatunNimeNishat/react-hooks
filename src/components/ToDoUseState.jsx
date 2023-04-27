import React, { useState } from 'react';
import ToDoUseEffect from './ToDoUseEffect';

const ToDoUseState = () => {
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(true);

    const handleCount = () => {
        setCount(count + 1)
    }
    const handleCountBy5 = () => {
        console.log('by 5');
        let i = 0;
        while (i < 5) {
            setCount((pervState) => pervState + 1);
            i++;
        }

    }
    return (
        <div>
            <h4>{count}</h4>
            <h1 onClick={handleCount}>+1</h1>
            <h1 onClick={handleCountBy5}>+5</h1>
            <div>

                {
                    show && <ToDoUseEffect></ToDoUseEffect>
                }
            </div>
            <button onClick={() => setShow((pervState)=> !pervState)}>
                {
                    show ? 'hide time' : 'show time'
                }
            </button>

        </div>
    );
};

export default ToDoUseState;