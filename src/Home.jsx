import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
function Home() {
   const [events,setEvents]= useState([]);

   useEffect(() => {
       axios.get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&endtime=2022-12-01&limit=10').then(res =>{
           console.log(res)
           setEvents(res.data.features)
           
       }).catch( err=>{
        console.log(err)
       })

      
   }, []);
   
    return (
        <>
            <h1>Choose a city that you want</h1>
            <div className='event-wrapper'>
                    { 
                        events.map(event=>(
                            
                            <Link to={`./Details/${event.id}`} className="events" key={event.id}>
                                <p>Place: {event.properties.place}</p>
                                <p>Time: {event.properties.time}</p>
                            </Link>
                        ))
                    }
            </div>
        </>
    )
}

export default Home
