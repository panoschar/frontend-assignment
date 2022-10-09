import React from 'react';
import { useMemo, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import axios from "axios";

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

// useEffect (() => {
//     axios.get("https://services.marinetraffic.com/api/exportvesseltrack/{4edce672d943668d9f2201ddad602648151366c2}/").then(({data}) => {
//      console.log(data)
//     });
//  });
// function Search() {
//     axios.get("https://services.marinetraffic.com/api/exportvesseltrack/{4edce672d943668d9f2201ddad602648151366c2}").then(({data}) => {
//         console.log(data)
//     })
//     return <div></div>
// }

// const Data = () => {
//     return axios.get("https://services.marinetraffic.com/api/exportvesseltrack/{4edce672d943668d9f2201ddad602648151366c2}")
//           .then((response) => console.log(response));
//   }


// const Data = () => {
         
//     axios
//       .get(
//           `https://services.marinetraffic.com/api/exportvesseltrack/{4edce672d943668d9f2201ddad602648151366c2}`
//       )
//       .then((response) => {
//           console.log(response.data);
//       });
//   }

 

function Events() {

    const fetchData = () => {
        return axios.get("https://services.marinetraffic.com/api/exportvesseltrack/{4edce672d943668d9f2201ddad602648151366c2}")
              .then((data) => console.log(data));
      }
    
      useEffect(() => {
        fetchData();
      },[])

     return (
        <div className='box'>
            <h1>panos</h1>
            <input></input>
            <button>find vessel</button>
        </div>
    )
};




export default Home;