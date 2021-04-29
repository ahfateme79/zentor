import React from 'react';
import './main.css'



const Hours=()=>{
    return(
        <div className="hours">
            <h6>Open Hours</h6>
            <div className="days">
                <div>
                    <p>Sunday</p>
                    <p>Mon-Fri</p>
                    <p>Saturday</p>
                </div>
                <div>
                    <p>10:30 AM - 10:00 PM</p>
                    <p>9:00 AM - 8:00 PM</p>
                    <p>11:30 AM - 10:00 PM</p>
                </div>
            </div>
        </div>
    )
}

export default Hours