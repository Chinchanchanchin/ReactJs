import { useState } from "react";

function Increase () {
    const [number, setNumber] = useState(0)
    let increaseNumber = () => {
        setNumber(number + 1)
    }
    let decreaseNumber = () => {
        setNumber(number -1 )
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={increaseNumber}>Increase</button>
            <button onClick={decreaseNumber}>Decrease</button>
        </div>
    )
}
export default Increase;

