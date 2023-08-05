import React, {useEffect} from "react"
import {useParams} from "react-router-dom"
import "./style.css"
import Header from "./../../components/Header"
import {MapContainer, TileLayer, useMap, Marker, Popup} from "react-leaflet";
import {useState} from "react";
import axios from "axios";

const index = () => {

    let [position,
        setPosition] = useState([55.505, -0.09])
    const {id} = useParams()

    useEffect(() => {
        const getContact = async() => {
            let response = await axios.post(`http://127.0.0.1:8000/api/contacts/${id}`);
            console.log(response.data)
            setPosition([+response.data.longitude]);
            setPosition((prev) => [prev[0], +response.data.latitude]);
        }
        getContact()
    }, [id])

    console.log("position")
    console.log(position)
    console.log("position")

    return (
        <React.Fragment>
            <Header/>
            <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup.
                        <br/>
                        Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </React.Fragment>
    );
}

export default index