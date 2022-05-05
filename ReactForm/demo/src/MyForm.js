import {useState} from "react"

const MyForm = () => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(0)
    const handleChange = (e) => {
        setAge(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
    }
    let message;
    if (age > 0) {
        message = ">0"
    } else {
        message = "";
    }
    return(
        <form onSubmit={handleSubmit}>
            <h3>Your Name: {username} - {age}</h3>
            <input type="text" className="" placeholder="Enter your name" onKeyUp={(e) => {setUsername(e.target.value)}}></input>
            <br></br>
            <input type="number" className="" placeholder="Enter your age" onKeyUp={handleChange}></input>
            <input type="submit" value="Submit"></input>
            <h3>{message}</h3>
        </form>
    )
}
export default MyForm;