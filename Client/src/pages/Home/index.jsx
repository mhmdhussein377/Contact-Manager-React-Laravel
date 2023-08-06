/* eslint-disable react-hooks/rules-of-hooks */
import "./style.css"
import Header from "./../../components/Header"
import ContactList from "./../../components/ContactList"
import ContactForm from "./../../components/ContactForm"
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

    const getContacts = async() => {
        let response = await axios.post(`http://127.0.0.1:8000/api/contacts`);
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
                setIsOpened={setIsOpened}/>)}
            <ContactList contacts={filteredContacts.length > 0 ? filteredContacts : contacts}/>
        </div>
    );
}

export default index