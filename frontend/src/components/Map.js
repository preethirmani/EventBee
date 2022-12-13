import React, {useEffect, useState, useMemo} from "react";
import {GoogleMap, useLoadScript, MarkerF, Marker} from '@react-google-maps/api';
import Geocode from 'react-geocode';

const Map = ({address}) => {
  const [coordinates, setCoordinates] = useState({});
  

  const {isLoaded} = useLoadScript({
    googleMapsApiKey : "AIzaSyBXQ6wu3auum3p6Sykxtgyb1EvlYXQ6Bf4"
  });

  useEffect(() => {
  Geocode.setApiKey("AIzaSyBXQ6wu3auum3p6Sykxtgyb1EvlYXQ6Bf4");
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