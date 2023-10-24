import { useState } from "react";

function Counter() {
    console.log("RENDERED!!!");
    const [count, setCount] = useState(0);
    const addOne = () => {
        setCount(count + 1);
    };

    const addThree = () => {
        setCount(CurrentCount => CurrentCount + 1);
        setCount(CurrentCount => CurrentCount + 1);
        setCount(CurrentCount => CurrentCount + 1);
    };

    const setToTen = () => {
        setCount(10);
    }


    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
            <button onClick={setToTen}>Set to 10</button>
        </div>
    );
}

export default Counter;
