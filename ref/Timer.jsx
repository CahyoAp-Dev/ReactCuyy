import { useRef, useState } from "react";

export default function Timer() {
    const [start, setStart] = useState(null);
    const [now, setNow] = useState(null);
    const timer = useRef(null);

    function handleStart() {
        const startTime = Date.now();
        setStart(startTime);
        setNow(startTime);

        timer.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current);
    }

    return (
        <>
            <h1>Timer : {start && now ? now - start : 0} ms</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    );
}
