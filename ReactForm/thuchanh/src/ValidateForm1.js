
import { useState } from "react";

const ValidateFormSignup = () => {
    
    const MESSAGE_ERROR = {
        email: "Email error",
        password: "Password error"
      };
    
      const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
      };

    const [form, setForm] = useState({});

    const handleChange = (event) => {
        let error = REGEX[event.target.name].test(event.target.value) ? "" : MESSAGE_ERROR[event.target.name];
        setForm({...form, [event.target.name]: {value: event.target.value, error: error}});
    };

    const handleSubmit = () => {
        const isValid = form.email && form.email.value && form.password && form.password.value;
        const isError = isValid && (form.email.error || form.password.error);
        if(isValid && !isError) {
            alert("success")
        } else {alert("please fill")}
    }

    return(
        <div>
            <h1>Sign Up</h1>
            <div>
                <p>Email</p>
                <input type="email" name="email" value={form.email && form.email.value} onChange={handleChange}></input>
                {form.email && form.email.error && (<p className="error">Email error</p>)}
            </div>
            <div>
                <p>password</p>
                <input type="password" name="password" value={form.password && form.password.value} onChange={handleChange}></input>
                {form.password && form.password.error && (<p className="error">Password error</p>)}
            </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )

}

export default ValidateFormSignup;