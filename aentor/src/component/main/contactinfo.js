import React from 'react';
import Ditails from './ditails';
import Follow from './follow';
import Hours from './houre';
import './main.css'


const Contactinfo = () => {
    return (
        <div className="contactinfo">
            <Ditails />
            <Hours />
            <Follow />
        </div>
    )
}

export default Contactinfo