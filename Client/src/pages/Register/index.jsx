import {Link} from "react-router-dom";
import "./style.css"
import { useState } from "react";

const index = () => {

    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()


    }

    return (
        <div className="register">
            <div className="register-box">
                <div className="headers">
                    <h2>
                        create your <span>account</span>
                    </h2>
                    <p>
                        Start managing your contacts by creating an account. It's quick and easy!
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="inputs">
                    <div className="name-inputs">
                        <div className="input first-name-input">
                            <label htmlFor="first-name">First Name</label>
                            <input onChange={e => setFirstName(e.target.value)} type="text" placeholder="Mohammad"/>
                        </div>
                        <div className="input last-name-input">
                            <label htmlFor="last-name">Last Name</label>
                            <input onChange={e => setLastName(e.target.value)} type="text" placeholder="Hussein"/>
                        </div>
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input onChange={e => setEmail(e.target.value)} type="email" placeholder="example@gmail.com"/>
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input onChange={e => setPassword(e.target.value)} type="password" placeholder="*42n16j1"/>
                    </div>
                    <div className="submit-button">
                        <button type="submit">Register</button>
                    </div>
                    <p className="to-login">
                        Already have an account?
                        <Link to="./../Login">
                            <span>Login</span>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default index