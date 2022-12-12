import React, {useEffect, useState} from "react";
import {GoogleMap, MarkerF} from '@react-google-maps/api';
import Geocode from 'react-geocode';

const Map = ({address}) => {
  const [ coordinates, setCoordinates ] = useState({});
  console.log(address);
  useEffect(() => {
  Geocode.setApiKey("AIzaSyDLAUQABabVV75TmnaGGgCYqJ3-CA-9Tg0");
  Geocode.setLanguage('en');
  Geocode.fromAddress(address).then(
  (response) => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng);
    
    
    setCoordinates({lat, lng});
  },
    (error) => {
      console.error(error);
    }
  )
  },[])
  return  (
   <div>
      <GoogleMap zoom={10} center={coordinates}
      mapContainerClassName = 'map-container'>
      </GoogleMap>
    </div>
  )
}

export default Map;