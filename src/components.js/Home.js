import React from 'react';
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';



const mapContainerStyle = { width: "100%", height: "100vh", margin: "0" };

function Home() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>

    return (
        <div className="container">
            <Map />
            <Events />

        </div>
    )
};

function Map() {
    const center = useMemo(() => ({ lat: 37.983810, lng: 23.727539 }), []);

    return <GoogleMap zoom={10} center={center} mapContainerStyle={mapContainerStyle}>
        <Marker position={center} />
    </GoogleMap>;
};

function Events() {

    return (
        <div className='box'>
            <h1>panos</h1>
            <input></input>
            <button>find vessel</button>
        </div>
    )
}



export default Home;