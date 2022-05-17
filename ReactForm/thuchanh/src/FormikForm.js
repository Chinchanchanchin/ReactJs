import { useState } from "react";
import {Formik} from "formik";

 const FormikForm = () => {
     const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
     }

     const [form, setForm] = useState({});

     const handleChange = (event) => {
         setForm({...form, [event.target.name]: event.target.value})
     }

     const validateChange = () => {
         const errors = {};
        if(!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
        }
        if(!form.password) {
            errors.password = "Required";
        }
        return errors;
     }
     const handleSubmit = () => {
         alert("Success!!!")
     }
     return (
         <div>
             <h1>Login</h1>
       <Formik
        initialValues ={form}
        validate ={validateChange}
        onSubmit={handleSubmit}
       >
        {({errors, handleSubmit}) => (
            <form onSubmit={handleSubmit}> 
                <div>
                    <p>Email</p>
                    <input type="email" name="email" value={form.email || ""} onChange={handleChange}></input>
                    <p>{errors.email}</p>
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" name="password" value={form.password || ""} onChange={handleChange}></input>
                    <p>{errors.password}</p>
                </div>
                <button type="button">Login</button>
            </form>
        )}
       </Formik>
       </div>
     )
 }

 export default FormikForm;