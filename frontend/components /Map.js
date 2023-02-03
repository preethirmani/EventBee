import React, {useEffect, useState} from "react";
import {GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api';
import Geocode from 'react-geocode';
import env from "react-dotenv";

const Map = ({address}) => {
  const [coordinates, setCoordinates] = useState({});
  

  const {isLoaded} = useLoadScript({
    googleMapsApiKey : process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  console.log('apiKey'+process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  Geocode.setLanguage('en');
  Geocode.fromAddress(address).then(
  (response) => {
    const { lat, lng } = response.results[0].geometry.location;
    setCoordinates({lat, lng});
  },
    (error) => {
      console.error(error);
    }
  )
  },[])


  if(!isLoaded) {
      return <div>Loading</div>
  } 

  return  (
   <div>
      <GoogleMap zoom={10} center={coordinates}
      mapContainerClassName = 'map-container'>
     
     <MarkerF  position={coordinates}  title={address} key={1}/>
      </GoogleMap>
    </div>
  )
}

export default Map;