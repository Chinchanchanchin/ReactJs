// import styles from '.../styles/Login.module.css';

import {useRouter} from 'next/router';

const Login = () => {
    const router = useRouter()
    return (
        <div>
            <h3>Please login</h3>
            <form>
                <input type="text" className="username">Username</input>
                <input type="password" className="password">Password</input>
                <input type="button" className="button">Login</input>
            </form>
        </div>
    )
}
export default Login;