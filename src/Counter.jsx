import { useEffect, useState, useRef } from "react"

import classes from './Counter.module.scss'

export function Counter({ initialValue = 0 }){
    
    const [counter, setCounter] = useState(initialValue)

    const directionRef = useRef(initialValue);
    const previousDirectionRef = useRef('');

    useEffect(() => {
        // Determine the direction of change relative to initialValue
        if (counter > initialValue) {
            directionRef.current = 'up';
        } else if (counter < initialValue) {
            directionRef.current = 'down';
        } else {
            directionRef.current = null;
        }

       
        if (directionRef.current !== previousDirectionRef.current) {
            console.log(`Direction changed to: ${directionRef.current}`);
            previousDirectionRef.current = directionRef.current;
        }
    }, [counter , initialValue]);

    function handleCaunterIncrement(){
     setCounter((c) => c + 1)
    }
    function handleCaunterDecrement(){
    setCounter((c) => c - 1)
    }
    function handleCounterReset(){
    setCounter(initialValue)
    }

    return (
    <div>
     <h2 className={counter % 2 === 0 ? classes.evenBg : classes.oddBg} > I have counted to {counter} </h2>
     <button className={classes.button} onClick = {handleCaunterIncrement}>Increment</button>
     <button className={classes.button} onClick = {handleCaunterDecrement}>Decrement</button>
     <button className={classes.button} onClick = {handleCounterReset}> Reset </button>
    </div>
    )
}