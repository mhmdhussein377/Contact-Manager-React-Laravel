import { useNavigate } from "react-router-dom"
import "./style.css"

const index = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <div className="header">
            <h2>Contact Manager</h2>
            <div onClick={handleLogout} className="logout">Logout</div>
        </div>
    )
}

export default index