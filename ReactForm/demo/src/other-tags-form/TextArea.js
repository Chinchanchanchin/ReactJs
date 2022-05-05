import {useState} from "react"
const Textarea = () => {
    const [message, setMessage] = useState("")
    const handleChange=(e)=>{
        setMessage(e.target.value)
    }
    return (
        <form>
            <textarea name="abc" value={message} onKeyUp={handleChange}></textarea>
        </form>
    )
}
export default Textarea;