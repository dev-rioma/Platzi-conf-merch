import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Map({ data }) {
  const mapStyles = {
    height: "50vh",
    width: "100%"
  }

  const defaultCenter = {
    lat: data.lat, lng: data.lng,
  }

  return (
    <LoadScript googleMapsApiKey='AIzaSyBeWA7anls_JpVspo2Wk8yhmE2e1WOJSdw'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;