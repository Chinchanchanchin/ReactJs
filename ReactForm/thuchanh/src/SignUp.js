import {useState} from "react";

const SignUpForm = () => {
    const [form, setForm] = useState({});

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    const handleSubmit = () => {
        const isValid = form.username && form.email && form.password && form.confirmpassword;
        if(isValid) {
            alert("Sign in success!!!")
        } else {
            alert("Please fill out all the fields!!!")
        }

    }

    return(
        <div>
            <h1>Sign Up</h1>
            <div>
                <h5>Usename</h5>
                <input type="text" name="username" value={form.username} onChange={handleChange}></input>
            </div>
            <div>
                <h5>Email</h5>
                <input type="email" name="email" value={form.email} onChange={handleChange}></input>
            </div>
            <div>
                <h5>Password</h5>
                <input type="password" name="password" value={form.password} onChange={handleChange}></input>
            </div>
            <div>
                <h5>Confirm Password</h5>
                <input type="password" name="confirmpassword" value={form.confirmpassword} onChange={handleChange}></input>
            </div>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default SignUpForm;