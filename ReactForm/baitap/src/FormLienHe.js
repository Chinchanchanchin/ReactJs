import {useState} from "react";
import {Formik} from "formik";

const FormLienHe = () => {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    const [form, setForm] = useState({});

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const handleValidate = () => {
        const errors ={};
        if (!form.email) {
            errors.email = "Required"
        } else if (!REGEX.email.test(form.email)) {
            errors.email ="Ivalid email address"
        }

        if(!form.phone) {
            errors.phone = "Required"
        }
        return errors;
    }

    const handleSubmit = () => {
        alert("Add contact successfully!!")
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <Formik
            initialValues ={form}
            validate={handleValidate}
            onSubmit={handleSubmit}
            >
            {({errors, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                <div>
                    <p>Name</p>
                    <input type="text" name="username" value={form.username || ""} onChange={handleChange}></input>
                    <p>{errors.email}</p>
                    <p>Email</p>
                    <input type="email" name="email" value={form.email || ""} onChange={handleChange}></input>
                    <p>{errors.email}</p>
                    <p>Phone</p>
                    <input type="number" name="phone" value={form.phone || ""} onChange={handleChange}></input>
                    <p>{errors.phone}</p>
                    <p>Message</p>
                    <textarea></textarea><br/>
                    <button>Submit</button>
                </div>
                </form>
            )}
            </Formik>
        </div>
    )
}

export default FormLienHe;