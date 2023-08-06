import {useState} from "react"
import "./style.css"
import {VscChromeClose} from "react-icons/vsc";
import axios from "axios";

const index = ({setIsOpened, setContacts}) => {

    let [data,
        setData] = useState({name: "", phone_number: "", longitude: "", latitude: ""})

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        const body = {
            ...data,
            longitude: + data.longitude,
            latitude: + data.latitude,
        }
        
        let response = await axios.post("http://127.0.0.1:8000/api/create-contact", body);
        setContacts(prev => [response.data, ...prev])
        setIsOpened(prev => !prev)
    }

    return (
        <div className="contact-form">
            <div className="contact-form-box">
                <div className="close" onClick={() => setIsOpened((prev) => !prev)}>
                    <VscChromeClose size={24} color="black" className="close-icon"/>
                </div>
                <form onSubmit={handleSubmit} className="inputs">
                    <div className="input">
                        <label htmlFor="name">Name</label>
                        <input
                            onChange={handleChange}
                            name="name"
                            id="name"
                            required
                            type="text"
                            placeholder="Mhmd Hussein"/>
                    </div>
                    <div className="input">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input
                            onChange={handleChange}
                            name="phone_number"
                            id="phone-number"
                            required
                            type="text"
                            placeholder="71 953 721"/>
                    </div>
                    <div className="address-inputs">
                        <div className="input">
                            <label htmlFor="longitude">Longitude</label>
                            <input
                                onChange={handleChange}
                                name="longitude"
                                id="longitude"
                                required
                                type="text"
                                placeholder="51.34"/>
                        </div>
                        <div className="input">
                            <label htmlFor="latitude">Latitude</label>
                            <input
                                onChange={handleChange}
                                name="latitude"
                                id="latitude"
                                required
                                type="text"
                                placeholder="45.32"/>
                        </div>
                    </div>
                    <div className="add-contact-button">
                        <button type="submit">Add Contact</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default index