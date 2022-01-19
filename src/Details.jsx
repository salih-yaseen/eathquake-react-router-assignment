import {Link, useParams} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Details() {
    let {eventId} = useParams();
    const [details,setDetails]= useState([]);

   useEffect(() => {
       axios.get(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=${eventId}`).then(res =>{
           console.log(res.data)
           setDetails(res.data)
           
       }).catch( err=>{
        console.log(err)
       })

       
   }, [eventId]);
    return (
        <div>
            
                       
                            <p>Place: {details.properties.place}</p>
                            <p>Time: {details.properties.time}</p>
                            <p>Magnitude: {details.properties.mag}</p>
                            


            <Link to={"/"}>GO BACK</Link>
        </div>
    )
}

export default Details
