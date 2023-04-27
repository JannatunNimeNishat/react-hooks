import React, { useMemo, useState } from 'react';

const ToDoUseMemo = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const handleIncrementBy1 = () => {
        setCount1((pervState) => pervState + 1);
    }
    const handleIncrementBy5 = () => {
        setCount2((pervState) => pervState + 5);
    }
    const evenOdd = useMemo(() => {
        console.log('inside costly function');
        let i = 0;
        while (i < 1000) {
            console.log('hi');
            i = i + 1;
        }
        return count1 % 2 == 0;
    },[count1])
    return (
        <div>
            <h2>
                {
                    evenOdd ? 'even' : 'odd'
                }
            </h2>
            <h2>{count1}</h2>
            <button onClick={handleIncrementBy1}>Increment by 1</button>
            <hr />
            <h2>{count2}</h2>
            <button onClick={handleIncrementBy5}>Increment by 5</button>
        </div>
    );
};

export default ToDoUseMemo;