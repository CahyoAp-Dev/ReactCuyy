import { useState } from "react";

export default function Counter(){
    let [counter, setCount] = useState(0);

    function handleClick(){
        setCount(counter + 1);
    }

    return (
        <div>
            <div>
                <button onClick={handleClick}>Increment</button>
            </div>
            <h1>Counter: {counter}</h1>
        </div>
    )
}