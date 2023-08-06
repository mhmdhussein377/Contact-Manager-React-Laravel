import React, {useEffect} from "react"
import {useParams} from "react-router-dom"
import "./style.css"
import Header from "./../../components/Header"
// import {MapContainer, TileLayer, useMap, Marker, Popup} from "react-leaflet";
import {useState} from "react";
import axios from "axios";
import {Map, Marker} from "pigeon-maps"

const index = () => {

    let [position,
        setPosition] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        const getContact = async() => {
            const token = localStorage.getItem("token")
            let response = await axios.post(`http://127.0.0.1:8000/api/contacts/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setPosition([+ response.data.latitude]);
            setPosition((prev) => [
                prev[0], + response.data.longitude
            ]);
        }
        getContact()
    }, [id])

    return (
        <React.Fragment>
            <Header/> {position.length > 0 && (
                <Map className="map" height={300} defaultCenter={position} defaultZoom={11}>
                    <Marker width={50} anchor={position}/>
                </Map>
            )}
        </React.Fragment>
    );
}

export default index