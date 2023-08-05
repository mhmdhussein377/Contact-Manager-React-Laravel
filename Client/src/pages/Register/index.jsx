import {Link, useNavigate} from "react-router-dom";
import "./style.css"
import {useState} from "react";
import axios from "axios"

const index = () => {

    let [firstName,
        setFirstName] = useState("")
    let [lastName,
        setLastName] = useState("")
    let [email,
        setEmail] = useState("")
    let [password,
        setPassword] = useState("")
    let [emailError,
        setEmailError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            let data = {
                first_name: firstName,
                last_name: lastName,
                email,
                password
            };

            let response = await axios.post("http://127.0.0.1:8000/api/register", data);
            console.log(response.data)
            if (response.data.status === "success") {
                localStorage.setItem("token", response.data.authorisation.token)
                navigate("/")
            }

        } catch (error) {
            setEmailError(true);
            setTimeout(() => {
                setEmailError(false);
            }, 3000);
        }
    }

    return (
        <div className="register">
            <div className="register-box">
                <div className="headers">
                    <h2>
                        create your
                        <span>account</span>
                    </h2>
                    <p>
                        Start managing your contacts by creating an account. It's quick and easy!
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="inputs">
                    <div className="name-inputs">
                        <div className="input first-name-input">
                            <label htmlFor="first-name">First Name</label>
                            <input
                                id="first-name"
                                required
                                onChange={e => setFirstName(e.target.value)}
                                type="text"
                                placeholder="Mohammad"/>
                        </div>
                        <div className="input last-name-input">
                            <label htmlFor="last-name">Last Name</label>
                            <input
                                id="last-name"
                                required
                                onChange={e => setLastName(e.target.value)}
                                type="text"
                                placeholder="Hussein"/>
                        </div>
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            required
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            placeholder="example@gmail.com"/> {emailError && <div className="email-error">Email already exists</div>}
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            required
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="*42n16j1"
                            minLength={6}/>
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