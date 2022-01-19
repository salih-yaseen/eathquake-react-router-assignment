import {Link, useParams} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Details() {
    let {eventId} = useParams();
    const [details,setDetails]= useState([]);

   useEffect( async () => {
       const respond = await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=${eventId}`);
       const data = await respond.json();
       setDetails(data);
    //    axios.get(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=${eventId}`).then(res =>{
    //        console.log(res.data)
    //        setDetails(res.data)
           
    //    }).catch( err=>{
    //     console.log(err)
    //    })

       
   }, [eventId]);
    return (
        <>
            <h1 className='title'>Event Details</h1>
            <div className='event-details'> 
                <p>Place: {details?.properties?.place}</p>
                <p>Time: {details?.properties?.time}</p>
                <p>Magnitude: {details?.properties?.mag}</p>
                <p>Latitude: {details?.properties?.products?.origin[0]?.properties?.latitude}</p>
                <p>Longitude: {details?.properties?.products?.origin[0]?.properties?.longitude}</p>
                <Link to={"/"}>GO BACK</Link>
            </div>
        </>
    )
}

export default Details
