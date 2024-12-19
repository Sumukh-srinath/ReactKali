import React, { useEffect, useState } from 'react'
const clockVal = {
    hours: 0, minutes: 0, seconds: 0
}
function Challenge8() {
    const [clock, setClock] = useState(clockVal)
    const [stop, setStop] = useState(true)
    const [pause, setPause] = useState(false)
    useEffect(() => {
        let interval = null
        if (!stop && !pause) {
            interval = setInterval(() => {
                setClock((prev) => ({
                    ...prev,
                    seconds: prev.seconds >= 59 ? 0 : prev.seconds + 1,
                    minutes: prev.seconds + 1 > 59 ? (prev.minutes + 1) % 60 : prev.minutes,
                    hours: prev.seconds + 1 > 59 && prev.minutes + 1 > 59 ? (prev.hours + 1) % 24 : prev.hours
                }))
            }, 1000);
        }
        return () => {
            clearInterval(interval)
        }

    }, [stop, pause])
    return (
        <div>
            <h4>Challenge 3: StopWatch</h4>
            {String(clock.hours).padStart(2, '0')}:
            {String(clock.minutes).padStart(2, '0')}:
            {String(clock.seconds).padStart(2, '0')}
            <button onClick={() => {
                setStop(!stop);
                setClock(clockVal);
                setPause(false)
            }}>
                {stop ? 'Start' : 'Stop'}</button>
            {!stop &&
                <button onClick={() => setPause(!pause)}>
                    {!pause ? 'Pause' : 'Resume'}</button>
            }
        </div>
    )
}

export default Challenge8