import "./Counter.css"
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className = "counter-box">
            <h2>Counter value: {count}</h2>
            <button className = "counter-btn" onClick={() => setCount(count+1)}>Increment</button>
            <button className = "counter-btn" onClick={() => setCount(count-1)}>Decrement</button>
            <button className = "counter-btn" onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;