import {Formik, Form, Field} from "formik";
import * as Yup from 'yup';

const YupSchemaForm = () => {
    const YubSchemaRe = Yup.object().shape({
        usename: Yup.string().min(2, "too short").max(10, "too long").required("Please enter usename"),
        email:Yup.string().email("Invalid email").required("Please enter email")
    });

    return (
        <Formik
        initialValues={
            {usename:"", email:""}
        }
        onSubmit={(values)=>{console.log(values)}}
        validationSchema={YubSchemaRe}
        >
        {({errors, touched})=> (
            <Form>
                <Field name="usename" ></Field>
                {errors.usename && touched.usename ? <div className="error-block">{errors.usename}</div> : null}
                <Field name="email" type="email"></Field>
                {errors.email && touched.email ? <div className="error-block">{errors.email}</div> : null}
                <button type="submit">Submit</button>
            </Form>

        )}
        </Formik>
    )
}
export default YupSchemaForm;