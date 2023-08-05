/* eslint-disable react-hooks/rules-of-hooks */
import "./style.css"
import Header from "./../../components/Header"
import ContactList from "./../../components/ContactList"
import ContactForm from "./../../components/ContactForm"
import jwt_decode from 'jwt-decode'
import {AiOutlinePlus} from "react-icons/ai"
import {useEffect, useState} from "react"
import axios from "axios"

const index = () => {

    let [contacts,
        setContacts] = useState([])
    let [isOpened,
        setIsOpened] = useState(false)

    const token = localStorage.getItem("token")
    const payloadBase64 = token.split(".")[1];
    const payloadDecoded = atob(payloadBase64);
    const payloadData = JSON.parse(payloadDecoded);
    const user_id = payloadData.user_data.id

    useEffect(() => {
        const getContacts = async() => {
            let response = await axios.post(`http://127.0.0.1:8000/api/contacts`, {user_id});
            setContacts(response.data)
        }
        getContacts()
    }, [])

    return (
        <div className="home">
            <Header/>
            <div className="add-contact container">
                <button onClick={(e) => setIsOpened(true)}>
                    <AiOutlinePlus size={20}/>
                    Add Contact
                </button>
            </div>
            {isOpened && (<ContactForm setContacts={setContacts} user_id={user_id} setIsOpened={setIsOpened}/>)}
            <ContactList contacts={contacts}/>
        </div>
    );
}

export default index