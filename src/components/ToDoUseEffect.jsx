import React, { useEffect, useState } from 'react';

const ToDoUseEffect = () => {
    const [date, setDate] = useState(new Date())

    const tick = () => {
        console.log('clock ticking');
        setDate(new Date())
    }
    //with out cleanup  
    /* useEffect(()=>{
        console.log('starting timer');
        setInterval(tick,1000)
        
    },[]) */


    useEffect(() => {
        console.log('starting timer');
        const interval = setInterval(tick, 1000);

        //this will to the clean up after the work is done
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div>
            <h3>Date: {date.toLocaleTimeString()}</h3>


        </div>
    );
};

export default ToDoUseEffect;