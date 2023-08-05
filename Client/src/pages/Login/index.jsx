import {Link} from "react-router-dom";
import {useState} from "react";
import "./style.css"

const index = () => {

    let [email,
        setEmail] = useState("");
    let [password,
        setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="login">
            <div className="login-box">
                <div className="headers">
                    <h2>
                        welcome <span>back!</span>
                    </h2>
                    <p>
                        Log in to access your contacts and stay organized effortlessly.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="inputs">
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="example@gmail.com"/>
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="*42n16j1"/>
                    </div>
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