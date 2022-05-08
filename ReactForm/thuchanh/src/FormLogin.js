import {useState} from "react";


const FormLogin = () => {
    const MESSAGE_ERROR = {
        username: "Username error",
        email: "Email error",
        password: "Password error",
        confirmpassword: "Password must be the same",
    }
const  REGEX = {
    username: /^[a-zA-Z]{2,}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
  };

const [form, setForm] = useState({})

const handleChange = (event) => {
    let error ="";

    if (event.target.name === "passport") {
        if(form.confirmpassword && form.confirmpassword.value) {
            error = event.target.value === form.confirmpassword.value ? "" : MESSAGE_ERROR[event.target.name];
        } else {
            error = REGEX[event.target.name].test(event.target.value) ? "" : MESSAGE_ERROR[event.target.name];
        }
    } else if (event.target.name === "confirmpassord") {
        error = event.target.value === form.password.value ? "" : MESSAGE_ERROR[event.target.name];
    } else {
        error =REGEX[event.target.name].test(event.target.value) ? "" : MESSAGE_ERROR[event.target.name];
    }
    setForm({...form, [event.target.name]: {value: event.target.value, error: error}});
}

const handleSubmit = () => {
    const isFilled = form.username && form.username.value
    && form.email && form.email.value
    && form.password && form.password.value
    && form.confirmpassword && form.confirmpassword.value;

    const isError = isFilled && (form.username.error || form.email.error || form.password.error || form.confirmpassword.error);

    alert(isFilled && !isError ? "Sign up successfully!!!" : "Please fill out all the fields!!!")

}

return (
    <div>
            <h1>Sign Up</h1>
            <div>
                <h5>Usename</h5>
                <input type="text" name="username" value={form.username && form.username.value} onChange={handleChange}></input>
                {form.username && form.username.error && (
            <p className="error">{form.username.error}</p>
          )}
            </div>
            <div>
                <h5>Email</h5>
                <input type="email" name="email" value={form.email && form.email.value} onChange={handleChange}></input>
                {form.email && form.email.error && (
            <p className="error">{form.email.error}</p>
          )}
            </div>
            <div>
                <h5>Password</h5>
                <input type="password" name="password" value={form.password && form.password.value} onChange={handleChange}></input>
                {form.password && form.password.error && (
            <p className="error">{form.password.error}</p>
          )}
            </div>
            <div>
                <h5>Confirm Password</h5>
                <input type="password" name="confirmpassword" value={form.confirmpassword && form.confirmpassword.value} onChange={handleChange}></input>
                {form.confirmpassword && form.confirmpassword.error && (<p className="error">{form.confirmpassword.error}</p>)}
            </div>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
)

}
export default FormLogin;