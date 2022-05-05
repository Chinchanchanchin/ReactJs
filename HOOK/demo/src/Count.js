import { useEffect, useState } from "react";

function Count() {
    const [number, setNumber] = useState(0)
 
    useEffect(()=> {
        if (number == 10) {
            {setNumber(0)}
        }
    }, [number])
    
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={(e) => {setNumber(number +1)}}>Increase</button>
        </div>
    )
}
export default Count;