import "./style.css"
import ContactCard from "./../ContactCard"

const index = () => {
    return (
        <div className="contact-list">
            <ContactCard />
            <ContactCard />
            <ContactCard />
        </div>
    )
}

export default index