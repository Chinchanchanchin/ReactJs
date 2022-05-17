import { useState } from "react";
import { Formik } from "formik";

const Library = () => {
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({});
    const [indexSelected, setIndexSelected] = useState(-1);

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleValidate = () => {
        const errors = {};
        if (!form.number) {
            errors.number = "required"
        }
    }

    const handleSelect = (book, index) => {
        setForm({...books, [book.name]: book.value})
        setIndexSelected({...indexSelected, [index.name]: [index.value]})
    }
    const handleDelete = (index) => {
        const newBooks = JSON.parse(JSON.stringify(books));
        newBooks.splice(index)
        setBooks(newBooks.books);
    }
    const handleSubmit = () => {
        const newBooks = JSON.parse(JSON.stringify(books));
        if (indexSelected > -1) {
            newBooks.splice(indexSelected,1,form)
        } else{
            newBooks.push(form)
        }
        setBooks(newBooks.books);
        setForm({form});
        setIndexSelected(-1)
    }

    return (
        <div>
            <h1>Library</h1>
        <Formik
        initialValues= {form}
        validate={handleValidate}
        onSubmit={handleSubmit}
        >
        {({errors,handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <label>Tieu de</label>
                <input name="tieude" value={form.name} type="text"></input>
                <label>So luong</label>
                <input name="soluong" value={form.name} type="number"></input>
                <button type="button"></button>
            </form>
        )}
        </Formik>
                {newbooks.map((book)=>{
                    <table>
                        <td></td>
                    </table>
                })}
        </div>
    )
}

export default Library;