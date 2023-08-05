import "./style.css"
import Header from "./../../components/Header"
import ContactList from "./../../components/ContactList"
import jwt_decode from 'jwt-decode'
import { AiOutlinePlus } from "react-icons/ai"

const index = () => {

    const token = localStorage.getItem("token")

    const payloadBase64 = token.split(".")[1];
    const payloadDecoded = atob(payloadBase64);
    const payloadData = JSON.parse(payloadDecoded);
    const userID = payloadData.user_data.id

    return (
        <div className="home">
            <Header/>
            <div className="add-contact container">
                <button><AiOutlinePlus /> Add Contact</button>
            </div>
            <ContactList/>
        </div>
    )
}

export default index