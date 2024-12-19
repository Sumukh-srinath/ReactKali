import React from 'react'
import { useState, useEffect } from 'react'

function Challenge6() {

    const [counter, setCounter] = useState(0)
    const [stop, setStop] = useState(true)
    useEffect(() => {
        if (stop) {
            return
        }
        const interval = setInterval(() => setCounter(stop => stop + 1), 1000)

        return () => {
            clearInterval(interval)
        }
    }, [stop])
    return (
        <div>
            <h4>
                Challenge 1: Auto-Increment Counter with Cleanup
                Task:
                Create a React component that:

                Displays a counter that automatically increments by 1 every second.
                Includes a "Stop Counter" button that stops the counter when clicked.
                Requirements:

                Use useState to manage the counter.
                Use useEffect to handle the interval.
                Ensure proper cleanup to avoid memory leaks.
            </h4>

            <span>Counter Value : {counter} </span><button onClick={() => { setStop(!stop); }}>{stop ? 'Start' : 'Stop'}</button>
        </div>
    )
}

export default Challenge6