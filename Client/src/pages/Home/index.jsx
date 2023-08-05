import "./style.css"
import Header from "./../../components/Header"
import ContactList from "./../../components/ContactList"
import ContactForm from "./../../components/ContactForm"
import jwt_decode from 'jwt-decode'
import { AiOutlinePlus } from "react-icons/ai"
import { useState } from "react"

const index = () => {

    const [isOpened, setIsOpened] = useState(false)

    const token = localStorage.getItem("token")
    const payloadBase64 = token.split(".")[1];
    const payloadDecoded = atob(payloadBase64);
    const payloadData = JSON.parse(payloadDecoded);
    const userID = payloadData.user_data.id

    return (
        <div className="home">
            <Header/>
            <div className="add-contact container">
                <button onClick={e => setIsOpened(true)}><AiOutlinePlus size={20} /> Add Contact</button>
            </div>
            {isOpened && <ContactForm setIsOpened={setIsOpened} />}
            <ContactList/>
        </div>
    )
}

export default index