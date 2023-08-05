import "./style.css"
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from 'react-icons/fa6'

const index = () => {
    return (
        <div className="contact-card">
            <div className="image">M</div>
            <div className="details">
                <div className="name">Mhmd Hussein</div>
                <div className="phone"><BsFillTelephoneFill/> 81 954 732</div>
                <div className="address"><FaLocationDot /> 53.24, 35.23</div>
            </div>
        </div>
    )
}

export default index