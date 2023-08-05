import "./style.css"
import ContactCard from "./../ContactCard"

const index = ({contacts}) => {

    console.log(contacts?.length)

    return (
        <div className="contact-list">
            {contacts.map((contact, index) => (
                <ContactCard key={index} contact={contact}/>
            ))}
        </div>
    );
}

export default index