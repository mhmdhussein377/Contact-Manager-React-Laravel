import "./style.css"
import {BsFillTelephoneFill} from "react-icons/bs";
import {FaLocationDot} from 'react-icons/fa6'
import {Link} from "react-router-dom";

const index = ({contact}) => {

    return (
        <Link to={`/contact/${contact.id}`}>
            <div className="contact-card">
                <div className="image">MH</div>
                <div className="details">
                    <div className="name">{contact.name}</div>
                    <div className="phone">
                        <BsFillTelephoneFill/> {contact.phone_number}
                    </div>
                    <div className="address">
                        <FaLocationDot/> {+contact.latitude}, {+contact.longitude}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default index