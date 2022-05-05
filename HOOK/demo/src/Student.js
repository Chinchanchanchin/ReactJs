import { useEffect, useState } from "react";
import {useEffect} from "react";

function Student() {
    const[studentName, setStudentName] = useState("nam")
    useEffect(()=>{
        console.log("useEffect")
    }, [studentName]);
    return(
        <div>
            <h1>{studentName}</h1>
            <input type="text" onKeyUp></input>
        </div>
    )
}
export default Student;