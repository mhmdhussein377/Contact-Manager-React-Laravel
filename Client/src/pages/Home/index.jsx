import "./style.css"
import Header from "./../../components/Header"
import ContactList from "./../../components/ContactList"

const index = () => {
    return (
        <div className="home">
            <Header />
            <ContactList />
        </div>
    )
}

export default index