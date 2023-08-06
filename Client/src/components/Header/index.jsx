import {Link} from "react-router-dom"
import "./style.css"

const index = () => {

    const url = window.location.href

    return (
        <div className="header">
            {url.split("/")[3] === "contact"
                ? <Link to={"/"}>Back</Link>
                : <h2>Contact Manager</h2>}
        </div>
    );
}

export default index