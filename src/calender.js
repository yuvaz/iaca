import React from 'react';

import './calender.css';
import datalist from './data.json';

function Calender() {
    
    const [myEvents, setEvents] = React.useState([]);
    React.useEffect(() => {
        // getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
        //     setEvents(events);
        // }, 'jsonp');
        setEvents(datalist);
    }, []);
    console.log("myEvents", myEvents)
    

    return (
        <div className='calender'>
            <table>
            {myEvents.map((item, key) => {
                // return (
                //     <div>
                //         <h3>{item.date}</h3>
                //         {item.slots.map((slot) => {
                //             return (
                //                 <ul>
                //                     <li>
                //                         <span>{slot.time}</span>
                //                         <span>{slot.details}</span>
                //                     </li>
                //                 </ul>
                //             )
                //         })}
                //     </div>
                // )
                return (
                    <tbody key={key}>
                            <tr id={item?.date} className={item?.slots?.length > 0 ? 'dateBlock' : 'dateBlock end' } >
                                <th colSpan={2}>
                                    <h3>{item?.date} - {item?.day}</h3>
                                </th>
                            </tr>
                            {item?.slots?.map((slot) => {
                                return (
                                    <tr>
                                        <td>
                                            <p className='time'>{slot?.time}</p>
                                            <p className='location'>{slot?.location}</p>
                                        </td>
                                        <td>
                                            <p className='title'>{slot?.details}</p>
                                            <p className='name'>{slot?.by}</p>
                                            {slot?.map &&
                                            <p>
                                                <a href={slot?.map} className='map'>Location Map</a>
                                            </p>
                                            }
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                )
            })}
            </table>
        </div>
    ); 
}

export default Calender;