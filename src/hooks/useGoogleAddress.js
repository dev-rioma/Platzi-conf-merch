import { useState, useEffect } from 'react';
// import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios';

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBeWA7anls_JpVspo2Wk8yhmE2e1WOJSdw`;
    

    useEffect(() => {
    async function handler() {
        const response = await axios(API);
        setMap(response.data.results[0].geometry.location);
    }
    handler();
    }, []);
    return map;
};

export default useGoogleAddress;