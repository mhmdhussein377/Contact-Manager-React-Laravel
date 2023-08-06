/* eslint-disable react-hooks/rules-of-hooks */
import "./style.css"
import Header from "./../../components/Header"
import ContactList from "./../../components/ContactList"
import ContactForm from "./../../components/ContactForm"
import jwt_decode from 'jwt-decode'
import {AiOutlinePlus, AiOutlineSearch} from "react-icons/ai";
import {useEffect, useState} from "react"
import axios from "axios"

const index = () => {

    let [contacts,
        setContacts] = useState([])
    let [isOpened,
        setIsOpened] = useState(false)
    let [search,
        setSearch] = useState("")

    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()));

    const token = localStorage.getItem("token")
    const payloadBase64 = token.split(".")[1];
    const payloadDecoded = atob(payloadBase64);
    const payloadData = JSON.parse(payloadDecoded);
    const user_id = payloadData.user_data.id

    const getContacts = async() => {
        const token = localStorage.getItem("token")
        let response = await axios.post(`http://127.0.0.1:8000/api/contacts`, {user_id}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        setContacts(response.data.reverse());
    };

    useEffect(() => {
        getContacts()
    }, [])

    return (
        <div className="home">
            <Header/>
            <div className="add-contact-search container">
                <button onClick={() => setIsOpened(true)}>
                    <AiOutlinePlus size={20}/>
                    Add Contact
                </button>
                <div className="search">
                    <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search contacts" type="text"/>
                    <button type="submit"><AiOutlineSearch/></button>
                </div>
            </div>
            {isOpened && (<ContactForm
                setContacts={setContacts}
                user_id={user_id}
                setIsOpened={setIsOpened}/>)}
            <ContactList contacts={filteredContacts.length > 0 ? filteredContacts : contacts}/>
        </div>
    );
}

export default index