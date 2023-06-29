import React from 'react';

import './calender.css';
// import datalist from './data.json';

function Footer() {
    
    // const [myEvents, setEvents] = React.useState([]);
    // React.useEffect(() => {
    //     // getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
    //     //     setEvents(events);
    //     // }, 'jsonp');
    //     setEvents(datalist);
    // }, []);
    // console.log("myEvents", myEvents)
    

    return (
        <div className='footer'>
            <span>Created by Yuva</span>
            <div>
                <p className='bold'>All the Classes are "In-Person" & "Virtual".</p>
                <p><span className='bold'>In-Person -</span> <a href="https://www.google.com/maps/place/IACA/@33.8470953,-84.5180866,15z/data=!4m6!3m5!1s0x88f51b3c61ee9949:0x428bedc29a944eb5!8m2!3d33.8470953!4d-84.5180866!16s%2Fg%2F11sq3ln_f_?entry=ttu" className="map">Location Map</a></p>
                <p><span className='bold'>Virtual -</span> Registered Parents receive Zoom link</p>
            </div>
            
        </div>
    ); 
}

export default Footer;