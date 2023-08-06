import {Link, useNavigate} from "react-router-dom"
import "./style.css"
import axios from "axios"

const index = () => {

    const navigate = useNavigate()
    const url = window.location.href

    const handleLogout = async() => {
        const token = localStorage.getItem("token")
        let response = await axios.post("http://127.0.0.1:8000/api/logout", null, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        localStorage.removeItem("token")
        navigate("/")
    }

    return (
        <div className="header">
            {url.split("/")[3] === "contact"
                ? <Link to={"/home"}>Back</Link>
                : <h2>Contact Manager</h2>}
            <div onClick={handleLogout} className="logout">
                Logout
            </div>
        </div>
    );
}

export default index