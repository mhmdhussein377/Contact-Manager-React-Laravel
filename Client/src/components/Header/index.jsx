import {Link, useNavigate} from "react-router-dom"
import "./style.css"

const index = () => {

    const navigate = useNavigate()
    const url = window.location.href

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/login")
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