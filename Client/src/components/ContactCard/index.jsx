import "./style.css"
import {BsFillTelephoneFill} from "react-icons/bs";
import {FaLocationDot} from 'react-icons/fa6'
import {Link} from "react-router-dom";

const index = ({contact}) => {

    const colors = [
        "#FF5733",
        "#00AEEF",
        "#5EBC22",
        "#E84C3D",
        "#FFC107",
        "#9C27B0",
        "#FF9800"
    ];

    const randomIndex = Math.floor(Math.random() * 7);
    const randomColor = colors[randomIndex];

    let image = contact
        .name
        .split(" ")
        .length >= 2
        ? contact
            .name
            .split("")[0][0] + contact
            .name
            .split("")[1][0]
        : contact
            .name
            .split("")[0][0]

    return (
        <Link to={`/contact/${contact.id}`}>
            <div className="contact-card">
                <div
                    style={{
                    backgroundColor: randomColor
                }}
                    className="image">
                    {image}
                </div>
                <div className="details">
                    <div className="name">{contact.name}</div>
                    <div className="phone">
                        <BsFillTelephoneFill/> {contact.phone_number}
                    </div>
                    <div className="address">
                        <FaLocationDot/> {+ contact.latitude}, {+ contact.longitude}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default index