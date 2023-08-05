import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import "./style.css"
import axios from "axios"

const index = () => {

    let [email,
        setEmail] = useState("");
    let [password,
        setPassword] = useState("");
    let [error,
        setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault();

        const data = {
            email,
            password
        }

        try {
            let response = await axios.post("http://127.0.0.1:8000/api/login", data);
            localStorage.setItem('token', response.data.authorisation.token)
            navigate("/home")
        } catch (error) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        }
    };

    return (
        <div className="login">
            <div className="login-box">
                <div className="headers">
                    <h2>
                        welcome
                        <span>back!</span>
                    </h2>
                    <p>
                        Log in to access your contacts and stay organized effortlessly.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="inputs">
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="example@gmail.com"/>
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="*42n16j1"/>
                    </div>
                    {error && <div className="error">Wrong Credentials</div>}
                    <div className="submit-button">
                        <button type="submit">Login</button>
                    </div>
                    <p className="to-register">
                        Don't have an account?
                        <Link to="./../Register">
                            <span>Register</span>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default index